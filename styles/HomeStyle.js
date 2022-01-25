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

    "@media (max-width: 599px)": {
      "&": {
        clipPath: "none",
        paddingBottom: "60px",
      },
    },
  },

  content: {
    width: "800px",
    maxWidth: "100%",

    "& h1": {
      fontWeight: 600,
      fontSize: "3rem",
      lineHeight: "1.167",
    },

    "& p": {
      margin: "25px 0",
      fontWeight: 400,
      width: "700px",
      maxWidth: "100%",
      display: "block",
      fontSize: "1.3rem",
      lineHeight: 1.6,
    },
  },

  posts: {
    transform: "translateY(-100px)",
    "@media (max-width: 599px)": {
      "&": {
        transform: "translateY(0)",
      },
    },
  },
});
