import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { virtualize } from 'react-swipeable-views-utils';
import { mod } from 'react-swipeable-views-core';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import ItemCard from 'components/ItemCard';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    alignItems: 'center',
    display: 'flex',
    margin: [[0, 'auto']],
  },
  previousButton: {
    background: 'rgba(255,255,255,0.7)',
    borderRadius: '50%',
    left: 0,
    position: 'absolute',
    top: '100px',
    zIndex: 10,
    [theme.breakpoints.up('sm')]: {
      top: '200px',
    },
  },
  nextButton: {
    background: 'rgba(255,255,255,0.7)',
    borderRadius: '50%',
    position: 'absolute',
    right: 0,
    top: '100px',
    zIndex: 10,
    [theme.breakpoints.up('sm')]: {
      top: '200px',
    },
  },
  buttonHide: {
    display: 'none',
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
  const [isSliding, setIsSliding] = useState(false);

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
        onSwitching={() => {
          setIsSliding(true);
        }}
        onTransitionEnd={() => {
          setIsSliding(false);
        }}
        slideRenderer={slideRenderer}
      />
      <div className={isSliding ? classes.buttonHide : classes.previousButton}>
        <IconButton
          aria-label="Previous"
          color="primary"
          onClick={() => {
            setCurrentIndex(currentIndex - 1);
          }}
        >
          <KeyboardArrowLeftIcon />
        </IconButton>
      </div>
      <div className={isSliding ? classes.buttonHide : classes.nextButton}>
        <IconButton
          aria-label="Next"
          color="primary"
          onClick={() => {
            setCurrentIndex(currentIndex + 1);
          }}
        >
          <KeyboardArrowRightIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ItemCards;
