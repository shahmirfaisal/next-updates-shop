import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    backgroundColor: "white",
    color: "black",
    boxShadow:
      "0px 2px 2px -1px rgba(0, 0, 0, 0.1), 0px 1px 2px 0px rgba(0, 0, 0, 0.1), 0px 1px 5px 0px rgba(0, 0, 0, 0.1)",
    "& h5": {
      fontWeight: 600,
    },
  },

  title: {
    flexGrow: 1,
    cursor: "pointer",
  },

  link: {
    "& a": {
      fontWeight: 500,
      color: "black",
      textDecoration: "none",
      "&:hover": {
        color: "rgb(99, 99, 99)",
      },
    },
    "&:not(:last-child)": {
      marginRight: "20px",
    },
  },

  menuIcon: {
    color: "black",
  },
});
