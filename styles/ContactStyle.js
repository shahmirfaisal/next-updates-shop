import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  title: {
    fontWeight: 600,
    marginTop: "50px",
    marginBottom: "50px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    width: "500px",
    maxWidth: "100%",
    margin: "0 auto",
    "& button": {
      marginTop: "20px",
    },
  },
});
