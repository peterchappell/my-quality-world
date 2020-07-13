import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { NEEDS } from 'utils/constants';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column-reverse',
  },
  chart: {
    backgroundColor: theme.palette.grey[200],
    borderRadius: '2px',
    height: '4px',
    position: 'relative',
  },
  bar: {
    borderRadius: '2px',
    height: '4px',
    left: 0,
    position: 'absolute',
    top: 0,
  },
}));

const ItemNeeds = (props) => {
  const {
    item,
  } = props;

  const classes = useStyles(props);

  const calculateWidth = (value) => `${(value / 5) * 100}%`;

  return (
    <Grid container spacing={1}>
      { NEEDS.map((need) => (
        <Grid item xs key={`needs_item_values_${need.key}`} className={classes.container}>
          <Typography variant="caption" component="p">
            {need.shortName}
          </Typography>
          <div className={classes.chart}>
            <div className={classes.background} />
            <div
              className={classes.bar}
              style={{
                backgroundColor: need.colour,
                width: calculateWidth(item[need.key]),
              }}
            />
          </div>
        </Grid>
      ))}
    </Grid>

  );
};

export default ItemNeeds;
