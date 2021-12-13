import { useState } from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import {
  Container,
  Typography,
  Button,
  TextField,
  Paper,
  CircularProgress,
} from "@material-ui/core";
import axios from "axios";
import { NotificationManager } from "react-notifications";
import { useStyles } from "../styles/ContactStyle";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const classes = useStyles();

  const changeName = (e) => setName(e.target.value);
  const changeEmail = (e) => setEmail(e.target.value);
  const changeMessage = (e) => setMessage(e.target.value);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("https://updates-shop.herokuapp.com/api/contact", {
        name,
        email,
        message,
      });
      setName("");
      setEmail("");
      setMessage("");
      NotificationManager.success("Message sent!");
    } catch (error) {
      NotificationManager.error(error.response.data);
    }
    setLoading(false);
  };

  return (
    <Layout>
      <Head>
        <title>Contact Us - Updates Shop</title>
        <meta
          name="description"
          content="Get the latest news, headlines and stories from Pakistan and across the world. We have the most up to date information on politics, technology, business, entertainment and more."
        />
        <meta property="og:url" content={window.location.href} key="ogurl" />
        <meta property="og:image" content="/favicon.ico" key="ogimage" />
        <meta property="og:site_name" content="Updates Shop" key="ogsitename" />
        <meta
          property="og:title"
          content="Contact Us - Updates Shop"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="Get the latest news, headlines and stories from Pakistan and across the world. We have the most up to date information on politics, technology, business, entertainment and more."
          key="ogdesc"
        />
      </Head>

      <Container maxWidth="lg">
        <Typography variant="h3" align="center" className={classes.title}>
          Get in touch with us!
        </Typography>
        <Paper component="form" className={classes.form} onSubmit={submit}>
          <TextField label="Name" value={name} onChange={changeName} />
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={changeEmail}
          />
          <TextField
            label="Message"
            multiline
            rows={4}
            value={message}
            onChange={changeMessage}
          />
          <Button
            disabled={loading}
            variant="contained"
            color="primary"
            type="submit"
          >
            Send {loading && <CircularProgress size={25} />}
          </Button>
        </Paper>
      </Container>
    </Layout>
  );
}
