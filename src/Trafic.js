// function Trafic() {
//     return (
//         <>
//             <div class="container">
//                 <div class="flex">
//                     <div class="pie">
//                         <div class="inner-circle">
//                             <p>Traffic<br/>Sources</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default Trafic;
// import {  Box } from "@mui/material";

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import useMediaQuery from '@mui/material/useMediaQuery';
// // import Chart from "../Chart";
// // import Trafic from "../Trafic";

// import Box from "@mui/material/Box"
// function Trafic() {


//     const isSmallScreen = useMediaQuery('(max-width:600px)');
//     const isMediumScreen = useMediaQuery('(min-width:601px) and (max-width:960px)');
//     const isLargeScreen = useMediaQuery('(min-width:961px)');

//     const Item = styled(Paper)(({ theme }) => ({
//         backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//         ...theme.typography.body2,
//         padding: theme.spacing(1),
//         textAlign: 'center',
//         color: theme.palette.text.secondary,
//     }));
//     return (
//         <>
//             <Box sx={{ flexGrow: 1 }}>
//                 <Grid container spacing={3}>
//                     <Grid item xs={isSmallScreen ? 12 : (isMediumScreen ? 6 : (isLargeScreen ? 6 : 8))} >
//                         <Item style={{ height: "500px" }}>
//                             <center>
//                                 <Box className="box" >
//                                     <Box className="inner-circle">

//                                     </Box>
//                                 </Box>
//                             </center>
//                         </Item>
//                     </Grid>
//                     <Grid item xs={isSmallScreen ? 12 : (isMediumScreen ? 6 : (isLargeScreen ? 6 : 8))} style={{ height: "200px" }}>
//                         <Item style={{ height: "200px" }}>Responsive</Item>
//                     </Grid>


//                 </Grid>
//             </Box>

//         </>
//     )
// }
// export default Trafic;

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from "@mui/material/Box"

function Trafic() {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const isMediumScreen = useMediaQuery('(min-width:601px) and (max-width:960px)');
    const isLargeScreen = useMediaQuery('(min-width:961px)');

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={isLargeScreen ? 6 : 8}>
                        <Item style={{ height: isSmallScreen ? "300px" : "500px" }}>
                            <center>
                                <Box className="box" style={{ height: isSmallScreen ? "200px" : "330px", width: isSmallScreen ? "80%" : "35%" }}>
                                    <Box className="inner-circle" style={{ width: isSmallScreen ? "80%" : "50%", height: isSmallScreen ? "80%" : "50%" }}>

                                    </Box>
                                </Box>
                            </center>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={isLargeScreen ? 6 : 8}>
                        <Item style={{ height: isSmallScreen ? "100px" : "200px" }}>Responsive</Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Trafic;
