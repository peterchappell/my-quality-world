import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import BlankState from 'components/BlankState';
import NeedsChart from 'components/NeedsChart';
import calculateNeedMetPercent from 'utils/calculateNeedMetPercent';
import { NEEDS } from 'utils/constants';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: `calc(100% - ${theme.spacing(4)}px)`,
    margin: [[theme.spacing(2), 0]],
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center',
    },
  },
  needsContainer: {
    margin: [[theme.spacing(2), 'auto', 0]],
  },
}));

const Home = (props) => {
  const {
    items,
  } = props;

  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.container}>
      <Typography variant="h4" component="h2" gutterBottom>
        Welcome
      </Typography>
      { items.length ? (
        <>
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
        </>
      ) : (
        <BlankState />
      )}
    </Container>
  );
};

export default Home;
