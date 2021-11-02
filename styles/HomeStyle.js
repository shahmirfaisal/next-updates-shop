import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  container: {
    backgroundImage: "url('./assets/bg.jpg')",
    minHeight: "600px",
    color: "white",
    paddingTop: "100px",
    clipPath: `polygon(
    50% 0%,
    100% 0,
    100% 35%,
    100% 100%,
    79% 86%,
    50% 100%,
    20% 87%,
    0 100%,
    0% 35%,
    0 0
  )`,
  },

  content: {
    width: "800px",
    maxWidth: "100%",

    "& h3": {
      fontWeight: 600,
    },

    "& h5": {
      margin: "25px 0",
      fontWeight: 400,
      width: "600px",
      maxWidth: "100%",
    },
  },

  posts: {
    transform: "translateY(-100px)",
  },
});
