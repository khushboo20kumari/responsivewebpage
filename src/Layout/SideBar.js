import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LayoutContent from './LayoutContent';
import MailIcon from '@mui/icons-material/Mail';
import { Avatar, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { TextField} from '@mui/material';
import TocIcon from '@mui/icons-material/Toc';

import FullscreenIcon from '@mui/icons-material/Fullscreen';
import NotificationsIcon from '@mui/icons-material/Notifications';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
const ariaLabel = { 'aria-label': 'description' };
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),

}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{ background: "white" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >

            <MenuIcon style={{ color: "black", opacity: 0.5 }} />
          </IconButton>
          <TextField id="standard-basic" label="Search Project ...." variant="standard" sx={{ width: "60%" ,m:"auto",borderRadius:"300px"}}/>
          {/* <TextField id="outlined-basic" label="Search Project...." variant="outlined" sx={{ width: "60%" ,m:"auto",borderRadius:"300px"}}/> */}
          {/* <Input noWrap component="div" style={{ width: "65%" }} placeholder="Search Projects" inputProps={ariaLabel} /> */}
          <Box style={{ width: "30%", display: "flex" }}>
            <Box style={{ width: "15%" }}>
              <Avatar src='https://demo.bootstrapdash.com/purple-admin-free/assets/images/faces/face1.jpg'></Avatar>
            </Box>
            <Box style={{ width: "30%", opacity: "5px" }}>
              <Typography style={{ color: "black", opacity: 0.5 }}>David</Typography>
            </Box>
            <Box style={{ width: "15%", opacity: 0.5 }}>
              <FullscreenIcon style={{ color: "black" }} />
            </Box>
            <Box style={{ width: "15%" }}>
              <MailIcon style={{ color: "black", opacity: 0.5 }} />
            </Box>
            <Box style={{ width: "15%" }}>
              <NotificationsIcon style={{ color: "black", opacity: 0.5 }} />

            </Box>
            <Box style={{ width: "15%" }}>
              <WatchLaterIcon style={{ color: "black", opacity: 0.5 }} />

            </Box>
            <Box style={{ width: "15%" }}>
              <TocIcon style={{ color: "black", opacity: 0.5 }} />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <img className='headericon' src='https://demo.bootstrapdash.com/purple-admin-free/assets/images/logo.svg'></img>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <Avatar sx={{ m: 2 }} src='https://demo.bootstrapdash.com/purple-admin-free/assets/images/faces/face1.jpg'></Avatar>
          {['Dashboard', 'Basic UI Elements', 'Icons', 'Forms', 'Drafts', "Charts", "Tables", "Sample Pages"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index ? <MailIcon /> : <HomeIcon style={{ color: "rgb(162,91,255)" }} />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />

        <List>
          <ListItem>
            <Button variant='contained' sx={{ width: "90%", m: "auto", height: "45px", background: "rgb(162,91,255)" }}>+Add Projects </Button>
          </ListItem>
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, background: "rgb(242,237,243)" }}>
        <DrawerHeader />
        <LayoutContent />
      </Box>
    </Box>
  );
}
