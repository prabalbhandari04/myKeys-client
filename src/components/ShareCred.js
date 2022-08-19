import React, { useState, useEffect } from "react";

import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';

//--------------Icons------------------------
import ShareIcon from '@mui/icons-material/Share';
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
import { useSelector, useDispatch } from "react-redux";

const initialState = {
  email: '',
  err: '',
  success: ''
}


const ShareCred = ({CredId}) => {
  const auth = useSelector(state => state.auth)
  const {user} = auth
  console.log(CredId)
    const [open, setOpen] = useState(false);

    //organization name and description
    const [cred, setCred] = useState(initialState)
    const {email, err, success} = cred

    const handleInputChange = e => {
      const {name, value} = e.target
      setCred({...cred, [name]:value, err: '', success: ''})
  }

  

  const handleSubmit = async e => {
      e.preventDefault()
      try {
          const res = await axios.post('/cred/share/'+CredId, {email : 'rupeshdevkota1@gmail.com'})
          alert('Cred Shared Successfully.Please Check your email.')
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
          {"Share Email"}
        </DialogTitle>

        <DialogContent>


        <Grid>

        <Typography variant="body2" style={{color: 'white'}} component="p" gutterBottom>
          
          </Typography> 
          {err && showErrMsg(err)}
          {success && showSuccessMsg(success)}
                <form id="customer-form-id" onSubmit={handleSubmit}>
            <Grid container spacing={1} style={{color: 'white'}}>

                <Grid item xs={12}>
                    <TextField name="Email" sx={{ input: { color: 'black', background: 'white' } }} InputLabelProps={{ style: { color: 'black' } }} onChange={handleInputChange}    placeholder="Email" label="Email" variant="filled" fullWidth required autoComplete='off' />
                </Grid>
            </Grid>
              
            </form>
     
    </Grid>

        </DialogContent>
        <DialogActions>

          <Button onClick={cancelhandel} style={{color: 'white'}}>Cancel</Button>

          <Button type="submit" form="customer-form-id" style={{color: '#00A7E3'}} autoFocus>
            Share
          </Button>



        </DialogActions>
      </Dialog>
                  
            <Action text="Add Credentials" style={{backgroundColor: 'black',height : '27px',width: "27px",zIndex: 'tooltip'}} onClick={opensessame}>
              <ShareIcon />
            </Action>

    </>
  );
};

export default ShareCred;