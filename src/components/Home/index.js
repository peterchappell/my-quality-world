import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import NeedsChart from 'components/NeedsChart';
import calculateNeedMetPercent from 'utils/calculateNeedMetPercent';
import { NEEDS } from 'utils/constants';

const useStyles = makeStyles((theme) => ({
  container: {
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: `calc(100% - ${theme.spacing(4)}px)`,
    margin: [[theme.spacing(2), 0]],
    textAlign: 'center',
  },
  needsContainer: {
    maxWidth: '700px',
    margin: [[theme.spacing(2), 'auto', 0]],
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
      <Typography variant="body1" component="p" gutterBottom>
        Here is an overview of how your quality world is meeting your needs.
      </Typography>
      <div className={classes.needsContainer}>
        <Grid container spacing={3}>
          { NEEDS.map((need) => (
            <Grid item xs key={`need_score_${need.key}`}>
              <NeedsChart
                value={calculateNeedMetPercent(need.key, items)}
                label={need.name}
                colour={need.colour}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Home;
