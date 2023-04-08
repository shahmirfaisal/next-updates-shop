import { createClient } from "contentful"
import Layout from "../../../components/Layout"
import { Button, Container, Grid, Typography } from "@material-ui/core"
import { AdBanner } from "../../../components/AdBanner"
import Post from "../../../components/Post"
import { useStyles } from "../../../styles/HomeStyle"

const CategoryPage = ({ articles, categories, name }) => {
  const classes = useStyles()
  console.log(articles)

  return (
    <Layout categories={categories}>
      <Container maxWidth="sm" style={{ marginTop: "50px" }}>
        <Typography
          component="h1"
          variant="h2"
          style={{ marginBottom: "30px", fontWeight: 700 }}
        >
          {name} Articles
        </Typography>
        <Grid container justifyContent="center" spacing={3} wrap="wrap-reverse">
          <Grid item component="section">
            <Grid
              container
              spacing={6}
              //   className={classes.posts}
              id="posts"
              component="section"
            >
              {articles.map((post) => (
                <Grid item xs={12} md={12} key={post.id}>
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
  )
}

export const getStaticPaths = async () => {
  const client = createClient({
    space: "4q0lf2wn2f4p",
    accessToken: "y9gnClGiKgF9rp0lo7qpq5MX_UUUcPBBTO3SAbjFjnk"
  })

  const categoryRes = await client.getEntries({ content_type: "category" })

  const paths = categoryRes.items.map((item) => {
    return {
      params: {
        name: item.fields.name,
        id: item.sys.id
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  console.log(params)
  const client = createClient({
    space: "4q0lf2wn2f4p",
    accessToken: "y9gnClGiKgF9rp0lo7qpq5MX_UUUcPBBTO3SAbjFjnk"
  })

  const articleRes = await client.getEntries({
    content_type: "article",
    "fields.category.fields.name": params.name,
    "fields.category.sys.contentType.sys.id": "category"
  })

  const categoryRes = await client.getEntries({ content_type: "category" })

  return {
    props: {
      articles: articleRes.items,
      categories: categoryRes.items,
      name: params.name
    }
  }
}

export default CategoryPage
