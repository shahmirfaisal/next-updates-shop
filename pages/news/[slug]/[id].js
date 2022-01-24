import axios from "axios";
import Layout from "../../../components/Layout";
import Head from "next/head";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import { useStyles } from "../../../styles/PostPageStyle";
import { useRouter } from "next/router";
import LatestPosts from "../../../components/LatestPosts";
import slugify from "slugify";

export default function News(props) {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>{`${props.post.title} - Updates Shop`}</title>
        <meta
          name="description"
          content={props.post.text.slice(0, 300) + "..."}
        />
        <meta property="og:url" content={router.pathname} key="ogurl" />
        <meta
          property="og:image"
          content={props.post.coverImage}
          key="ogimage"
        />
        <meta property="og:site_name" content="Updates Shop" key="ogsitename" />
        <meta
          property="og:title"
          content={`${props.post.title} - Updates Shop`}
          key="ogtitle"
        />
        <meta
          property="og:description"
          content={props.post.text.slice(0, 300) + "..."}
          key="ogdesc"
        />
      </Head>

      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={10}>
          <Grid
            item
            md={8}
            xs={12}
            component="article"
            className={classes.article}
          >
            <header>
              <div className={classes.img}>
                <img src={props.post.coverImage} alt={props.post.title} />
              </div>
              <Typography className={classes.title} variant="h1">
                {props.post.title}
              </Typography>
              <Typography className={classes.date}>
                {props.post.time}
              </Typography>
            </header>

            <Typography
              component="hr"
              style={{ marginBottom: "20px" }}
            ></Typography>

            <section
              className={classes.section}
              dangerouslySetInnerHTML={{ __html: props.post.html }}
            ></section>

            <Typography component="hr"></Typography>

            <Button
              variant="outlined"
              color="primary"
              onClick={() => router.back()}
            >
              Go back
            </Button>
          </Grid>

          <Grid item md={4} xs={12}></Grid>
        </Grid>

        <LatestPosts posts={props.posts} />
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params: { id } }) {
  try {
    const postRes = await axios.get(
      `https://latest-news-api.herokuapp.com/news/${id}`
    );
    const postsRes = await axios.get(
      "https://latest-news-api.herokuapp.com/Latest"
    );
    const post = postRes.data;
    let posts = postsRes.data;
    posts = posts?.slice(0, 6);

    return {
      props: {
        post,
        posts,
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      notFound: true,
      revalidate: 60,
    };
  }
}

export const getStaticPaths = async () => {
  let posts = [];
  const endpoints = [
    "https://latest-news-api.herokuapp.com/Latest",
    "https://latest-news-api.herokuapp.com/Sport",
    "https://latest-news-api.herokuapp.com/Technology",
    "https://latest-news-api.herokuapp.com/Coronavirus",
    "https://latest-news-api.herokuapp.com/Business",
  ];
  const responses = await axios.all(
    endpoints.map((endpoint) => axios.get(endpoint))
  );

  responses.forEach((res) => {
    posts = posts.concat(res.data);
  });

  const paths = posts.map((post) => {
    return {
      params: {
        id: post.id,
        slug: slugify(post.title, {
          remove: /[*+~.()'"!:@]/g,
          lower: true,
        }),
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};
