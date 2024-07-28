import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import SendIcon from '@mui/icons-material/Send';
import FilePresentIcon from '@mui/icons-material/FilePresent';

export function ReviewContract(){
    return(
        <>
        <Box
        sx={{width:'100vw', height: '100vh', display:'flex',
            flexDirection:'column', justifyContent:'center', alignItems:'center'
        }}>
        <h1>Review Contract</h1>
        <div className='review-input-div'>
          <TextField id="outlined-basic" label="Input for reviewing legal contract" variant="outlined" />
          <Avatar sx={{ background:'rgb(25 118 210)' }}>
            <FilePresentIcon />
          </Avatar>
          <Avatar sx={{ background:'rgb(25 118 210)' }}>
            <SendIcon sx={{ transform: 'rotate(-35deg)' }} />
          </Avatar>
        </div>
        </Box>
        </>
    );
}