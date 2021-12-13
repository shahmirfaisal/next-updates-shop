import { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import { Button, Container, Typography, Grid } from "@material-ui/core";
import { LocalLibrary } from "@material-ui/icons";
import { useStyles } from "../styles/HomeStyle";
import axios from "axios";
import Post from "../components/Post";
import Aside from "../components/Aside";
import { useRouter } from "next/router";

export default function Home(props) {
  const classes = useStyles();
  const [numOfPosts, setNumOfPosts] = useState(10);
  const router = useRouter();

  const loadMore = () => {
    setNumOfPosts((numOfPosts) => numOfPosts + 10);
  };

  return (
    <Layout>
      <Head>
        <title>Updates Shop - Latest News, Headlines and Stories.</title>
        <meta
          name="description"
          content="Get the latest news, headlines and stories from Pakistan and across the world. We have the most up to date information on politics, technology, business, entertainment and more."
        />
        <meta property="og:url" content={router.pathname} key="ogurl" />
        <meta property="og:image" content="/favicon.ico" key="ogimage" />
        <meta property="og:site_name" content="Updates Shop" key="ogsitename" />
        <meta
          property="og:title"
          content="Updates Shop - Latest News, Headlines and Stories."
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="Get the latest news, headlines and stories from Pakistan and across the world. We have the most up to date information on politics, technology, business, entertainment and more."
          key="ogdesc"
        />
      </Head>

      <section className={classes.container}>
        <Container maxWidth="lg" component="section">
          <div className={classes.content}>
            <Typography variant="h3">Welcome to Updates Shop!</Typography>
            <Typography variant="h5">
              A place where we will keep you up-to-date with every single news.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={<LocalLibrary />}
              component="a"
              href="#posts"
            >
              Start Reading
            </Button>
          </div>
        </Container>
      </section>

      <Container maxWidth="lg">
        <Grid container justifyContent="space-between">
          <Grid item md={12} xs={12} component="section">
            <Grid
              container
              spacing={6}
              className={classes.posts}
              id="posts"
              component="section"
            >
              {props.posts.slice(0, numOfPosts).map((post) => (
                <Grid item xs={12} md={6} key={post.id}>
                  <Post post={post} />
                </Grid>
              ))}
            </Grid>

            {numOfPosts >= props.posts.length ? null : (
              <Button
                variant="outlined"
                color="primary"
                style={{ margin: "50px auto 0 auto", display: "block" }}
                onClick={loadMore}
              >
                Load more articles...
              </Button>
            )}
          </Grid>

          {/* <Grid item md={4} xs={12}>
            <Aside />
          </Grid> */}
        </Grid>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await axios.get("https://latest-news-api.herokuapp.com/Latest");
  const posts = res.data;
  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
}
