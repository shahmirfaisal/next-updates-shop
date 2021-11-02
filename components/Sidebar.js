import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { HomeOutlined, ContactSupportOutlined } from "@material-ui/icons";
import { useRouter } from "next/router";

const Sidebar = (props) => {
  const router = useRouter();

  return (
    <Drawer anchor="left" open={props.open} onClose={props.onClose}>
      <List style={{ padding: "10px 30px" }}>
        <ListItem button onClick={() => router.push("/")}>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem button onClick={() => router.push("/latest")}>
          <ListItemText primary="Latest" />
        </ListItem>

        <ListItem button onClick={() => router.push("/coronavirus")}>
          <ListItemText primary="Coronavirus" />
        </ListItem>

        <ListItem button onClick={() => router.push("/sport")}>
          <ListItemText primary="Sport" />
        </ListItem>

        <ListItem button onClick={() => router.push("/technology")}>
          <ListItemText primary="Technology" />
        </ListItem>

        <ListItem button onClick={() => router.push("/business")}>
          <ListItemText primary="Business" />
        </ListItem>

        <ListItem button onClick={() => router.push("/contact")}>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
