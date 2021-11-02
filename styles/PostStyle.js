import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  img: {
    height: "30vw",
  },

  card: {
    boxShadow: "1px 2px 10px rgba(0, 0, 0, 0.1)",
  },

  title: {
    fontWeight: 600,
    display: "inline-block",
    marginBottom: "20px",

    "& a": { color: "black", textDecoration: "none" },

    "&:hover": {
      textDecoration: "underline",
    },
  },
});
