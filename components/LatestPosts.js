import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import Post from "./Post";

const LatestPosts = (props) => {
  return (
    <Box marginTop={17}>
      <Typography
        style={{
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "20px",
        }}
        variant="h4"
      >
        Latest Posts
      </Typography>

      <Grid container spacing={4} component="section" justify="center">
        {props.posts.map((post) => (
          <Grid item xs={12} md={6} lg={4} key={post.id}>
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LatestPosts;
