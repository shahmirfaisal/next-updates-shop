import { useState } from "react";
import Post from "../components/Post";
import Aside from "../components/Aside";
import { Container, Grid, Button } from "@material-ui/core";
import { useStyles } from "../styles/HomeStyle";

export default function Category(props) {
  const classes = useStyles();
  const [numOfPosts, setNumOfPosts] = useState(10);

  const loadMore = () => {
    setNumOfPosts((numOfPosts) => numOfPosts + 10);
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: "80px" }}>
      <Grid container justify="space-between">
        <Grid item md={12} xs={12} component="section">
          <Grid
            container
            spacing={6}
            className={classes.posts}
            style={{ transform: "none" }}
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
  );
}
