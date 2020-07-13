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

import MapInstructions from 'components/MapInstructions';
import MapNeedsStatusPanel from 'components/MapNeedsStatusPanel';
import { MAX_LEVEL } from 'utils/constants';
import Typography from '@material-ui/core/Typography';

const CANVAS_HEIGHT = 1000;
const CANVAS_WIDTH = 1000;
const ITEM_SIZE = 100;

const useStyles = makeStyles((theme) => ({
  mapContainer: {
    display: 'flex',
    height: '100%',
    width: '100%',
  },
  map: {
    position: 'relative',
  },
  noItems: {
    left: 0,
    padding: [[theme.spacing(4), theme.spacing(2), theme.spacing(2)]],
    position: 'absolute',
    right: 0,
    textAlign: 'center',
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

  const saveItem = (item, position) => {
    const updatedItem = {
      ...item,
      posX: position.x,
      posY: position.y,
      level: calculateNewLevel(position.x, position.y),
    };
    handleSaveItem(updatedItem);
  };

  const toggleUserStatus = () => {
    if (!items.length) {
      return;
    }
    setShowUserStatus(!showUserStatus);
  };

  const handleUserStatusOnDrag = (isDragging) => {
    if (showUserStatus) {
      setShowUserStatusOnDrag(!isDragging);
    }
  };

  const getItemPosition = (item) => {
    if (item.posX && item.posY) {
      return {
        x: item.posX,
        y: item.posY,
      };
    }
    const angle = Math.random() * Math.PI * 2;
    const radiusFromCentre = 300;
    const position = {
      x: Math.cos(angle) * radiusFromCentre,
      y: Math.sin(angle) * radiusFromCentre,
    };
    saveItem(item, position);
    return position;
  };

  const renderItem = (item) => {
    const imgEl = document.createElement('img');
    imgEl.src = item.image;
    const itemHeight = item.imageRatio * 100 * mapScaleX;
    const itemPosition = getItemPosition(item);
    return (
      <React.Fragment key={`map_item_${item.id}`}>
        <Line
          stroke="#ccc"
          strokeWidth={2}
          points={[
            0,
            0,
            itemPosition.x,
            itemPosition.y,
          ]}
        />
        <Rect
          cornerRadius={4}
          x={itemPosition.x}
          y={itemPosition.y}
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
            saveItem(item, {
              x: event.currentTarget.attrs.x,
              y: event.currentTarget.attrs.y,
            });
            handleUserStatusOnDrag(false);
          }}
          x={itemPosition.x}
          y={itemPosition.y}
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
      <MapInstructions
        numItems={items.length}
      />
      {items.length ? (
        <MapNeedsStatusPanel
          items={items}
          isShowing={showUserStatus && showUserStatusOnDrag}
        />
      ) : (
        <div className={classes.noItems}>
          <Typography variant="body1" component="p">
            Your Quality World images will be shown here as items
            that you can move around and organise...
          </Typography>
        </div>
      )}
    </div>
  );
};

export default MapView;
