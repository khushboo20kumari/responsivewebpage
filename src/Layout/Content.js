
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import useMediaQuery from '@mui/material/useMediaQuery';
import Chart from "../Chart";
import { Box, Avatar, Table, TableBody, TableCell, TableHead, TableRow, Typography, TableContainer } from "@mui/material";

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
                                <img style={{ height: "187px", width: "100%" }} src="https://demo.bootstrapdash.com/purple-admin-free/assets/images/dashboard/img_1.jpg"></img>
                            </Item>
                        </Grid>
                        <Grid item xs={isSmallScreen ? 12 : (isMediumScreen ? 4 : (isLargeScreen ? 4 : 8))} style={{ height: "200px" }}>
                            <Item style={{ height: "200px" }}>
                                <img style={{ height: "187px", width: "100%" }} src="https://thumbs.dreamstime.com/b/d-render-paper-flowers-bouquet-botanical-background-isolated-clip-art-round-bouquet-floral-arrangement-d-render-paper-flowers-141550636.jpg"></img>
                            </Item>
                        </Grid>
                        <Grid item xs={isSmallScreen ? 12 : (isMediumScreen ? 4 : (isLargeScreen ? 4 : 8))} style={{ height: "200px" }}>
                            <Item style={{ height: "200px" }}>
                                <img style={{ height: "187px", width: "100%" }} src="https://demo.bootstrapdash.com/purple-admin-free/assets/images/dashboard/img_1.jpg"></img>
                            </Item>
                        </Grid>

                    </Grid>
                </Box>
                <br></br>
                <Box sx={{ flexGrow: 1 }}>

                    <Grid container spacing={3}>

                        <Grid item xs={isSmallScreen ? 12 : (isMediumScreen ? 6 : (isLargeScreen ? 6 : 8))} >
                            <Item style={{ height: "400px" }}>
                                <Chart />
                            </Item>
                        </Grid>

                        <Grid item xs={isSmallScreen ? 12 : (isMediumScreen ? 6 : (isLargeScreen ? 6 : 8))} style={{ height: "400px" }}>

                            <Item style={{ height: isSmallScreen ? "400px" : "400px" }}>
                                <Box style={{ height: "250px", border: "1px solid red" }}>i am khushboo kumari</Box>
                                <Box style={{ height: "150px", border: "1px solid red" }}>i am lina kumari </Box>
                            </Item>
                        </Grid>

                    </Grid>

                </Box>

                <Box sx={{ flexGrow: 1, position: "relative", top: "50px", border: "1px solid red" }}>

                    <Grid container spacing={3}>

                        <Grid item xs={isSmallScreen ? 12 : (isMediumScreen ? 12 : (isLargeScreen ? 12 : 8))} >
                            <Item>
                            <TableContainer component={Paper} style={{ width: "100%" }}>
                                <Table >
                                    
                                    <TableHead>
                                        <TableRow >
                                            <TableCell style={{ fontSize: "16px" }}>Assignee</TableCell>
                                            <TableCell style={{ fontSize: "16px" }}>Subject</TableCell>
                                            <TableCell style={{ fontSize: "16px" }}>Status</TableCell>
                                            <TableCell style={{ fontSize: "16px" }}>Last Update</TableCell>
                                            <TableCell style={{ fontSize: "16px" }}>Tracking ID</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableCell style={{ display: "flex" }}>
                                            <Avatar src="https://demo.bootstrapdash.com/purple-admin-free/assets/images/faces/face1.jpg"></Avatar>

                                            David Grey
                                        </TableCell>
                                        <TableCell>Fund is not recieved</TableCell>
                                        <TableCell>Done</TableCell>
                                        <TableCell>Dec 5, 2017</TableCell>
                                        <TableCell>WD-12345</TableCell>
                                    </TableBody>

                                    <TableBody>
                                        <TableCell style={{ display: "flex" }}>
                                            <Avatar src="https://demo.bootstrapdash.com/purple-admin-free/assets/images/faces/face2.jpg"></Avatar>
                                            {/* <Avatar src="https://demo.bootstrapdash.com/purple-admin-free/assets/images/faces/face3.jpg"></Avatar> */}
                                            Stella Johnson
                                        </TableCell>
                                        <TableCell>High loading time</TableCell>
                                        <TableCell>PROGRESS</TableCell>
                                        <TableCell>Dec 12, 2017</TableCell>
                                        <TableCell>WD-12346</TableCell>
                                    </TableBody>

                                    <TableBody>
                                        <TableCell style={{ display: "flex" }}>
                                            <Avatar src="https://demo.bootstrapdash.com/purple-admin-free/assets/images/faces/face3.jpg"></Avatar>
                                            <Typography>Marina Michel</Typography>
                                        </TableCell>
                                        <TableCell>Website down for one week</TableCell>
                                        <TableCell>ON HOLD</TableCell>
                                        <TableCell>Dec 16, 2017</TableCell>
                                        <TableCell>WD-12347</TableCell>
                                    </TableBody>

                                    <TableBody>
                                        <TableCell style={{ display: "flex" }}><Avatar src="https://demo.bootstrapdash.com/purple-admin-free/assets/images/faces/face4.jpg"></Avatar> <Typography>John Doe</Typography></TableCell>
                                        <TableCell>Loosing control on server</TableCell>
                                        <TableCell>REJECTED</TableCell>
                                        <TableCell>Dec 16, 2017</TableCell>
                                        <TableCell>WD-12347</TableCell>
                                    </TableBody>

                                </Table>
                        </TableContainer>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ flexGrow: 1, position: "relative", top: "100px", border: "1px solid red"}}>

                    <Grid container spacing={3}>

                        <Grid item xs={isSmallScreen ? 12 : (isMediumScreen ? 12 : (isLargeScreen ? 12 : 8))} >

                            <Item style={{width:"100%",height:"800px"}}>
                                <Box style={{height:"80px",width:"100%",border:"1px solid red"}}></Box>
                                

                                <Box sx={{ height: "350px", width: "95%", border: "1px solid red", m: "auto", position: "relative", top: "30px" ,display:"flex",flexWrap:"wrap"}}>
                                    <Box style={{ width: "50%", border: "1px solid red", height: "350px" }}>
                                        <img src='https://demo.bootstrapdash.com/purple-admin-free/assets/images/dashboard/img_1.jpg'></img>
                                    </Box>
                                    <Box style={{ width: "50%", border: "1px solid red", height: "350px" }}>
                                        <img src='https://demo.bootstrapdash.com/purple-admin-free/assets/images/dashboard/img_2.jpg'></img>
                                    </Box>
                                </Box>
                                <Box sx={{ height: "350px", width: "95%", border: "1px solid red", m: "auto", position: "relative", top: "30px" ,display:"flex",flexWrap:"wrap"}}>
                                    <Box style={{ width: "50%", border: "1px solid red", height: "350px" }}>
                                        <img src='https://demo.bootstrapdash.com/purple-admin-free/assets/images/dashboard/img_4.jpg'></img>
                                    </Box>
                                    <Box style={{ width: "50%", border: "1px solid red", height: "350px" }}>
                                        <img src='https://demo.bootstrapdash.com/purple-admin-free/assets/images/dashboard/img_3.jpg'></img>
                                    </Box>
                                </Box>
                                

                            </Item>

                        </Grid>

                    </Grid>

                </Box>

            </Box>

        </>
    )
}
export default Content;



// import {
//     Typography,
//     Box,
//     TableContainer,
//     Table,
//     TableHead,
//     TableBody,
//     TableRow,
//     TableCell,
//     Paper,
//     Grid,
// } from "@mui/material";
// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import Chart from "../Chart";
// import TableData from "../Table";
// import Gallery from "./Gallery";
// import TableSecond from "../TableSecond";

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
// }));

// function Content({ DrawerHeader }) {
//     const isSmallScreen = useMediaQuery("(max-width:600px)");
//     const isMediumScreen = useMediaQuery("(min-width:601px) and (max-width:960px)");
//     const isLargeScreen = useMediaQuery("(min-width:961px)");

//     return (
//         <>
//             <Box component="main" sx={{ flexGrow: 1, p: 3, background: "#f8f9fa" }}>
               
//                 <Box sx={{ flexGrow: 1, position: "relative", top: "50px", border: "1px solid red" }}>
//                     <Grid container spacing={3}>
//                         <Grid item xs={isSmallScreen ? 12 : (isMediumScreen ? 12 : (isLargeScreen ? 12 : 12))}>
//                             <Item>
//                                 <TableContainer component={Paper} style={{ width: "100%" }}>
//                                     <Table>
//                                         <TableHead>
//                                             <TableCell>name</TableCell>
//                                             <TableCell>age</TableCell>
//                                             <TableCell>name</TableCell>
//                                             <TableCell>age</TableCell>
//                                             <TableCell>name</TableCell>



//                                         </TableHead>
//                                         <TableBody>
//                                             <TableCell>khusboo</TableCell>
//                                             <TableCell>19</TableCell>
//                                             <TableCell>khusboo</TableCell>
//                                             <TableCell>19</TableCell>
//                                         </TableBody>
//                                     </Table>
//                                 </TableContainer>
//                             </Item>

//                         </Grid>
//                     </Grid>
//                 </Box>
//             </Box>
//         </>
//     );
// }

// export default Content;
