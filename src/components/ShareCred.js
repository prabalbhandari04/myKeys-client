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

    const [open, setOpen] = useState(false);
    const [data, setData] = useState(initialState)

    const {email, err, success} = data

    const handleChangeInput = e => {
        const {name, value} = e.target
        setData({...data, [name]:value, err: '', success: ''})
    }

    const ShareCred = async () => {
        
        try {
            const res = await axios.post('/cred/share/'+CredId, {email})

            return setData({...data, err: '', success: res.data.msg})
        } catch (err) {
            err.response.data.msg && setData({...data, err:  err.response.data.msg, success: ''})
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
          <div className="row">
                {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}

                <label htmlFor="email">Enter your email address</label>
                <input type="email" name="email" id="email" value={email}
                onChange={handleChangeInput} />
                <button onClick={ShareCred}>Share</button>
          </div>
    </Grid>

        </DialogContent>
      </Dialog>
                  
            <Action text="Add Credentials" style={{backgroundColor: 'black',height : '27px',width: "27px",zIndex: 'tooltip'}} onClick={opensessame}>
              <ShareIcon />
            </Action>

    </>
  );
};

export default ShareCred;