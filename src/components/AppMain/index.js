import React, { useState } from 'react';
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
  } = props;

  const classes = useStyles();
  const [currentItemIndex, setCurrentItemIndex] = useState(itemIndex);

  const updateIndex = (newIndex) => {
    setCurrentItemIndex(newIndex);
  };

  return (
    <SwipeableViews
      enableMouseEvents
      index={currentItemIndex}
      onChangeIndex={updateIndex}
    >
      { items.map((item, index) => (
        <div
          key={item.name.replace(/\s/g, '_')}
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
            <Link to={`/edit/${index}`}>
              edit
            </Link>
          </div>
        </div>
      ))}
    </SwipeableViews>
  );
};

export default AppMain;
