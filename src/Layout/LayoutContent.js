import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import ChartBar from '../Chart';
import { FormGroup, Checkbox, FormControlLabel, Button, TextField } from "@mui/material"
import { Avatar, Table, TableBody, TableCell, TableHead, TableRow, Typography, TableContainer } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
function LayoutContent() {
    return (
        <>

            <Box sx={{ p: 3 }}>

                <Box sx={{ width: '100%', position: "relative", top: "20px" }}>

                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={2} lg={2} sm={2} style={{ display: "flex" }}>
                            <Button style={{ background: "rgb(158,88,255)", boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }} ><HomeIcon style={{ color: "white" }} /></Button>
                            <Typography style={{ position: "relative", left: "20px", fontWeight: "bold", fontSize: "20px" }}>Dashboard</Typography>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{ width: '100%', position: "relative", top: "40px" }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} lg={4} sm={4}>
                            <img style={{ width: "100%" }} src='weeklySales.png'></img>
                        </Grid>
                        <Grid item xs={12} lg={4} sm={4} >

                            <img style={{ width: "100%" }} src='weeklyOrders.png'></img>

                        </Grid>
                        <Grid item xs={12} lg={4} sm={4} >

                            <img style={{ width: "100%" }} src='visitorsOnline.png'></img>
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ width: '100%', position: "relative", top: "60px" }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} lg={7} sm={12}>
                            <Box sx={{ background: "white" }}>
                                <Typography sx={{ fontWeight: "bold", fontSize: "20px", width: "40%",position:"relative",left:"40px",top:"10px"}}>Visit And Sales Statistics</Typography>
                                <ChartBar />
                            </Box>
                        </Grid>
                        <Grid item xs={12} lg={5} sm={12}>
                            <Item>
                                <Typography style={{ fontSize: "20px", fontWeight: "bold", width: "30%", position: "relative", top: "15px" }}>Traffic Sources</Typography>
                                <Box style={{ height: "120px" }}>
                                    <center>
                                        <div class="pie">
                                            <div class="inner-circle"></div>
                                        </div>
                                    </center>
                                </Box>
                                <Box style={{ width: "100%", display: "flex", marginTop: "36px" }}>
                                    <Box style={{ width: "30%", height: "120px" }}>
                                        <Typography>Search Engines</Typography>
                                        <Typography>Direct Click</Typography>
                                        <Typography>Bookmarks Click</Typography>
                                    </Box>
                                    <Box style={{ width: "50%", height: "40px" }}></Box>
                                    <Box style={{ width: "20%", height: "100px" }}>
                                        <Typography>30%</Typography>
                                        <Typography>30%</Typography>
                                        <Typography>50%</Typography>
                                    </Box>
                                </Box>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{ width: '100%', position: "relative", top: "80px", background: "white" }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} lg={12} sm={12}>

                            <Typography sx={{ fontSize: "20px", fontWeight: "bold", width: "13%",m:3 }}>Recent Tickets</Typography>
                            <TableContainer component={Paper} style={{ width: "100%" }}>
                                <Table >

                                    <TableHead>
                                        <TableRow >
                                            <TableCell style={{ fontSize: "16px", fontWeight: "bold" }}>Assignee</TableCell>
                                            <TableCell style={{ fontSize: "16px", fontWeight: "bold" }}>Subject</TableCell>
                                            <TableCell style={{ fontSize: "16px", fontWeight: "bold" }}>Status</TableCell>
                                            <TableCell style={{ fontSize: "16px", fontWeight: "bold" }}>Last Update</TableCell>
                                            <TableCell style={{ fontSize: "16px", fontWeight: "bold" }}>Tracking ID</TableCell>
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
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ width: '100%', position: "relative", top: "120px",background:"white" }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} lg={12} sm={12}>

                            <Typography sx={{ width: "20%", m: 3, fontWeight: "bold", fontSize: "20px" }}>Recent Updates</Typography>
                            <Box style={{ display: "flex", width: "100%" }}>
                                <Box style={{ width: "50%" }}>
                                    <img style={{ width: "100%" }} src='https://demo.bootstrapdash.com/purple-admin-free/assets/images/dashboard/img_4.jpg'></img>
                                </Box>
                                <Box style={{ width: "50%" }}>
                                    <img style={{ width: "100%" }} src='https://demo.bootstrapdash.com/purple-admin-free/assets/images/dashboard/img_3.jpg'></img>
                                </Box>
                            </Box>

                            <Box style={{ display: "flex", width: "100%" }}>
                                <Box sx={{ width: "50%" }}>
                                    <img style={{ width: "100%" }} src='https://demo.bootstrapdash.com/purple-admin-free/assets/images/dashboard/img_1.jpg'></img>
                                </Box>
                                <Box sx={{ width: "50%" }}>
                                    <img style={{ width: "100%" }} src='https://demo.bootstrapdash.com/purple-admin-free/assets/images/dashboard/img_2.jpg'></img>
                                </Box>
                            </Box>
                        </Grid>

                    </Grid>
                </Box>

                <Box sx={{ width: '100%', position: "relative", top: "140px" }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} lg={7} sm={12}>
                            <Item>
                                <Typography style={{ width: "30%", fontWeight: "bold", fontSize: "20px" }}>Project Status</Typography>
                                <TableContainer style={{ width: "100%", height: "420px" }}>
                                    <Table>
                                        <TableHead>
                                            <TableRow >
                                                <TableCell style={{ fontSize: "16px", fontWeight: "bold" }}>#</TableCell>
                                                <TableCell style={{ fontSize: "16px", fontWeight: "bold" }}>Name</TableCell>
                                                <TableCell style={{ fontSize: "16px", fontWeight: "bold" }}>Due Date</TableCell>
                                                <TableCell style={{ fontSize: "16px", fontWeight: "bold" }}>Progress</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableCell>
                                                1
                                            </TableCell>
                                            <TableCell>Herman Beck</TableCell>
                                            <TableCell>	May 15, 2015</TableCell>
                                            <TableCell><progress id="file" value="32" max="100" style={{ color: "red" }}> 32% </progress></TableCell>
                                        </TableBody>

                                        <TableBody>
                                            <TableCell>
                                                2
                                            </TableCell>
                                            <TableCell>Messsy Adam</TableCell>
                                            <TableCell>Jul 01, 2015</TableCell>
                                            <TableCell><progress id="file" value="50" max="100"> 32% </progress></TableCell>
                                        </TableBody>

                                        <TableBody>
                                            <TableCell>
                                                3
                                            </TableCell>
                                            <TableCell>John Richards</TableCell>
                                            <TableCell>	Apr 12, 2015</TableCell>
                                            <TableCell>	<progress id="file" value="32" max="100"> 32% </progress></TableCell>

                                        </TableBody>

                                        <TableBody>
                                            <TableCell>4</TableCell>
                                            <TableCell>Peter Meggik</TableCell>
                                            <TableCell>May 03, 2015</TableCell>
                                            <TableCell><progress id="file" value="32" max="100"> 32% </progress></TableCell>

                                        </TableBody>

                                        <TableBody>
                                            <TableCell>5</TableCell>
                                            <TableCell>Edward</TableCell>
                                            <TableCell>	Jun 05, 2015</TableCell>
                                            <TableCell><progress id="file" value="32" max="100"> 32% </progress></TableCell>
                                        </TableBody>
                                        <TableBody>
                                            <TableCell>6</TableCell>
                                            <TableCell>Edward</TableCell>
                                            <TableCell>	Jun 05, 2015</TableCell>
                                            <TableCell><progress id="file" value="32" max="100"> 32% </progress></TableCell>
                                        </TableBody>
                                    </Table>
                                </TableContainer>

                            </Item>
                        </Grid>
                        <Grid item xs={12} lg={5} sm={12} >
                            <Item>
                                <TextField style={{ width: "70%", position: "relative", top: "35px" }} label="What you need to do today ? "></TextField>
                                <Button variant='contained' sx={{ position: "relative", top: "28px", height: "54px", width: "15%", m: 1, background: "rgb(162,91,255)" }}>add</Button>
                                <FormGroup sx={{ m: 6 }}>

                                    <FormControlLabel control={<Checkbox defaultChecked color="secondary" />} label="Pick up kids from school" />
                                    <FormControlLabel control={<Checkbox defaultChecked color="secondary" />} label="Prepare for presentation" />
                                    <FormControlLabel control={<Checkbox defaultChecked color="secondary" />} label="Print Statements" />
                                    <FormControlLabel control={<Checkbox defaultChecked color="secondary" />} label="Create invoice" />
                                    <FormControlLabel control={<Checkbox defaultChecked color="secondary" />} label="Call John" />
                                    <FormControlLabel control={<Checkbox defaultChecked color="secondary" />} label="Meeting with Alisa" />
                                    <FormControlLabel control={<Checkbox defaultChecked color="secondary" />} label="Create invoice" />


                                </FormGroup>
                            </Item>
                        </Grid>
                    </Grid>
                </Box >
            </Box>
            <Box sx={{ width: '100%', position: "relative", top: "120px", background: "rgb(242,237,243)", height: "60px", fontWeight: "bold" }}>
                <center>
                    <Typography style={{ position: "relative", top: "20px" }}>Free Bootstrap admin template from Bootstrapdash.com</Typography>
                </center>
            </Box>

        </>
    );
}
export default LayoutContent;