import axios from "axios";
import Layout from "../components/Layout";
import Head from "next/head";
import Category from "../components/Category";
import { Typography, Container } from "@material-ui/core";
import { useRouter } from "next/router";

export default function LatestPosts(props) {
  const {
    pathname,
    query: { category },
  } = useRouter();

  return (
    <Layout>
      <Head>
        <title>
          {category[0].toUpperCase() + category.slice(1)} - Updates Shop
        </title>
        <meta name="description" content={props.posts[0].excerpt} />
        <meta property="og:url" content={pathname} key="ogurl" />
        <meta property="og:image" content="/favicon.ico" key="ogimage" />
        <meta property="og:site_name" content="Updates Shop" key="ogsitename" />
        <meta
          property="og:title"
          content={`${
            category[0].toUpperCase() + category.slice(1)
          } - Updates Shop`}
          key="ogtitle"
        />
        <meta
          property="og:description"
          content={props.posts[0].excerpt}
          key="ogdesc"
        />
      </Head>

      <Container maxWidth="lg">
        <Typography
          variant="h1"
          style={{
            marginTop: "40px",
            fontWeight: 600,
            textDecoration: "underline",
            fontSize: "2.125rem",
          }}
        >
          Read {category[0].toUpperCase() + category.slice(1)} News
        </Typography>
      </Container>

      <Category posts={props.posts} />
    </Layout>
  );
}

export const getStaticProps = async ({ params: { category } }) => {
  const res = await axios.get(
    `https://latest-news-api.herokuapp.com/${category}`
  );
  const posts = res.data;
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  const categoriesRes = await axios.get(
    "https://latest-news-api.herokuapp.com/categories"
  );
  const categories = categoriesRes.data;

  const paths = categories.map((category) => ({
    params: { category: category.toLowerCase() },
  }));

  return {
    paths,
    fallback: false,
  };
};
