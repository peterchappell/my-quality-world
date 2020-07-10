import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Grow } from '@material-ui/core';

import NeedsChart from 'components/NeedsChart';
import calculateNeedMetPercent from 'utils/calculateNeedMetPercent';
import { NEEDS } from 'utils/constants';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    bottom: 'calc(50% + 40px)',
    boxShadow: theme.shadows[6],
    left: 'calc(50% - 136px)',
    padding: '10px',
    position: 'absolute',
    textAlign: 'center',
    transform: 'translateX(-50%)',
    width: '250px',
  },
  connector: {
    bottom: '-10px',
    display: 'block',
    width: 0,
    height: 0,
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderTop: '10px solid #fff',
    left: 'calc(50% - 10px)',
    position: 'absolute',
  },
}));

const MapNeedsStatusPanel = (props) => {
  const {
    items,
    isShowing,
  } = props;

  const classes = useStyles();

  return (
    <Grow
      appear
      in={isShowing}
    >
      <div className={classes.container}>
        <Grid container spacing={1}>
          { NEEDS.map((need) => (
            <Grid item xs key={`need_score_${need.key}`}>
              <NeedsChart
                value={calculateNeedMetPercent(need.key, items)}
                colour={need.colour}
                type="mini"
                label={need.shortName}
                hideValue
              />
            </Grid>
          ))}
        </Grid>
        <div className={classes.connector} />
      </div>
    </Grow>
  );
};

export default MapNeedsStatusPanel;
