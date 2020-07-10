import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

import { MAX_FOR_ITEM } from 'utils/constants';

const MAX = MAX_FOR_ITEM;
const MIN = 0;
const STEP = 0.1;

const useStyles = makeStyles(() => ({
  sliderGridItem: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const ItemDetailsSlider = (props) => {
  const {
    propertyName,
    label,
    currentValue,
    changeHandler,
    colour,
    description,
  } = props;

  const classes = useStyles();

  const handleValueChange = (event, newValue) => {
    changeHandler(propertyName, newValue);
  };

  const increaseValue = () => {
    if (currentValue < MAX) {
      changeHandler(propertyName, currentValue + STEP);
    }
  };

  const decreaseValue = () => {
    if (currentValue > MIN) {
      changeHandler(propertyName, currentValue - STEP);
    }
  };

  return (
    <div style={{ marginTop: '1em', marginBottom: '1em' }}>
      <Typography id={`strength-${propertyName}`}>
        {label}
      </Typography>
      <Typography variant="caption">
        {description}
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <IconButton aria-label="Less" onClick={decreaseValue} disabled={currentValue <= MIN}>
            <RemoveIcon />
          </IconButton>
        </Grid>
        <Grid item xs className={classes.sliderGridItem}>
          <Slider
            value={currentValue}
            min={MIN}
            max={MAX}
            step={STEP}
            onChange={handleValueChange}
            style={{ color: colour }}
            aria-labelledby={`strength-${propertyName}`}
          />
        </Grid>
        <Grid item>
          <IconButton aria-label="More" onClick={increaseValue} disabled={currentValue >= MAX}>
            <AddIcon />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default ItemDetailsSlider;
