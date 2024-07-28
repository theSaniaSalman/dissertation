import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import SendIcon from '@mui/icons-material/Send';

export function GenContract() {
    const [inputValue, setInputValue] = useState('');
    const [displayValue, setDisplayValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSendClick = () => {
      if (inputValue.trim() !== '') {
          setDisplayValue(inputValue);
          setInputValue(''); // Clear the input field after sending
      }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendClick();
        }
    };

    return (
        <>
            <Box
                sx={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
            >
                {/* <h1>Generate Contract</h1> */}
                <div className='main-div'>
                  <div className="chat-div">
                  {displayValue && (
                    <div className='sender-text'>
                      {displayValue}
                    </div>
                  )}
                  </div>
                  <div className='input-div'>
                      <TextField 
                          id="outlined-basic" 
                          label="Input for generating legal contract" 
                          variant="outlined" 
                          value={inputValue}
                          onChange={handleInputChange}
                          onKeyDown={handleKeyPress} 
                      />
                      <Avatar sx={{ background: 'rgb(25 55 126)', marginLeft: '8px', cursor: 'pointer' }} onClick={handleSendClick}>
                          <SendIcon sx={{ transform: 'rotate(-35deg)' }} />
                      </Avatar>
                  </div>
                </div>
            </Box>
        </>
    );
}
