import React from 'react'
import AddCred from '../components/AddCred';
import DashDetails from '../components/DashDetails';
import TableDetails from '../components/Table';
import {useSelector} from 'react-redux'
import {useState,useEffect} from 'react'
import {
    Box,
    Card,
    Table,
    Divider,
    TableBody,
    Container,
    TableContainer,
    TablePagination,
    Typography,
    TableRow, TableCell, TableHead,  
  } from '@mui/material';

function Dashboard() {


    return (
        <div >
                <div >
                <Container maxWidth={'lg'}>

                    <Typography  variant="h3" component="h1" paragraph>
                        Your Credentials
                        </Typography>
                        <TableHead>
                    <TableRow>
                        <TableCell style={{ width: 350 }}>
                          Title
                        </TableCell >
                        <TableCell style={{ width: 350 }}>
                          Url
                        </TableCell>
                        <TableCell style={{ width: 350 }}>
                         Key
                        </TableCell>
                        <TableCell style={{ width: 350 }}>
                         Share
                        </TableCell>
                        <TableCell style={{ width: 350 }}>
                         Delete
                        </TableCell>
                    </TableRow>
                </TableHead>
                        <TableDetails/>
                    </Container>
            </div>
            <AddCred />
        </div>
    )
}

export default Dashboard;
