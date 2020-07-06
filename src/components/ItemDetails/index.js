import React, { useState, useEffect } from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import ItemDetailsSlider from 'components/ItemDetailsSlider';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  field: {
    width: '100%',
  },
}));

const ItemDetails = (props) => {
  const {
    saveHandler,
    item,
  } = props;

  const classes = useStyles();
  const [thisItem, setThisItem] = useState(item);

  const handleChange = (event) => {
    setThisItem({
      ...thisItem,
      name: event.target.value,
    });
  };

  const handleSliderChange = (propertyName, newValue) => {
    const updatedItem = {
      ...thisItem,
    };
    updatedItem[propertyName] = newValue;
    setThisItem(updatedItem);
  };

  const submitItem = (event) => {
    event.preventDefault();
    saveHandler(thisItem);
  };

  useEffect(() => {
    setThisItem(item);
  }, [item]);

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={submitItem}>
      <div>
        <TextField id="standard-basic" label="Name" value={thisItem.name} onChange={handleChange} className={classes.field} />
      </div>
      <ItemDetailsSlider
        propertyName="physiology"
        label="Physiology"
        currentValue={thisItem.physiology}
        changeHandler={handleSliderChange}
      />
      <ItemDetailsSlider
        propertyName="loveAndBelonging"
        label="Love and Belonging"
        currentValue={thisItem.loveAndBelonging}
        changeHandler={handleSliderChange}
      />
      <ItemDetailsSlider
        propertyName="power"
        label="Power"
        currentValue={thisItem.power}
        changeHandler={handleSliderChange}
      />
      <ItemDetailsSlider
        propertyName="fun"
        label="Fun"
        currentValue={thisItem.fun}
        changeHandler={handleSliderChange}
      />
      <ItemDetailsSlider
        propertyName="freedom"
        label="Freedom"
        currentValue={thisItem.freedom}
        changeHandler={handleSliderChange}
      />
      <Button variant="contained" color="primary" onClick={submitItem}>
        Save
      </Button>
    </form>
  );
};

ItemDetails.defaultProps = {
  item: {
    name: '',
    physiology: 0,
    loveAndBelonging: 0,
    power: 0,
    fun: 0,
    freedom: 0,
    level: 0,
    id: 0,
  },
};

export default ItemDetails;
