import React, { useEffect, useRef, useState } from 'react';

import {
  Stage,
  Layer,
  Circle,
  Text,
  Rect,
  Image,
  Group,
  Line,
} from 'react-konva';

import { makeStyles } from '@material-ui/core/styles';

const CANVAS_HEIGHT = 1000;
const CANVAS_WIDTH = 1000;
const ITEM_SIZE = 100;

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
    position: 'relative',
  },
}));

const MapView = (props) => {
  const {
    items,
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
    const radiusAdjustment = ITEM_SIZE * mapScale;
    const distance = Math.sqrt(absolutePosX ** 2 + absolutePosY ** 2) * mapScale - radiusAdjustment;
    const maxDistance = Math.sqrt((CANVAS_WIDTH / 2) ** 2 * 2) * mapScale - radiusAdjustment * 2;
    const level = (1 - (distance / maxDistance)) * 10;
    return level;
  };

  const handleDragStartShadow = (event) => {
    event.target.setAttrs({
      scaleX: 1.1,
      scaleY: 1.1,
    });
    event.target.children[0].setAttrs({
      shadowOffset: {
        x: 15,
        y: 15,
      },
    });
  };

  const handleDragEndShadow = (event) => {
    event.target.to({
      duration: 0.2,
      scaleX: 1,
      scaleY: 1,
    });
    event.target.children[0].to({
      duration: 0.2,
      shadowOffsetX: 5,
      shadowOffsetY: 5,
    });
  };

  const handleCanvasBounds = (pos) => {
    let newPosX = pos.x;
    let newPosY = pos.y;
    if (pos.x - (ITEM_SIZE / 2) * mapScale <= 0) {
      newPosX = 50 * mapScale;
    } else if (pos.x + (ITEM_SIZE / 2) * mapScale >= CANVAS_WIDTH * mapScale) {
      newPosX = CANVAS_WIDTH * mapScale - (ITEM_SIZE / 2) * mapScale;
    }
    if (pos.y - (ITEM_SIZE / 2) * mapScale <= 0) {
      newPosY = (ITEM_SIZE / 2) * mapScale;
    } else if (pos.y + (ITEM_SIZE / 2) * mapScale >= CANVAS_HEIGHT * mapScale) {
      newPosY = CANVAS_HEIGHT * mapScale - (ITEM_SIZE / 2) * mapScale;
    }
    return {
      x: newPosX,
      y: newPosY,
    };
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
    const itemHeight = item.imageRatio * 100;
    return (
      <React.Fragment key={`map_item_${item.id}`}>
        <Line
          stroke="#ccc"
          strokeWidth={3}
          points={[
            0,
            0,
            item.posX || 100,
            item.posY || 100,
          ]}
        />
        <Rect
          cornerRadius={5}
          x={item.posX || 100}
          y={item.posY || 100}
          offset={{
            x: ITEM_SIZE / 2,
            y: itemHeight / 2,
          }}
          width={ITEM_SIZE}
          height={itemHeight}
          stroke="#ccc"
          strokeWidth={3}
          fill="#fff"
        />
        <Group
          draggable
          dragBoundFunc={handleCanvasBounds}
          onDragStart={handleDragStartShadow}
          onDragEnd={(event) => {
            handleDragEndShadow(event);
            saveItem(item, event.currentTarget.attrs);
          }}
          x={item.posX || 100}
          y={item.posY || 100}
          offset={{
            x: ITEM_SIZE / 2,
            y: itemHeight / 2,
          }}
          width={ITEM_SIZE}
          height={itemHeight}
        >
          <Rect
            shadowColor="black"
            shadowBlur={10}
            shadowOpacity={0.3}
            width={ITEM_SIZE}
            height={itemHeight}
            fill="#000"
          />
          <Image
            image={imgEl}
            width={ITEM_SIZE}
            height={itemHeight}
          />
        </Group>
      </React.Fragment>
    );
  };

  useEffectOnlyOnMount(() => {
    setMapSize(Math.min(
      containerRef.current.offsetWidth,
      containerRef.current.offsetHeight,
    ));
    setMapScale(Math.min(
      containerRef.current.offsetWidth / CANVAS_WIDTH,
      containerRef.current.offsetHeight / CANVAS_HEIGHT,
    ));
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
            offsetX={-CANVAS_WIDTH / 2}
            offsetY={-CANVAS_HEIGHT / 2}
          >
            {items.map((item) => renderItem(item))}
          </Layer>
          <Layer
            offsetX={-CANVAS_WIDTH / 2}
            offsetY={-CANVAS_HEIGHT / 2}
          >
            <Circle
              fill="#f5f5f5"
              radius={ITEM_SIZE / 2}
              x={0}
              y={0}
              shadowColor="black"
              shadowBlur={10}
              shadowOpacity={0.3}
              shadowOffsetX={10}
              shadowOffsetY={10}
            />
            <Text
              align="center"
              fill="#000000"
              fontSize={40}
              height={ITEM_SIZE}
              text="me"
              verticalAlign="middle"
              width={ITEM_SIZE}
              x={-ITEM_SIZE / 2}
              y={-ITEM_SIZE / 2}
            />
          </Layer>
        </Stage>
      </div>
      <div>I am outside of the map...</div>
    </div>
  );
};

export default MapView;
