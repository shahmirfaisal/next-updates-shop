import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  CardActionArea,
} from "@material-ui/core";
import { useStyles } from "../styles/PostStyle.js";
import Link from "next/link";
import { useRouter } from "next/router";
import slugify from "slugify";

const Post = ({ post }) => {
  const classes = useStyles();
  const router = useRouter();
  const slug = slugify(post.title, {
    remove: /[*+~.()'"!:@]/g,
    lower: true,
  });

  return (
    <Card className={classes.card} component="article">
      <CardActionArea>
        <CardMedia
          className={classes.img}
          title={post.title}
          image={post.coverImage}
          onClick={() => router.push(`/news/${slug}/${post.id}`)}
        />
      </CardActionArea>
      <CardContent>
        <Typography variant="h5" className={classes.title}>
          <Link href={`/news/${slug}/${post.id}`}>{post.title}</Link>
        </Typography>
        <Typography variant="body1">{post.excerpt}</Typography>

        <Typography style={{ marginTop: "15px" }}>{post.time}</Typography>
      </CardContent>

      <CardActions>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => router.push(`/news/${slug}/${post.id}`)}
        >
          Continue reading...
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
