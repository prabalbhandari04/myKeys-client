import React, { useState, useEffect } from 'react'
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
import {useSelector} from 'react-redux'
import axios from 'axios'


function TableDetails() {
  const [data, setData] = useState([]);
  const auth = useSelector(state => state.auth)
  const {user} = auth

  useEffect(() => {
    fetch('/cred/'+user._id)
    .then( res => {
        return res.json();
    })  
    .then(data => {
      setData(data);
      console.log(data);
    })
  },[data,user._id])
  
  const deleteCred = async (id) => {
    try {
      const res = await axios.delete('/cred/'+id)
      alert("Credentials Deleted.")
      setData(data.filter(item => item._id !== id))
    } catch (err) {
      console.log(err)
    }
  }
  
  const shareCred = async (id) => {
    try {
      const res = await axios.post('/cred/share/'+id, {email : 'prabalb046348@gmail.com'})
      alert("Credentials Shared.")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    
    
    // data && data.map(assessment => {
      
      // return (
        <Card key={data._id}>
            <TableContainer>
              <Table>
              
                      <TableBody>
                          <TableRow >
                            <TableCell>
                              {data.title}
                            </TableCell>
                            <TableCell>
                              {data.url}
                            </TableCell>
                            <TableCell>
                              {data.key}
                            </TableCell>
                            <TableCell>
                            <a><button onClick={()=>deleteCred(data._id)}>Delete</button></a>
                            </TableCell>
                            <TableCell>
                            <a><button onClick={()=>shareCred(data._id)}>Share</button></a>
                            </TableCell>
                          </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
        </Card>
      );
    // })
   
  // );
}

export default TableDetails;


