import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';

const AppMain = (props) => {
  const {
    items,
    itemIndex,
  } = props;

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
