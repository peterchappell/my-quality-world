import React, { useState, useEffect } from 'react';
import ForceGraph3D from 'react-force-graph-2d';

const ME = {
  id: 'me',
  group: 1,
};

const MapView = (props) => {
  const {
    items,
  } = props;

  const [mapData, setMapData] = useState({
    nodes: [ME],
    links: [],
  });

  const dragNodeHandler = (node, coords) => {
    console.log('node', node, coords);
  };

  const dragNodeEndHandler = (node) => {
    console.log('node end drag', node);
    if (node.id === ME.id) {
      console.log('DO NOT DRAG ME');
      // eslint-disable-next-line no-param-reassign
      node.fx = 0;
      // eslint-disable-next-line no-param-reassign
      node.fy = 0;
      // eslint-disable-next-line no-param-reassign
      node.fz = 0;
    } else {
      // eslint-disable-next-line no-param-reassign
      node.fx = node.x;
      // eslint-disable-next-line no-param-reassign
      node.fy = node.y;
      // eslint-disable-next-line no-param-reassign
      node.fz = node.z;
    }
  };

  useEffect(() => {
    const transformedItems = {
      nodes: [ME],
      links: [],
    };
    items.forEach((item, index) => {
      transformedItems.nodes.push({
        id: item.id,
        group: index + 3,
      });
      transformedItems.links.push({
        source: item.id,
        target: ME.id,
        value: item.id,
      });
    });
    setMapData(transformedItems);
    console.log(JSON.stringify(mapData, null, 2));
  }, [items]);

  return (
    <div>
      <p>Map will go here...</p>
      <div style={{ border: '1px solid red', display: 'inline-block' }}>
        <ForceGraph3D
          height={300}
          width={300}
          graphData={mapData}
          nodeLabel="id"
          nodeAutoColorBy="group"
          onNodeDrag={dragNodeHandler}
          onNodeDragEnd={dragNodeEndHandler}
        />
      </div>
      <code>
        {JSON.stringify(mapData, null, 2)}
      </code>
    </div>
  );
};

export default MapView;
