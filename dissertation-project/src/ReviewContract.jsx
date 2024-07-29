// import React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Avatar from '@mui/material/Avatar';
// import SendIcon from '@mui/icons-material/Send';
// import FilePresentIcon from '@mui/icons-material/FilePresent';

// export function ReviewContract(){
//     return(
//         <>
//         <Box
//         sx={{width:'100vw', height: '100vh', display:'flex',
//             flexDirection:'column', justifyContent:'center', alignItems:'center'
//         }}>
//         <h1>Review Contract</h1>
//         <div className='review-input-div'>
//           <TextField id="outlined-basic" label="Input for reviewing legal contract" variant="outlined" />
//           <Avatar sx={{ background:'rgb(25 118 210)' }}>
//             <FilePresentIcon />
//           </Avatar>
//           <Avatar sx={{ background:'rgb(25 118 210)' }}>
//             <SendIcon sx={{ transform: 'rotate(-35deg)' }} />
//           </Avatar>
//         </div>
//         </Box>
//         </>
//     );
// }

import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import SendIcon from '@mui/icons-material/Send';
import FilePresentIcon from '@mui/icons-material/FilePresent';

export function ReviewContract() {
    const [inputValue, setInputValue] = useState('');
    const [displayValue, setDisplayValue] = useState('');
    const fileInputRef = useRef(null);

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

    const handleFileButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log('File selected:', file);
            // Handle file upload logic here
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
                            label="Input for reviewing legal contract" 
                            variant="outlined" 
                            value={inputValue}
                            onChange={handleInputChange}
                            onKeyDown={handleKeyPress} 
                        />
                        <Avatar sx={{ background: 'rgb(25 55 126)', margin: '0px 8px', cursor: 'pointer' }} onClick={handleSendClick}>
                            <SendIcon sx={{ transform: 'rotate(-35deg)' }} />
                        </Avatar>
                      
                        <Avatar sx={{ background: 'rgb(25 55 126)', cursor: 'pointer'  }}  onClick={handleFileButtonClick}>
                          <FilePresentIcon />
                        </Avatar>
                        
                        <input
                            type="file"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                        />
                    </div>
                </div>
            </Box>
        </>
    );
}
