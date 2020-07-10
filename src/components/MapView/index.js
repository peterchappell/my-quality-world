import React, { useEffect, useRef, useState } from 'react';

import {
  Stage,
  Layer,
  Circle,
  Rect,
  Image,
  Group,
  Line,
} from 'react-konva';

import { makeStyles } from '@material-ui/core/styles';

import NeedsStatusPanel from 'components/NeedsStatusPanel';
import { MAX_LEVEL } from 'utils/constants';

const CANVAS_HEIGHT = 1000;
const CANVAS_WIDTH = 1000;
const ITEM_SIZE = 100;

const useStyles = makeStyles(() => ({
  mapContainer: {
    display: 'flex',
    height: '100%',
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
  const [showUserStatus, setShowUserStatus] = useState(true);
  const [showUserStatusOnDrag, setShowUserStatusOnDrag] = useState(true);
  const [mapHeight, setMapHeight] = useState(300);
  const [mapWidth, setMapWidth] = useState(300);
  const [mapScale, setMapScale] = useState(1);
  const [mapScaleX, setMapScaleX] = useState(1);
  const [mapScaleY, setMapScaleY] = useState(1);
  const useEffectOnlyOnMount = (mountFunction) => useEffect(mountFunction, []);

  const calculateNewLevel = (posX, posY) => {
    const absolutePosX = Math.abs(posX);
    const absolutePosY = Math.abs(posY);
    const radiusAdjustment = ITEM_SIZE * mapScale;
    const distance = Math.sqrt(absolutePosX ** 2 + absolutePosY ** 2) * mapScale - radiusAdjustment;
    const maxDistance = Math.sqrt((CANVAS_WIDTH / 2) ** 2 * 2) * mapScale - radiusAdjustment * 2;
    const level = Math.min((1 - (distance / maxDistance)) * 10, MAX_LEVEL);
    return level;
  };

  const handleDragStartShadow = (event) => {
    event.target.children[0].setAttrs({
      shadowOffset: {
        x: 15,
        y: 15,
      },
    });
  };

  const handleDragEndShadow = (event) => {
    event.target.children[0].to({
      duration: 0.2,
      shadowOffsetX: 5,
      shadowOffsetY: 5,
    });
  };

  const handleCanvasBounds = (pos) => {
    let newPosX = pos.x;
    let newPosY = pos.y;
    if (pos.x - (ITEM_SIZE / 2) * mapScaleX <= 0) {
      newPosX = (ITEM_SIZE / 2) * mapScaleX;
    } else if (pos.x + (ITEM_SIZE / 2) * mapScaleX >= CANVAS_WIDTH * mapScaleX) {
      newPosX = CANVAS_WIDTH * mapScaleX - (ITEM_SIZE / 2) * mapScaleX;
    }
    if (pos.y - (ITEM_SIZE / 2) * mapScaleY <= 0) {
      newPosY = (ITEM_SIZE / 2) * mapScaleY;
    } else if (pos.y + (ITEM_SIZE / 2) * mapScaleY >= CANVAS_HEIGHT * mapScaleY) {
      newPosY = CANVAS_HEIGHT * mapScaleY - (ITEM_SIZE / 2) * mapScaleY;
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
    handleSaveItem(updatedItem);
  };

  const toggleUserStatus = () => {
    setShowUserStatus(!showUserStatus);
  };

  const handleUserStatusOnDrag = (isDragging) => {
    if (showUserStatus) {
      setShowUserStatusOnDrag(!isDragging);
    }
  };

  const renderItem = (item) => {
    const imgEl = document.createElement('img');
    imgEl.src = item.image;
    const itemHeight = item.imageRatio * 100 * mapScaleX;
    return (
      <React.Fragment key={`map_item_${item.id}`}>
        <Line
          stroke="#ccc"
          strokeWidth={2}
          points={[
            0,
            0,
            item.posX || 100,
            item.posY || 100,
          ]}
        />
        <Rect
          cornerRadius={4}
          x={item.posX || 100}
          y={item.posY || 100}
          offset={{
            x: (ITEM_SIZE / 2) - 2,
            y: (itemHeight / 2) - 2,
          }}
          width={ITEM_SIZE - 4}
          height={itemHeight - 4}
          fill="#ccc"
          scaleY={1 / mapScaleY}
        />
        <Group
          draggable
          dragBoundFunc={handleCanvasBounds}
          onDragStart={(event) => {
            handleDragStartShadow(event);
            handleUserStatusOnDrag(true);
          }}
          onDragEnd={(event) => {
            handleDragEndShadow(event);
            saveItem(item, event.currentTarget.attrs);
            handleUserStatusOnDrag(false);
          }}
          x={item.posX || 100}
          y={item.posY || 100}
          offset={{
            x: ITEM_SIZE / 2,
            y: itemHeight / 2,
          }}
          width={ITEM_SIZE}
          height={itemHeight}
          scaleY={1 / mapScaleY}
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
    setMapHeight(containerRef.current.offsetHeight);
    setMapWidth(containerRef.current.offsetWidth);
    setMapScale(Math.min(
      containerRef.current.offsetWidth / CANVAS_WIDTH,
      containerRef.current.offsetHeight / CANVAS_HEIGHT,
    ));
    setMapScaleX(containerRef.current.offsetWidth / CANVAS_WIDTH);
    setMapScaleY(containerRef.current.offsetHeight / CANVAS_HEIGHT);
  });

  return (
    <div className={classes.mapContainer} ref={containerRef}>
      <Stage
        height={mapHeight}
        width={mapWidth}
        className={classes.map}
        scaleX={mapScaleX}
        scaleY={mapScaleY}
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
            fill="#fff"
            radius={(ITEM_SIZE * mapScale) / 2}
            x={0}
            y={0}
            shadowColor="black"
            shadowBlur={10}
            shadowOpacity={0.3}
            scaleX={1 / mapScaleX}
            scaleY={1 / mapScaleY}
          />
          <Circle
            fill="#333"
            radius={(ITEM_SIZE * mapScale) / 6}
            x={0}
            y={-30 * mapScale}
            scaleX={1 / mapScaleX}
            scaleY={1 / mapScaleY}
          />
          <Rect
            cornerRadius={2}
            width={(ITEM_SIZE / 2) * mapScale}
            height={(ITEM_SIZE / 4) * mapScale}
            fill="#333"
            scaleX={1 / mapScaleX}
            scaleY={1 / mapScaleY}
            x={0}
            y={10 * mapScale}
            offsetX={(ITEM_SIZE / 4) * mapScale}
          />
          <Circle
            fill="transparent"
            radius={(ITEM_SIZE * mapScale) / 2}
            x={0}
            y={0}
            scaleX={1 / mapScaleX}
            scaleY={1 / mapScaleY}
            onMouseUp={toggleUserStatus}
            onTap={toggleUserStatus}
          />
        </Layer>
      </Stage>
      <NeedsStatusPanel items={items} isShowing={showUserStatus && showUserStatusOnDrag} />
    </div>
  );
};

export default MapView;
