import axios from "axios";
import Layout from "../components/Layout";
import Head from "next/head";
import Category from "../components/Category";
import { Typography, Container } from "@material-ui/core";

export default function SportPosts(props) {
  return (
    <Layout>
      <Head>
        <title>Sport - Updates Shop</title>
        <meta
          name="description"
          content="Get the latest news, headlines and stories from Pakistan and across the world. We have the most up to date information on politics, technology, business, entertainment and more."
        />
      </Head>

      <Container maxWidth="lg">
        <Typography
          variant="h4"
          style={{
            marginTop: "40px",
            fontWeight: 600,
            textDecoration: "underline",
          }}
        >
          Read Sport News
        </Typography>
      </Container>

      <Category posts={props.posts} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await axios.get("https://latest-news-api.herokuapp.com/Sport");
  const posts = res.data;
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}
