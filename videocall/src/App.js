import React from 'react';
import { AppBar,Typography } from '@mui/material';
import {styled} from '@mui/system'

import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';

const AppBarStyles = styled(AppBar)(({theme}) => ({
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',
    [theme.breakpoints.down('xs')]: {
      width: '90%',
    }
}));

const WrapperStyles = styled('div')(({theme}) => ({
  display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%'
}));

function App() {
  return (
    <WrapperStyles>
    <AppBarStyles  position="static" >
    <Typography variant="h2" align="center">Video Chat</Typography>
    </AppBarStyles>
    <VideoPlayer />
    <Options>
      <Notifications/>
    </Options>
  </WrapperStyles>
  );
}

export default App;
