import { Avatar, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
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

function TableSecond() {
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    const isMediumScreen = useMediaQuery('(min-width:601px) and (max-width:960px)');
    const isLargeScreen = useMediaQuery('(min-width:961px)');
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={3}>
                    <Grid item xs={isSmallScreen ? 12 : (isMediumScreen ? 7 : (isLargeScreen ? 7 : 8))} >
                        <Table>
                            <TableHead>
                                <TableRow >
                                    <TableCell style={{ fontSize: "16px" }}>#</TableCell>
                                    <TableCell style={{ fontSize: "16px" }}>Name</TableCell>
                                    <TableCell style={{ fontSize: "16px" }}>Due Date</TableCell>
                                    <TableCell style={{ fontSize: "16px" }}>Progress</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableCell>
                                    1
                                </TableCell>
                                <TableCell>Herman Beck</TableCell>
                                <TableCell>	May 15, 2015</TableCell>
                                <TableCell><progress id="file" value="32" max="100" style={{color:"red"}}> 32% </progress></TableCell>
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


                        </Table>
                    </Grid>
                    <Grid item xs={isSmallScreen ? 12 : (isMediumScreen ? 5 : (isLargeScreen ? 5 : 8))} style={{ height: "200px" }}>
                        <Item style={{ height: "200px" }}>Responsive</Item>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
export default TableSecond;

