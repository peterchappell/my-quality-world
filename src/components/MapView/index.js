import React, { useEffect, useRef, useState } from 'react';
// import Konva from 'konva';

import {
  Stage,
  Layer,
  Circle,
  Text,
} from 'react-konva';

import { makeStyles } from '@material-ui/core/styles';

const HEIGHT = 1000;
const WIDTH = 1000;

const useStyles = makeStyles((theme) => ({
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: `calc(100% - ${theme.spacing(2)}px)`,
    margin: [[theme.spacing(2), 0]],
  },
  mapContainer: {
    height: '100%',
    margin: [[0, 'auto']],
    width: '100%',
  },
  map: {
    backgroundColor: 'white',
    position: 'relative',
  },
}));

const MapView = (props) => {
  const {
    items,
    // eslint-disable-next-line no-unused-vars
    handleSaveItem,
  } = props;

  const classes = useStyles();
  const containerRef = useRef();
  const [mapSize, setMapSize] = useState(300);
  const [mapScale, setMapScale] = useState(1);
  const useEffectOnlyOnMount = (mountFunction) => useEffect(mountFunction, []);

  const calculateNewLevel = (posX, posY) => {
    const absolutePosX = Math.abs(posX);
    const absolutePosY = Math.abs(posY);
    const radiusAdjustment = 60 * mapScale;
    const distance = Math.sqrt(absolutePosX ** 2 + absolutePosY ** 2) * mapScale - radiusAdjustment;
    const maxDistance = Math.sqrt((WIDTH / 2) ** 2 * 2) * mapScale - radiusAdjustment * 2;
    const level = (1 - (distance / maxDistance)) * 10;
    return level;
  };

  const saveItem = (item, shapeAttributes) => {
    const updatedItem = {
      ...item,
      posX: shapeAttributes.x,
      posY: shapeAttributes.y,
      level: calculateNewLevel(shapeAttributes.x, shapeAttributes.y),
    };
    handleSaveItem(updatedItem, true);
  };

  const renderItem = (item) => {
    const imgEl = document.createElement('img');
    imgEl.src = item.image;
    return (
      <Circle
        key={`map_item_${item.id}`}
        draggable
        dragBoundFunc={(pos) => {
          let newPosX = pos.x;
          let newPosY = pos.y;
          if (pos.x - 50 * mapScale <= 0) {
            newPosX = 50 * mapScale;
          } else if (pos.x + 50 * mapScale >= WIDTH * mapScale) {
            newPosX = WIDTH * mapScale - 50 * mapScale;
          }
          if (pos.y - 50 * mapScale <= 0) {
            newPosY = 50 * mapScale;
          } else if (pos.y + 50 * mapScale >= HEIGHT * mapScale) {
            newPosY = HEIGHT * mapScale - 50 * mapScale;
          }
          return {
            x: newPosX,
            y: newPosY,
          };
        }}
        onDragEnd={(event) => {
          saveItem(item, event.currentTarget.attrs);
        }}
        height={100}
        x={item.posX || 100}
        y={item.posY || 100}
        fillPatternImage={imgEl}
        fillPatternScale={{ x: 0.3, y: 0.3 }}
        width={100}
      />
    );
  };

  useEffectOnlyOnMount(() => {
    console.log('items', items);
    console.log('containerRef', containerRef.current, containerRef.current.offsetWidth, containerRef.current.offsetHeight);
    console.log('scale?', Math.min(containerRef.current.offsetWidth / WIDTH, containerRef.current.offsetHeight / HEIGHT));
    setMapSize(Math.min(containerRef.current.offsetWidth, containerRef.current.offsetHeight));
    // eslint-disable-next-line max-len
    setMapScale(Math.min(containerRef.current.offsetWidth / WIDTH, containerRef.current.offsetHeight / HEIGHT));
    // drawItems();
  });

  return (
    <div className={classes.pageContainer}>
      <div className={classes.mapContainer} ref={containerRef}>
        <Stage
          height={mapSize}
          width={mapSize}
          className={classes.map}
          scaleX={mapScale}
          scaleY={mapScale}
        >
          <Layer
            offsetX={-WIDTH / 2}
            offsetY={-HEIGHT / 2}
          >
            <Circle
              fill="#ccc"
              radius={20}
              x={0}
              y={0}
            />
            <Text
              align="center"
              fill="#000000"
              fontSize={18}
              height={40}
              text="Me"
              verticalAlign="middle"
              width={40}
              x={-20}
              y={-20}
            />
          </Layer>
          <Layer
            offsetX={-WIDTH / 2}
            offsetY={-HEIGHT / 2}
          >
            {items.map((item) => renderItem(item))}
          </Layer>
        </Stage>
      </div>
      <div>I am outside of the map...</div>
    </div>
  );
};

export default MapView;
