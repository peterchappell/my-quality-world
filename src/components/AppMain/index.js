import React from 'react';
import { Link } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  itemImage: {
    margin: theme.spacing(1),
    maxWidth: '80%',
  },
}));

const AppMain = (props) => {
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
    <SwipeableViews
      enableMouseEvents
      index={itemIndex}
      onChangeIndex={updateIndex}
    >
      { items.map((item) => (
        <div
          key={`card_${item.id}`}
        >
          <div style={{ padding: '1 em', display: 'block' }}>
            { item.image && (
              <img
                src={item.image}
                alt={`${item.name}`}
                className={classes.itemImage}
              />
            )}
            <p>{item.name}</p>
            <Link to={`/edit/${item.id}`}>
              edit
            </Link>
          </div>
        </div>
      ))}
    </SwipeableViews>
  );
};

export default AppMain;
