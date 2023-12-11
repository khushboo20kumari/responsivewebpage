// import { Typography, Box } from "@mui/material";
// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { BarChart } from '@mui/x-charts/BarChart';
// import { axisClasses } from '@mui/x-charts';

// import HomeIcon from '@mui/icons-material/Home'
// import { Avatar, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";


// const chartSetting = {
//     sx: {
//         [`.${axisClasses.left} .${axisClasses.label}`]: {
//             transform: 'translate(-20px, 0)',
//         },
//     },
// };
// const dataset = [
//     {
//         london: 59,
//         paris: 57,
//         newYork: 86,
//         seoul: 21,
//         month: 'Jan',
//     },
//     {
//         london: 50,
//         paris: 52,
//         newYork: 78,
//         seoul: 28,
//         month: 'Fev',
//     },
//     {
//         london: 47,
//         paris: 53,
//         newYork: 106,
//         seoul: 41,
//         month: 'Mar',
//     },
//     {
//         london: 54,
//         paris: 56,
//         newYork: 92,
//         seoul: 73,
//         month: 'Apr',
//     },
//     {
//         london: 57,
//         paris: 69,
//         newYork: 92,
//         seoul: 99,
//         month: 'May',
//     },
//     {
//         london: 60,
//         paris: 63,

//         newYork: 103,
//         seoul: 144,
//         month: 'June',
//     },
//     {
//         london: 59,
//         paris: 60,
//         newYork: 105,
//         seoul: 319,
//         month: 'July',
//     },
//     {
//         london: 65,
//         paris: 60,
//         newYork: 106,
//         seoul: 249,
//         month: 'Aug',
//     },
// ];


// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

// function Content() {

//     const isSmallScreen = useMediaQuery('(max-width:600px)');
//     const isMediumScreen = useMediaQuery('(min-width:601px) and (max-width:960px)');
//     const isLargeScreen = useMediaQuery('(min-width:961px)');

//     const colors = ['rgb(154,85,255)', 'rgb(254,121,150)', 'rgb(146,165,245)'];

//     const valueFormatter = (value) => `${value}mm`;

//     return (

//         <>
//             <Box component="main" sx={{ flexGrow: 1, background: "#f8f9fa" }}>
//                 <Box sx={{ flexGrow: 1, m: 7 }}>
//                     <Grid container spacing={3}>
//                         <Grid item xs={isSmallScreen ? 12 : (isMediumScreen ? 6 : (isLargeScreen ? 6 : 8))} >
//                             <Item style={{ height: "46.36px", display: "flex" }}>
//                                 <HomeIcon className="Homeicon" />
//                                 <Typography>Dashboard</Typography>
//                             </Item>
//                         </Grid>

//                         <Grid item xs={isSmallScreen ? 12 : (isMediumScreen ? 6 : (isLargeScreen ? 6 : 8))} style={{ height: "200px" }}>
//                             <Item style={{ height: "46.36px" }}>
//                                 <Typography>d</Typography>

//                             </Item>
//                         </Grid>
//                     </Grid>
//                 </Box>

//                 <Box sx={{ flexGrow: 1, m: 7 }}>
//                     <Grid container spacing={3}>
//                         <Grid item xs={isSmallScreen ? 12 : (isMediumScreen ? 4 : (isLargeScreen ? 4 : 8))} >
//                             <Item style={{ height: "219.66px", display: "flex" }}>

//                                 <img style={{ width: "100%", height: "205.66px" }} src="https://demo.bootstrapdash.com/purple-admin-free/assets/images/dashboard/img_2.jpg"></img>
//                             </Item>
//                         </Grid>

//                         <Grid item xs={isSmallScreen ? 12 : (isMediumScreen ? 4 : (isLargeScreen ? 4 : 8))} style={{ height: "200px" }}>
//                             <Item style={{ height: "219.66px" }}>
//                                 <img style={{ width: "100%", height: "205.66px" }} src="https://demo.bootstrapdash.com/purple-admin-free/assets/images/dashboard/img_1.jpg"></img>

//                             </Item>
//                         </Grid>

//                         <Grid item xs={isSmallScreen ? 12 : (isMediumScreen ? 4 : (isLargeScreen ? 4 : 8))} style={{ height: "200px" }}>
//                             <Item style={{ height: "219.66px" }}>
//                                 <img style={{ width: "100%", height: "205.66px" }} src="https://demo.bootstrapdash.com/purple-admin-free/assets/images/dashboard/img_4.jpg"></img>
//                             </Item>
//                         </Grid>
//                     </Grid>
//                 </Box>

//                 <Box sx={{ flexGrow: 1, m: 7 }}>
//                     <Grid container spacing={3}>
//                         <Grid item xs={isSmallScreen ? 12 : (isMediumScreen ? 7 : (isLargeScreen ? 7 : 8))} >
//                             <Item style={{ height: "531.59px", display: "flex" }}>
//                                 <BarChart
//                                     dataset={dataset}
//                                     xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
//                                     series={[
//                                         { dataKey: 'london', label: 'London', valueFormatter },
//                                         { dataKey: 'paris', label: 'Paris', valueFormatter },
//                                         { dataKey: 'newYork', label: 'New York', valueFormatter },
//                                         { dataKey: 'seoul', label: 'Seoul', valueFormatter },
//                                     ]}
//                                     colors={colors}
//                                     {...chartSetting}
//                                 />


//                             </Item>
//                         </Grid>

//                         <Grid item xs={isSmallScreen ? 12 : (isMediumScreen ? 5 : (isLargeScreen ? 5 : 8))} >
//                             <Item style={{ height: "531.59px" }}>
//                                 <Typography>i am khushboo</Typography>
//                             </Item>
//                         </Grid>
//                     </Grid>
//                 </Box>
//                 <Box sx={{ flexGrow: 1, m: 7 }}>
//                     <Grid container spacing={3}>
//                         <Grid item xs={isSmallScreen ? 12 : (isMediumScreen ? 12 : (isLargeScreen ? 12 : 8))} >
//                             <Item>

//                                 <table>
//                                     <tr>
//                                         <th>Company</th>
//                                         <th>Contact</th>
//                                         <th>Country</th>
//                                     </tr>
//                                     <tr>
//                                         <td>Alfreds Futterkiste</td>
//                                         <td>Maria Anders</td>
//                                         <td>Germany</td>
//                                     </tr>
//                                     <tr>
//                                         <td>Centro comercial Moctezuma</td>
//                                         <td>Francisco Chang</td>
//                                         <td>Mexico</td>
//                                     </tr>
//                                     <tr>
//                                         <td>Ernst Handel</td>
//                                         <td>Roland Mendel</td>
//                                         <td>Austria</td>
//                                     </tr>
//                                     <tr>
//                                         <td>Island Trading</td>
//                                         <td>Helen Bennett</td>
//                                         <td>UK</td>
//                                     </tr>
//                                     <tr>
//                                         <td>Laughing Bacchus Winecellars</td>
//                                         <td>Yoshi Tannamuri</td>
//                                         <td>Canada</td>
//                                     </tr>
//                                     <tr>
//                                         <td>Magazzini Alimentari Riuniti</td>
//                                         <td>Giovanni Rovelli</td>
//                                         <td>Italy</td>
//                                     </tr>
//                                 </table>
//                             </Item>

//                         </Grid>
//                     </Grid>
//                 </Box>
//             </Box>
//         </>
//     )
// }
// export default Content;
