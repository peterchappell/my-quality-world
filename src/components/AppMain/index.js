import React from 'react';
import { Link } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    margin: [[0, 'auto']],
  },
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
    handleSaveItem,
  } = props;

  const classes = useStyles();

  const setImageRatio = (item, imageAttrs) => {
    if (!item.imageRatio) {
      handleSaveItem({
        ...item,
        imageRatio: imageAttrs.height / imageAttrs.width,
      }, true);
    }
  };

  const updateIndex = (newIndex) => {
    onSlide(newIndex);
  };

  return (
    <div className={classes.mainContainer}>
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
                  onLoad={(event) => setImageRatio(item, event.target)}
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
    </div>
  );
};

export default AppMain;
