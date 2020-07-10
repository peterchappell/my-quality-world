import React from 'react';

import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';

const ConfirmDelete = (props) => {
  const {
    deleteHandler,
    isOpen,
    closeHandler,
  } = props;

  return (
    <Dialog
      maxWidth="xs"
      aria-labelledby="confirmation-delete-title"
      open={isOpen}
      onClose={closeHandler}
    >
      <DialogTitle id="confirmation-delete-title">Delete this item?</DialogTitle>
      <DialogContent dividers>
        <Typography variant="body2" component="p" gutterBottom>
          Are you sure you want to remove this item from your quality world?
        </Typography>
        <Typography variant="body2" component="p">
          Deleting an item is permanent...
          But of course, you can always add it back in as a new item.
          You can do whatever you want.
          It is your quality world after all.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={closeHandler} color="primary">
          Cancel
        </Button>
        <Button onClick={deleteHandler} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDelete;
