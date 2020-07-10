import React from 'react';
import SwipeableViews from 'react-swipeable-views';

import { makeStyles } from '@material-ui/core/styles';

import ItemCard from 'components/ItemCard';

const useStyles = makeStyles(() => ({
  mainContainer: {
    alignItems: 'center',
    display: 'flex',
    margin: [[0, 'auto']],
  },
}));

const ItemCards = (props) => {
  const {
    items,
    itemIndex,
    onSlide,
  } = props;

  const classes = useStyles();

  const updateIndex = (newIndex) => {
    onSlide(newIndex);
  };

  return (
    <div className={classes.mainContainer}>
      <SwipeableViews
        enableMouseEvents
        index={itemIndex}
        onChangeIndex={updateIndex}
        slideStyle={{ display: 'flex', alignItems: 'center' }}
      >
        { items.map((item) => (
          <ItemCard key={`card_${item.id}`} item={item} />
        ))}
      </SwipeableViews>
    </div>
  );
};

export default ItemCards;
