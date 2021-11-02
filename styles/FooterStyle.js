import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  footer: {
    color: "white",
    backgroundColor: "rgb(36, 36, 36)",
    padding: "100px 0",
    marginTop: "100px",

    "& p": {
      marginBottom: "8px",
      color: "#d4d4d4",
    },
    "& a": {
      textDecoration: "none",
      color: "white",
      display: "block",
      marginBottom: "8px",
      color: "#d4d4d4",
    },
  },

  bold: {
    fontWeight: 600,
    marginBottom: "15px",
    color: "white",
  },
});
