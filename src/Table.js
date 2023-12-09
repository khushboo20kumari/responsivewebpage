import { Avatar, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
function TableData() {
    return (
        <>
            <Table>
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
        </>
    )
}
export default TableData;