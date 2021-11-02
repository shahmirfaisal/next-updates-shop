import axios from "axios";
import Layout from "../components/Layout";
import Head from "next/head";
import Category from "../components/Category";

export default function LatestPosts(props) {
  return (
    <Layout>
      <Head>
        <title>Latest - Updates Shop</title>
        <meta
          name="description"
          content="Updates Shop is a news platform which gives latest news and updates!"
        />
      </Head>

      <Category posts={props.posts} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await axios.get("https://latest-news-api.herokuapp.com/Latest");
  const posts = res.data;
  return {
    props: {
      posts,
    },
  };
}
