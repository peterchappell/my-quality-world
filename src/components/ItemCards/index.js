import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { virtualize } from 'react-swipeable-views-utils';
import { mod } from 'react-swipeable-views-core';

import { makeStyles } from '@material-ui/core/styles';

import ItemCard from 'components/ItemCard';

const useStyles = makeStyles(() => ({
  mainContainer: {
    alignItems: 'center',
    display: 'flex',
    margin: [[0, 'auto']],
  },
}));

const VirtualizeSwipeableViews = virtualize(SwipeableViews);

const ItemCards = (props) => {
  const {
    items,
    itemIndex,
  } = props;

  const classes = useStyles();
  const [currentIndex, setCurrentIndex] = useState(itemIndex);

  const updateIndex = (newIndex) => {
    setCurrentIndex(newIndex);
  };

  const slideRenderer = ({ key, index }) => (
    <ItemCard key={`card_${key}`} item={items[mod(index, items.length)]} />
  );

  if (!items.length) {
    return null;
  }

  return (
    <div className={classes.mainContainer}>
      <VirtualizeSwipeableViews
        index={currentIndex}
        onChangeIndex={updateIndex}
        enableMouseEvents
        slideRenderer={slideRenderer}
      />
    </div>
  );
};

export default ItemCards;
