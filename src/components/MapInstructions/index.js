import React, { useEffect, useState } from 'react';

import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';

const messageConfirmationKey = 'mqw_maps';

const MapInstructions = (props) => {
  const {
    numItems,
  } = props;

  const [showMessage, setShowMessage] = useState(false);

  const okayHandler = () => {
    setShowMessage(false);
    localStorage.setItem(messageConfirmationKey, 'true');
  };

  useEffect(() => {
    setShowMessage(!localStorage.getItem(messageConfirmationKey));
  }, []);

  if (!numItems) {
    return null;
  }

  return (
    <Dialog
      maxWidth="xs"
      aria-labelledby="instructions-message"
      open={showMessage}
      onClose={okayHandler}
    >
      <DialogContent>
        <Typography variant="body2" component="p" gutterBottom>
          Move items closer or further away from the centre depending on how big a part they
          are playing in your life right now.
        </Typography>
        <Typography variant="body2" component="p">
          Tap on the centre icon to show or hide the needs satisfaction charts.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={okayHandler} color="primary">
          Got it
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MapInstructions;
