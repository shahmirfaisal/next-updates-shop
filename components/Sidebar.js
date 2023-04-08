import React, { useState } from "react"
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core"
import { HomeOutlined, ContactSupportOutlined } from "@material-ui/icons"
import { useRouter } from "next/router"

const Sidebar = (props) => {
  const router = useRouter()

  console.log(props.categories)

  return (
    <Drawer anchor="left" open={props.open} onClose={props.onClose}>
      <List style={{ padding: "10px 30px" }}>
        <ListItem button onClick={() => router.push("/")}>
          <ListItemText primary="Home" />
        </ListItem>

        {props.categories.map((category) => (
          <ListItem button onClick={() => router.push("/")}>
            <ListItemText primary={category.fields.name} />
          </ListItem>
        ))}

        <ListItem button onClick={() => router.push("/contact")}>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Drawer>
  )
}

export default Sidebar
