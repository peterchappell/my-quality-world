import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles, createStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => createStyles({
  fab: {
    bottom: theme.spacing(9),
    color: 'white',
    display: 'block',
    position: 'fixed',
    right: theme.spacing(2),
  },
}));

export default function AppAdd() {
  const classes = useStyles();

  return (
    <Link to="/new" className={classes.fab}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Link>
  );
}
