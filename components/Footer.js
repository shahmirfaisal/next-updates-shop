import React from "react"
import { useStyles } from "../styles/FooterStyle.js"
import { Container, Grid, Typography } from "@material-ui/core"
import Link from "next/link"

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={10} justify="space-between">
          <Grid item md={3}>
            <Typography variant="h4" className={classes.bold}>
              Updates Shop
            </Typography>
            <Typography>
              A place where we will keep you up-to-date with every single news.
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.bold}>Pages</Typography>
            <Link href="/">Home</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms and Conditions</Link>
          </Grid>

          {/* <Grid item>
            <Typography className={classes.bold}>Categories</Typography>

            <Link href="/latest">Latest</Link>
            <Link href="/coronavirus">Coronavirus</Link>
            <Link href="/sport">Sport</Link>
            <Link href="/technology">Technology</Link>
            <Link href="/business">Business</Link>
          </Grid> */}

          <Grid item>
            <Typography className={classes.bold}>Contact</Typography>
            <Typography>updatesshop123@gmail.com</Typography>
            <Typography>+923338768603</Typography>
          </Grid>

          {/* <Grid item>
                <Typography className={classes.bold}>Follow</Typography>
                <Typography>Youtube</Typography>
                <Typography>Facebook</Typography>
                <Typography>Instagram</Typography>
                </Grid> */}
        </Grid>

        <Typography align="right" style={{ marginTop: "100px" }}>
          &copy;{new Date().getFullYear()} Updates Shop. All Rights Reserved.
        </Typography>
      </Container>
    </footer>
  )
}

export default Footer
