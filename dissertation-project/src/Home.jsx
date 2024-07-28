import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Toolbar } from '@mui/material';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export function Home() {
  return (
    <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent:'center',
            alignItems:'center',
            width:'100vw',
            minHeight: '100vh',
            // background:'orange'      
          }}
        >
      <Container sx={{ mt: 12, mb: 4, flexGrow: 1}}>
        <h2>What would you like to do today?</h2>
        <Grid container spacing={7} sx={{ mt: 4 }} justifyContent="center" alignItems="center">
          <Grid item>
            <Link to="/generate-contract" style={{ textDecoration: 'none' }}>
              <Card sx={{ padding: 6, boxShadow: 3, borderRadius: '12px' }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Generate Contract
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/review-contract" style={{ textDecoration: 'none' }}>
              <Card sx={{ padding: 6, boxShadow: 3, borderRadius: '12px' }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Review Contract
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ py: 2 }}>
        <Copyright />
      </Box>
      </div>
  );
}
