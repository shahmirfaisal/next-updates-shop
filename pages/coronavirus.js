import axios from "axios";
import Layout from "../components/Layout";
import Head from "next/head";
import Category from "../components/Category";
import { Typography, Container } from "@material-ui/core";

export default function CoronavirusPosts(props) {
  return (
    <Layout>
      <Head>
        <title>Coronavirus - Updates Shop</title>
        <meta
          name="description"
          content="Get the latest news, headlines and stories from Pakistan and across the world. We have the most up to date information on politics, technology, business, entertainment and more."
        />
        <meta property="og:url" content={window.location.href} key="ogurl" />
        <meta property="og:image" content="/favicon.ico" key="ogimage" />
        <meta property="og:site_name" content="Updates Shop" key="ogsitename" />
        <meta
          property="og:title"
          content="Coronavirus - Updates Shop"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="Get the latest news, headlines and stories from Pakistan and across the world. We have the most up to date information on politics, technology, business, entertainment and more."
          key="ogdesc"
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
          Read Coronavirus News
        </Typography>
      </Container>

      <Category posts={props.posts} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await axios.get(
    "https://latest-news-api.herokuapp.com/Coronavirus"
  );
  const posts = res.data;
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}
