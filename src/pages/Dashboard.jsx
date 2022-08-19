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
            <TableDetails/>
            <AddCred />
        </div>
    )
}

export default Dashboard;
