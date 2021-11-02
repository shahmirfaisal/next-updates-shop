import Post from "../components/Post";
import Aside from "../components/Aside";
import { Container, Grid } from "@material-ui/core";
import { useStyles } from "../styles/HomeStyle";

export default function Category(props) {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" style={{ marginTop: "100px" }}>
      <Grid container justify="space-between">
        <Grid item md={12} xs={12} component="section">
          <Grid
            container
            spacing={6}
            className={classes.posts}
            style={{ transform: "none" }}
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
  );
}
