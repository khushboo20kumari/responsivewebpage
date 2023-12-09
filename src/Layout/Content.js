import { Typography, Box } from "@mui/material";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import Chart from "../Chart";
import TableData from "../Table";
import Gallery from "./Gallery";
import TableSecond from "../TableSecond";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Content({ DrawerHeader }) {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const isMediumScreen = useMediaQuery('(min-width:601px) and (max-width:960px)');
    const isLargeScreen = useMediaQuery('(min-width:961px)');
    return (
        <>
            <Box component="main" sx={{ flexGrow: 1, p: 3, background: "#f8f9fa" }}>
                <DrawerHeader />
                <Box className="" style={{ height: "80px", display: "flex" }}>
                    <Typography style={{ width: "50%" }}> Dashboard</Typography>
                    <Typography style={{ width: "50%" }}>Overview</Typography>

                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={isSmallScreen ? 12 : (isMediumScreen ? 4 : (isLargeScreen ? 4 : 8))} >
                            <Item style={{ height: "200px" }}>
                                {/* <img src=".png"></img> */}
                            </Item>
                        </Grid>
                        <Grid item xs={isSmallScreen ? 12 : (isMediumScreen ? 4 : (isLargeScreen ? 4 : 8))} style={{ height: "200px" }}>
                            <Item style={{ height: "200px" }}>Responsive</Item>
                        </Grid>
                        <Grid item xs={isSmallScreen ? 12 : (isMediumScreen ? 4 : (isLargeScreen ? 4 : 8))} style={{ height: "200px" }}>
                            <Item style={{ height: "200px" }}>Responsive</Item>
                        </Grid>

                    </Grid>
                </Box>
                <br></br>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={isSmallScreen ? 12 : (isMediumScreen ? 7 : (isLargeScreen ? 7 : 8))} >
                            <Item style={{ height: "400px" }}>
                                <Chart />
                            </Item>
                        </Grid>
                        <Grid item xs={isSmallScreen ? 12 : (isMediumScreen ? 5 : (isLargeScreen ? 5 : 8))} style={{ height: "200px" }}>
                            <Item style={{ height: "200px" }}>
                                <Typography>responsive</Typography>

                            </Item>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ flexGrow: 1, position: "relative", top: "50px" }}>
                    <Grid container spacing={3}>
                        <Grid item xs={isSmallScreen ? 12 : (isMediumScreen ? 12 : (isLargeScreen ? 12 : 8))} >
                            <Item style={{ height: "400px" }}>
                                <TableData />

                            </Item>
                        </Grid>

                    </Grid>
                </Box>
                <Box sx={{ flexGrow: 1, position: "relative", top: "100px" }}>
                    <Grid container spacing={3}>
                        <Grid item xs={isSmallScreen ? 12 : (isMediumScreen ? 12 : (isLargeScreen ? 12 : 8))} >

                            <Gallery />


                        </Grid>

                    </Grid>
                </Box>
                <TableSecond/>
                {/* <Box sx={{ flexGrow: 1, position: "relative", top: "150px" }}>
                    <Grid container spacing={3}>
                        <Grid item xs={isSmallScreen ? 12 : (isMediumScreen ? 6 : (isLargeScreen ? 6 : 8))} >
                            <Item style={{ height: "400px" }}>
                               <TableSecond/>
                            </Item>
                        </Grid>
                        <Grid item xs={isSmallScreen ? 12 : (isMediumScreen ? 5 : (isLargeScreen ? 5 : 8))} >
                            <Item style={{ height: "400px" }}>Responsive</Item>
                        </Grid>

                    </Grid>
                </Box> */}


            </Box>


        </>
    )
}
export default Content;

