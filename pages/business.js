import axios from "axios";
import Layout from "../components/Layout";
import Head from "next/head";
import Category from "../components/Category";
import { Typography, Container } from "@material-ui/core";

export default function BusinessPosts(props) {
  return (
    <Layout>
      <Head>
        <title>Business - Updates Shop</title>
        <meta
          name="description"
          content="Updates Shop is a news platform which gives latest news and updates!"
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
          Read Business News
        </Typography>
      </Container>

      <Category posts={props.posts} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await axios.get("https://latest-news-api.herokuapp.com/Business");
  const posts = res.data;
  return {
    props: {
      posts,
    },
  };
}
