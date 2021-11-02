import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Hidden,
  IconButton,
} from "@material-ui/core";
import {
  MenuRounded,
  HomeOutlined,
  ContactSupportOutlined,
} from "@material-ui/icons";
import { useStyles } from "../styles/NavbarStyle";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleOpenSidebar = () => setOpenSidebar(true);
  const handleCloseSidebar = () => setOpenSidebar(false);

  const classes = useStyles();
  const router = useRouter();

  return (
    <AppBar className={classes.root} position="relative">
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          Updates Shop
        </Typography>

        <Hidden smDown>
          <Typography variant="body1" className={classes.link}>
            <Link href="/">Home</Link>
          </Typography>
          <Typography variant="body1" className={classes.link}>
            <Link href="/latest">Latest</Link>
          </Typography>
          <Typography variant="body1" className={classes.link}>
            <Link href="/coronavirus">Coronavirus</Link>
          </Typography>
          <Typography variant="body1" className={classes.link}>
            <Link href="/sport">Sport</Link>
          </Typography>
          <Typography variant="body1" className={classes.link}>
            <Link href="/technology">Technology</Link>
          </Typography>
          <Typography variant="body1" className={classes.link}>
            <Link href="/business">Business</Link>
          </Typography>
          <Typography variant="body1" className={classes.link}>
            <Link href="/contact">Contact</Link>
          </Typography>
        </Hidden>

        <Hidden mdUp>
          <IconButton onClick={handleOpenSidebar}>
            <MenuRounded className={classes.menuIcon} />
          </IconButton>
        </Hidden>

        <Sidebar open={openSidebar} onClose={handleCloseSidebar} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
