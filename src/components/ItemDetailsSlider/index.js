import React from 'react';

import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

import { MAX_LEVEL } from 'utils/constants';

const MAX = MAX_LEVEL;
const MIN = 0;
const STEP = 0.1;

const ItemDetailsSlider = (props) => {
  const {
    propertyName,
    label,
    currentValue,
    changeHandler,
  } = props;

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
      <Grid container spacing={2}>
        <Grid item>
          <IconButton aria-label="Less" onClick={decreaseValue} disabled={currentValue <= MIN}>
            <RemoveIcon />
          </IconButton>
        </Grid>
        <Grid item xs>
          <Slider
            value={currentValue}
            min={MIN}
            max={MAX}
            step={STEP}
            onChange={handleValueChange}
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
