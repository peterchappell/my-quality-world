import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import NeedsChart from 'components/NeedsChart';

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
    marginTop: theme.spacing(2),
  },
}));

const NEEDS = [
  {
    name: 'Physiology',
    key: 'physiology',
  },
  {
    name: 'Love and Belonging',
    key: 'loveAndBelonging',
  },
  {
    name: 'Power',
    key: 'power',
  },
  {
    name: 'Fun',
    key: 'fun',
  },
  {
    name: 'Freedom',
    key: 'freedom',
  },
];

const Home = (props) => {
  const {
    items,
  } = props;

  const classes = useStyles();

  const calculateNeedMetPercent = (need) => {
    const itemsCheck = [...items];
    const maxForNeed = itemsCheck.length * 5 * 11;
    let needScore = 0;
    itemsCheck.forEach((item) => {
      needScore += item[need] * item.level;
    });
    // const needScore = itemsCheck.reduce((accumulator, item) => item[need] * item.level);
    console.log('need', need, maxForNeed, needScore, (needScore / maxForNeed) * 100);
    return (needScore / maxForNeed) * 100;
  };

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
      <Grid container spacing={3} className={classes.needsContainer}>
        { NEEDS.map((need) => (
          <Grid item xs key={`need_score_${need.key}`}>
            <NeedsChart value={calculateNeedMetPercent(need.key)} label={need.name} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
