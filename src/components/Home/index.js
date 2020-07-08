import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: `calc(100% - ${theme.spacing(4)}px)`,
    margin: [[theme.spacing(2), 0]],
    textAlign: 'center',
  },
}));

const Home = (props) => {
  const {
    items,
  } = props;

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h4" component="h2" gutterBottom>
        Welome
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        You have
        {` ${items.length} `}
        items in your quality world.
      </Typography>
    </div>
  );
};

export default Home;
