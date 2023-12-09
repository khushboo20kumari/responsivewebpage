import { Box } from "@mui/material";
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Gallery() {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const isMediumScreen = useMediaQuery('(min-width:601px) and (max-width:960px)');
    const isLargeScreen = useMediaQuery('(min-width:961px)');
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={isSmallScreen ? 12 : (isMediumScreen ? 12 : (isLargeScreen ? 12 : 8))} >
                        <Item style={{
                            width: "100%px",
                            height: "400px",
                            border: "1px solid #c3c3c3",
                            display: "flex",
                            flexwrap: "wrap"
                        }}>
                            <Box style={{ background: "coral", width: "48%" }}>
                                <img style={{width: "100%"}} src="https://demo.bootstrapdash.com/purple-admin-free/assets/images/dashboard/img_1.jpg"></img>
                            </Box>
                        
                            <Box style={{ background: "lightblue", width: "50%" }}>
                                <img style={{width: "100%"}} src="https://demo.bootstrapdash.com/purple-admin-free/assets/images/dashboard/img_2.jpg"></img>
                            </Box>
                        </Item>
                        <Item style={{
                            width: "100%px",
                            height: "400px",
                            border: "1px solid #c3c3c3",
                            display: "flex",
                            flexwrap: "wrap"
                        }}>
                            <Box style={{ background: "coral", width: "48%" }}>
                                <img style={{width: "100%"}} src="https://demo.bootstrapdash.com/purple-admin-free/assets/images/dashboard/img_4.jpg"></img>
                            </Box>
                            <Box style={{ background: "lightblue", width: "50%" }}>
                                <img style={{width: "100%"}} src="https://demo.bootstrapdash.com/purple-admin-free/assets/images/dashboard/img_3.jpg"></img>
                            </Box>
                        </Item>
                    </Grid>
                    
                </Grid>
            </Box >

        </>
    )
}
export default Gallery;