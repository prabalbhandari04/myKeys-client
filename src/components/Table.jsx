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
import ShareCred from '../components/ShareCred';

const initialState = {
  title : "",
  url : "",
  key : ""
}
function TableDetails() {
  const [data, setData] = useState([initialState]);
  const auth = useSelector(state => state.auth)
  const {user} = auth

  
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('/cred/'+user._id)
      setData(res.data)
    }
    fetchData()
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
                            {data && data.map((item) => {
                              return (
                                  <TableRow hover style={{textDecoration: 'none'}} key={item.id}>
                                    <TableCell align="left">{item?.title === null ? null : item.title}</TableCell>
                                    <TableCell align="left">{item?.url === null ? null : item.url}</TableCell>
                                    <TableCell align="left">{item?.key === null ? null : item.key}</TableCell>
                                    <TableCell align="left"><ShareCred CredId={item._id}/></TableCell>
                                    <TableCell align="left"><i style={{height : '25px',width: "25px",color:"red"}} class="fa fa-trash" aria-hidden="true"><button onClick={() => deleteCred(item._id)}></button></i></TableCell>
                                    
                                  </TableRow>
                                    )
                                  })}
                      </TableBody>
                    </Table>
                  </TableContainer>
              </Card>
              
            </Container>
              </div>
      );
}

export default TableDetails;


