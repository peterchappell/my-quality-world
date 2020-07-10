import React, { useState, useEffect } from 'react';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import ItemDetailsSlider from 'components/ItemDetailsSlider';
import { NEEDS } from 'utils/constants';

const useStyles = makeStyles((theme) => createStyles({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  field: {
    width: '100%',
  },
  itemImage: {
    maxWidth: '100%',
  },
  container: {
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      marginBottom: 0,
      marginTop: 0,
      paddingBottom: theme.spacing(2),
      paddingTop: theme.spacing(2),
    },
  },
  imageGrid: {
    marginBottom: theme.spacing(2),
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
    <Container maxWidth="sm" disableGutters>
      <Paper>
        <Container className={classes.container}>
          <Grid container spacing={2} className={classes.imageGrid}>
            <Grid item sm={4} xs={12}>
              { item.image && (
                <img
                  src={item.image}
                  alt={`${item.name}`}
                  className={classes.itemImage}
                />
              )}
            </Grid>
            <Grid item sm={8} xs={12}>
              <TextField
                label="Item name"
                value={thisItem.name}
                onChange={handleChange}
                className={classes.field}
                placeholder="Untitled"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Typography variant="body2" component="p" gutterBottom>
            Use the sliders below to indicate how this quality world image satisfies your needs.
          </Typography>
          {NEEDS.map((need) => (
            <ItemDetailsSlider
              propertyName={need.key}
              label={need.name}
              currentValue={thisItem[need.key]}
              changeHandler={handleSliderChange}
              key={`slider_${need.key}`}
              colour={need.colour}
              description={need.description}
            />
          ))}
          <Button variant="contained" color="primary" onClick={submitItem}>
            Save
          </Button>
        </Container>
      </Paper>
    </Container>
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
