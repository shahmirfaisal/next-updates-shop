import axios from "axios"
import Layout from "../../../components/Layout"
import Head from "next/head"
import { Container, Grid, Typography, Button, Box } from "@material-ui/core"
import { useStyles } from "../../../styles/PostPageStyle"
import { useRouter } from "next/router"
import LatestPosts from "../../../components/LatestPosts"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { createClient } from "contentful"
import moment from "moment"
import { BLOCKS } from "@contentful/rich-text-types"
import Image from "next/image"

export default function News({ post, categories }) {
  const classes = useStyles()
  const router = useRouter()
  console.log(post)

  let options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => (
        <Box
          sx={{
            "& > img": {
              display: "block",
              width: "100%"
            }
          }}
        >
          <img
            src={"https:" + node.data.target.fields.file.url}
            alt={node.data.target.fields.title}
          />
        </Box>
      )
    }
  }

  return (
    <Layout categories={categories}>
      <Head>
        <title>{`${post.title} - Updates Shop`}</title>
        <meta name="description" content={post.description} />
        <meta property="og:url" content={router.pathname} key="ogurl" />
        <meta
          property="og:image"
          content={post.coverImage.fields.file.url}
          key="ogimage"
        />
        <meta property="og:site_name" content="Updates Shop" key="ogsitename" />
        <meta
          property="og:title"
          content={`${post.title} - Updates Shop`}
          key="ogtitle"
        />
        <meta
          property="og:description"
          content={post.description}
          key="ogdesc"
        />
      </Head>

      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={10} justifyContent="center">
          <Grid
            item
            md={8}
            xs={12}
            component="article"
            className={classes.article}
          >
            <header>
              <Box
                sx={{
                  "& > img": {
                    display: "block",
                    width: "100%"
                  }
                }}
              >
                <img
                  src={"https:" + post.coverImage.fields.file.url}
                  alt={post.coverImage.fields.title}
                />
              </Box>
              <Typography className={classes.title} variant="h1">
                {post.title}
              </Typography>
              <Typography className={classes.date}>
                Published on {moment(post.date).format("DD-MM-YYYY")}
              </Typography>
            </header>

            <Typography
              component="hr"
              style={{ marginBottom: "20px" }}
            ></Typography>

            <section className={classes.section}>
              {documentToReactComponents(post.body, options)}
            </section>

            <Typography component="hr"></Typography>

            <Button
              variant="outlined"
              color="primary"
              onClick={() => router.back()}
            >
              Go back
            </Button>
          </Grid>

          {/* <Grid item md={4} xs={12}></Grid> */}
        </Grid>

        {/* <LatestPosts posts={[]} /> */}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params: { slug } }) {
  console.log("SLUG", slug)
  const client = createClient({
    space: "4q0lf2wn2f4p",
    accessToken: "y9gnClGiKgF9rp0lo7qpq5MX_UUUcPBBTO3SAbjFjnk"
  })

  const res = await client.getEntries({
    content_type: "article",
    "fields.slug": slug
  })

  const categoryRes = await client.getEntries({ content_type: "category" })

  return {
    props: {
      post: res.items[0].fields,
      posts: [],
      categories: categoryRes.items
    }
  }
}

export const getStaticPaths = async () => {
  const client = createClient({
    space: "4q0lf2wn2f4p",
    accessToken: "y9gnClGiKgF9rp0lo7qpq5MX_UUUcPBBTO3SAbjFjnk"
  })

  const res = await client.getEntries({ content_type: "article" })

  const paths = res.items.map((item) => {
    return {
      params: {
        slug: item.fields.slug
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}
