import { useState } from "react"
import Layout from "../components/Layout"
import Head from "next/head"
import {
  Container,
  Typography,
  Button,
  TextField,
  Paper,
  CircularProgress
} from "@material-ui/core"
import axios from "axios"
import { NotificationManager } from "react-notifications"
import { useStyles } from "../styles/ContactStyle"
import { useRouter } from "next/router"
import { createClient } from "contentful"

export default function ContactPage(props) {
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const router = useRouter()
  const classes = useStyles()

  const changeName = (e) => setName(e.target.value)
  const changeEmail = (e) => setEmail(e.target.value)
  const changeMessage = (e) => setMessage(e.target.value)

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await axios.post("https://updates-shop.herokuapp.com/api/contact", {
        name,
        email,
        message
      })
      setName("")
      setEmail("")
      setMessage("")
      NotificationManager.success("Message sent!")
    } catch (error) {
      NotificationManager.error(error.response.data)
    }
    setLoading(false)
  }

  return (
    <Layout categories={props.categories}>
      <Head>
        <title>Contact Us - Updates Shop</title>
        <meta
          name="description"
          content="Get the latest news, headlines and stories from Pakistan and across the world. We have the most up to date information on politics, technology, business, entertainment and more."
        />
        <meta
          property="og:url"
          content={process.env.NEXT_PUBLIC_SITE_URL + router.asPath}
          key="ogurl"
        />
        <meta property="og:type" content="website" />
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
        <Typography variant="h1" align="center" className={classes.title}>
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
  )
}

export async function getStaticProps() {
  const client = createClient({
    space: "4q0lf2wn2f4p",
    accessToken: "y9gnClGiKgF9rp0lo7qpq5MX_UUUcPBBTO3SAbjFjnk"
  })

  const categoryRes = await client.getEntries({ content_type: "category" })

  return {
    props: {
      categories: categoryRes.items
    }
  }
}
