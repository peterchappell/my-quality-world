import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: 'center',
  },
  divider: {
    margin: [[theme.spacing(2), 'auto']],
    maxWidth: '300px',
  },
}));

const BlankState = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="body1" component="p" gutterBottom>
        Let&apos;s get started by adding some items to your quality world.
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        You can add as many as you like, but try and start with at least a few.
      </Typography>
      <Divider className={classes.divider} />
      <Typography variant="body1" component="p" gutterBottom>
        Click the big plus button in the bottom corner to add your first item.
      </Typography>
    </div>
  );
};

export default BlankState;
