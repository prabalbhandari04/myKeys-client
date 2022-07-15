import React, { useState, useEffect } from "react";

import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';

//--------------Icons------------------------
import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from '@mui/icons-material/Settings';

//---------------Mui Dialog -----------------
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";

import {showErrMsg, showSuccessMsg} from '../utils/notification/Notification'
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {Grid,Typography} from "@material-ui/core";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
//-------------------------------------------
import axios from 'axios';

const initialState = {
  title: '',
  url: '',
  key: '',
  err: '',
  success: ''
}


const AddCred = () => {




    const [open, setOpen] = useState(false);

    //organization name and description
    const [cred, setCred] = useState(initialState)
    const {title,url,key, err, success} = cred

    const handleInputChange = e => {
      const {name, value} = e.target
      setCred({...cred, [name]:value, err: '', success: ''})
  }

  

  const handleSubmit = async e => {
      e.preventDefault()
      try {
          const res = await axios.post('https://mykeys.onrender.com/cred/add', {title,url,key})
          setCred({...cred, err: '', success: res.data.msg})


      } catch (err) {
          err.response.data.msg && 
          setCred({...cred, err: err.response.data.msg, success: ''})
      }
  }

  const opensessame = () =>{ 
    handleClickOpen()
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



const cancelhandel = (e)=>{

  handleClose()
  
}


  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        
         <DialogTitle id="alert-dialog-title" >
          {"Add Customer"}
        </DialogTitle>

        <DialogContent>


        <Grid style={{ maxWidth: 450, padding: "5px 5px", margin: "0 auto" }}>

        <Typography variant="body2" style={{color: 'white'}} component="p" gutterBottom>
          
          </Typography> 
          {err && showErrMsg(err)}
          {success && showSuccessMsg(success)}
                <form id="customer-form-id" onSubmit={handleSubmit}>
            <Grid container spacing={1} style={{color: 'white', marginTop: '8px'}}>

                <Grid item xs={12}>
                    <TextField name="title" sx={{ input: { color: 'black', background: 'white' } }} InputLabelProps={{ style: { color: 'black' } }} value={title} onChange={handleInputChange}    placeholder="Title" label="Title" variant="filled" fullWidth required autoComplete='off' />
                </Grid>


                <Grid item xs={12}>
                    <TextField type="text" name="url" sx={{ input: { color: 'black', background: 'white' } }} InputLabelProps={{ style: { color: 'black' } }} value={url} onChange={handleInputChange}    placeholder="URL" label="URL" variant="filled" fullWidth required autoComplete='off' />
                </Grid>


                <Grid item xs={12}>
                    <TextField type="text" name="key" sx={{ input: { color: 'black', background: 'white' } }} InputLabelProps={{ style: { color: 'black' } }} value={key} onChange={handleInputChange}    placeholder="Key" label="Key" variant="filled" fullWidth required autoComplete='off' />
                </Grid>
            </Grid>
              
            </form>
     
    </Grid>

        </DialogContent>
        <DialogActions>

          <Button onClick={cancelhandel} style={{color: 'white'}}>Cancel</Button>

          <Button type="submit" form="customer-form-id" style={{color: '#00A7E3'}} autoFocus>
            Save
          </Button>



        </DialogActions>
      </Dialog>


    


                  
            <Action text="Add Credentials" style={{backgroundColor: '#2065D1',position:"absolute",left:"95%",marginTop:"20px"}} onClick={opensessame}>
              <AddIcon />
            </Action>

    </>
  );
};

export default AddCred;