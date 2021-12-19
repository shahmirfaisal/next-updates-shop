import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  container: {
    marginTop: "100px",
  },

  article: {
    backgroundColor: "white",
    "& hr": {
      border: "0.2px solid rgba(0, 0, 0, 0.1)",
      marginBottom: "50px",
    },
  },

  img: {
    marginBottom: "15px",

    "& img": {
      width: "100%",
      height: "100%",
      display: "block",
      objectFit: "cover",
      objectPosition: "top",
    },
  },

  title: {
    fontWeight: 800,
    margin: "20px 0",
    fontSize: "2.125rem",
    lineHeight: 1.235,
  },

  date: {
    color: "rgb(95, 95, 95)",
    marginBottom: "20px",
    fontWeight: 500,
  },

  section: {
    "& p": {
      marginBottom: "15px",
      lineHeight: 1.6,
      wordSpacing: "3px",
    },
    "& h1, & h2, & h3, & h4, & h5, & h6": {
      marginBottom: "25px",
    },

    "& ul, & ol": {
      padding: "0 0 0 20px",
    },
  },
});
