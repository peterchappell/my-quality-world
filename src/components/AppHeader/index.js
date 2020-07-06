import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  toolbar: {
    justifyContent: 'space-between',
  },
  siteNameLink: {
    color: 'white',
    textDecoration: 'none',
    '&:hover, &:link, &:visited, &:active': {
      color: 'white',
    },
  },
}));

const AppHeader = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" component="header">
      <Toolbar className={classes.toolbar}>
        <Link to="/" className={classes.siteNameLink}>
          <Typography variant="h6" component="h1">
            My Quality World
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
