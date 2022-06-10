import React, { useState, useContext } from 'react';
import { Button, TextField, Grid, Typography, Container, Paper } from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled } from '@mui/icons-material';

import { SocketContext } from '../SocketContext';

const styles= {
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  gridContainer: {
    width: '100%'
  },
  container: {
    width: '600px',
    margin: '35px 0',
    padding: 0
  },
  margin: {
    marginTop: 20
  },
  padding: {
    padding: 20
  },
  paper: {
    padding: '10px 20px',
    border: '2px solid black'
  }
}

export default function Options({children}) {
    
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');

  return (
    <Container style={styles.container}>
      <Paper elevation={10} style={styles.paper}>
        <form style={styles.root} noValidate autoComplete="off">
          <Grid container style={styles.gridContainer}>
            <Grid item xs={12} md={6} style={styles.padding}>
              <Typography gutterBottom variant="h6" marginBottom="10px">Account Info</Typography>
              <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
              <CopyToClipboard text={me} style={styles.margin}>
                <Button variant="contained" color="primary" fullWidth startIcon={<Assignment fontSize="large" />}>
                  Copy Your ID
                </Button>
              </CopyToClipboard>
            </Grid>
            <Grid item xs={12} md={6} style={styles.padding}>
              <Typography gutterBottom variant="h6" marginBottom="10px">Make a call</Typography>
              <TextField label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
              {callAccepted && !callEnded ? (
                <Button variant="contained" color="secondary" startIcon={<PhoneDisabled fontSize="large" />} fullWidth onClick={leaveCall} style={styles.margin}>
                  Hang Up
                </Button>
              ) : (
                <Button variant="contained" color="primary" startIcon={<Phone fontSize="large" />} fullWidth onClick={() => callUser(idToCall)} style={styles.margin}>
                  Call
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
        {children}
      </Paper>
    </Container>
  )
}
