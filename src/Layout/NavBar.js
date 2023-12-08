import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Input, Typography, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const ariaLabel = { 'aria-label': 'description' };
const drawerWidth = 240;
function NavBar({ open, handleDrawerOpen }) {
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

    return (
        <>
            <AppBar position="fixed" open={open} style={{ background: "white", height: "60px" }}>

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
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Mini variant drawer
                    </Typography>
                    <Input placeholder="Search Projects" inputProps={ariaLabel} style={{ width: "60%" }} />
                    <Avatar alt="Cindy Baker" src="https://demo.bootstrapdash.com/purple-admin-free/assets/images/faces/face1.jpg" sx={{ m: "6px" }} />
                    <Typography style={{color:"black"}}>David Greymax</Typography>
                </Toolbar>

            </AppBar>
        </>
    )
}
export default NavBar;