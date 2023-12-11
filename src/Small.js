import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Box ,Typography} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Small() {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const isMediumScreen = useMediaQuery('(min-width:601px) and (max-width:960px)');
    const isLargeScreen = useMediaQuery('(min-width:961px)');
    return (
        <>
            <Box component="main" sx={{ flexGrow: 1, p: 3, background: "#f8f9fa" }}>
                {/* <DrawerHeader /> */}
                <Box className="" style={{ height: "80px", display: "flex" }}>
                    <Typography style={{ width: "50%" }}> Dashboard</Typography>
                    <Typography style={{ width: "50%" }}>Overview</Typography>

                </Box>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={isSmallScreen ? 12 : (isMediumScreen ? 4 : (isLargeScreen ? 4 : 8))} >
                            <Item style={{ height: "200px" }}>
                                responsive
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
            </Box>

        </>
    )
}
export default Small;