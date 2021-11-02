import { useEffect } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import { Button, Container, Typography, Grid } from "@material-ui/core";
import { LocalLibrary } from "@material-ui/icons";
import { useStyles } from "../styles/HomeStyle";
import axios from "axios";
import Post from "../components/Post";
import Aside from "../components/Aside";

export default function Home(props) {
  const classes = useStyles();

  useEffect(() => {
    console.log(props.posts);
  }, []);

  return (
    <Layout>
      <Head>
        <title>Updates Shop</title>
        <meta
          name="description"
          content="Updates Shop is a news platform which gives latest news and updates!"
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
        <Grid container justify="space-between">
          <Grid item md={12} xs={12} component="section">
            <Grid
              container
              spacing={6}
              className={classes.posts}
              id="posts"
              component="section"
            >
              {props.posts.map((post) => (
                <Grid item xs={12} md={6} key={post.id}>
                  <Post post={post} />
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* <Grid item md={4} xs={12}>
            <Aside />
          </Grid> */}
        </Grid>
      </Container>
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
