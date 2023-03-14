import React from "react"
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  CardActionArea
} from "@material-ui/core"
import { useStyles } from "../styles/PostStyle.js"
import Link from "next/link"
import { useRouter } from "next/router"
import slugify from "slugify"
import moment from "moment"

const Post = ({ post }) => {
  const classes = useStyles()
  const router = useRouter()
  const slug = slugify(post.fields.title, {
    remove: /[*+~.()'"!:@]/g,
    lower: true
  })

  return (
    <Card className={classes.card} component="article">
      <CardActionArea>
        <CardMedia
          className={classes.img}
          title={post.fields.coverImage.fields.title}
          image={post.fields.coverImage.fields.file.url}
          onClick={() => router.push(`/news/${slug}`)}
        />
      </CardActionArea>
      <CardContent>
        <Typography variant="h5" className={classes.title}>
          <Link href={`/news/${slug}`}>{post.fields.title}</Link>
        </Typography>
        <Typography variant="body1">{post.fields.description}</Typography>

        <Typography style={{ marginTop: "15px" }}>
          {moment(post.fields.date).format("DD-MM-YYYY")}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => router.push(`/news/${slug}`)}
        >
          Continue reading...
        </Button>
      </CardActions>
    </Card>
  )
}

export default Post
