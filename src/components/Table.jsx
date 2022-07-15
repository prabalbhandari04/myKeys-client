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



function TableDetails() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://mykeys.onrender.com/cred/get')
    .then( res => {
        return res.json();
    })
    .then(availableData => {
      setData(availableData);
        console.log(availableData)
    })
  }, [])
    return (
        <div >
            <Container maxWidth={'lg'}>

      <Typography  variant="h3" component="h1" paragraph>
          Your Credentials
        </Typography>

        <Card>
          <Divider />
            <TableContainer sx={{ minWidth: 800, position: 'relative', mt: '13px'}}>
             

              <Table size={'medium'}>
               
              <TableHead>
              
                    <TableRow>
                        <TableCell>
                          Title
                        </TableCell>

                        <TableCell>
                          Url
                        </TableCell>

                        <TableCell>
                         Key
                        </TableCell>

                        <TableCell>
                         Share
                        </TableCell>

                        <TableCell>
                         Delete
                        </TableCell>

                    </TableRow>

                  </TableHead>
                      <TableBody>
                      {data.map((item) => {
                        return (
                            <TableRow hover style={{textDecoration: 'none'}} key={item.id}>
                              <TableCell align="left">{item.title === null ? null : item.title}</TableCell>
                              <TableCell align="left">{item.url === null ? null : item.url}</TableCell>
                              <TableCell align="left">{item.key === null ? null : item.key}</TableCell>
                              <TableCell align="left"><i class="fa fa-share" aria-hidden="true"><button>Share</button></i></TableCell>
                              <TableCell align="left"><i class="fa fa-trash" aria-hidden="true"><button>Delete</button></i></TableCell>
                            </TableRow>
                              )
                             })}
                </TableBody>
              </Table>
            </TableContainer>
        </Card>
        
      </Container>
        </div>
    )
}

export default TableDetails;
