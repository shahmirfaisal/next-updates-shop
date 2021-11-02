import React, { useState, useEffect } from "react";
import {
  Search,
  CategoryRounded,
  ExpandLessRounded,
  ExpandMoreRounded,
  EmailOutlined,
} from "@material-ui/icons";

import {
  CircularProgress,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  TextField,
  Collapse,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  AppBar,
  ListItemIcon,
} from "@material-ui/core";
import { useStyles } from "../styles/AsideStyle.js";
import Link from "next/link";

const Aside = () => {
  const [openCategory, setOpenCategory] = useState(true);
  const classes = useStyles();

  return (
    <aside>
      {/* Categories Section */}
      <List className={classes.list} component={Paper}>
        <ListItem button onClick={() => setOpenCategory(!openCategory)}>
          <ListItemIcon>
            <CategoryRounded />
          </ListItemIcon>
          <ListItemText primary="Categories" />
          <ListItemIcon>
            {openCategory ? <ExpandMoreRounded /> : <ExpandLessRounded />}
          </ListItemIcon>
        </ListItem>

        <Collapse in={openCategory} timeout="auto" unmountOnExit>
          <List>
            <ListItem button>
              <Link href="/latest">
                <ListItemText primary="Latest" />
              </Link>
            </ListItem>

            <ListItem button>
              <Link href="/coronavirus">
                <ListItemText primary="Coronavirus" />
              </Link>
            </ListItem>

            <ListItem button>
              <Link href="/sport">
                <ListItemText primary="Sport" />
              </Link>
            </ListItem>

            <ListItem button>
              <Link href="/technology">
                <ListItemText primary="Technology" />
              </Link>
            </ListItem>

            <ListItem button>
              <Link href="/business">
                <ListItemText primary="Business" />
              </Link>
            </ListItem>
          </List>
        </Collapse>
      </List>
    </aside>
  );
};

export default Aside;
