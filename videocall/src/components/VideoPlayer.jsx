import React, { useContext,useRef,useEffect } from 'react';
import { Grid, Typography, Paper } from '@mui/material';

import { SocketContext } from '../SocketContext';

const useStyles = {
  video: {
    width: '550px',
    border: '2px solid black',
  },
  gridContainer: {
    justifyContent: 'center',
  },
  paper: {
    padding: '10px',
    border: '2px solid black',
    margin: '10px',
  }
};



function Videos({ srcObject, ...props }: MediaStream) {
  const refVideo = useRef(null)

  useEffect(() => {
    if (!refVideo.current) return
    refVideo.current.srcObject = srcObject
  }, [refVideo, srcObject])

  return <video ref={refVideo} playsInline muted autoPlay style={useStyles.video} {...props} />
}

export default function VideoPlayer() {
    const { name, callAccepted,userVideo, callEnded, stream, call } = useContext(SocketContext);
    return (
      <Grid container style={useStyles.gridContainer}>
        {stream && (
          <Paper style={useStyles.paper}>
            <Grid item >
              <Typography variant="h4" align="center" gutterBottom>{name || 'Name'}</Typography>
              <Videos srcObject={stream}/>
            </Grid>
          </Paper>
        )}
        {callAccepted && !callEnded && (
          <Paper style={useStyles.paper}>
            <Grid item >
              <Typography variant="h4" align="center" gutterBottom>{call.name || 'Name'}</Typography>
              <video playsInline ref={userVideo} autoPlay style={useStyles.video} />
            </Grid>
          </Paper>
        )}
      </Grid>
    )
}
