import React, { useState, useEffect } from 'react';

import Container from '@material-ui/core/Container';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import {
  Route, Switch, useParams, useHistory,
} from 'react-router-dom';

import db, { tableName } from 'utils/db';
import theme from 'utils/muiTheme';
import AppAdd from 'components/AppAdd';
import AppHeader from 'components/AppHeader';
import AppMain from 'components/AppMain';
import AppNav from 'components/AppNav';
import ItemAdd from 'components/ItemAdd';
import ItemDetails from 'components/ItemDetails';
import MapView from 'components/MapView';

const useStyles = makeStyles(() => ({
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between',
  },
  mainContainer: {
    height: '100%',
    overflowY: 'auto',
    position: 'relative',
  },
}));

const NEW_ITEM = {
  name: '',
  image: null,
  physiology: 0,
  loveAndBelonging: 0,
  power: 0,
  fun: 0,
  freedom: 0,
  level: 5,
};

const App = () => {
  const classes = useStyles();
  const [items, setItems] = useState([]);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const history = useHistory();

  const addItem = (itemData) => {
    const newItem = {
      ...NEW_ITEM,
      image: itemData,
      name: '',
    };
    db.table(tableName)
      .add(newItem)
      .then((id) => {
        setItems([
          ...items,
          {
            ...newItem,
            id,
          },
        ]);
        setCurrentItemIndex(items.length);
      });
    history.push('/');
  };

  const saveItem = (itemData) => {
    const updatedItems = [
      ...items,
    ];
    const indexOfUpdate = updatedItems.findIndex((item) => item.id === itemData.id);
    updatedItems[indexOfUpdate] = itemData;
    setItems(updatedItems);
    setCurrentItemIndex(indexOfUpdate);
    db.table(tableName).update(itemData.id, itemData);
    history.push('/');
  };

  const handleCardSlide = (slideToIndex) => {
    setCurrentItemIndex(slideToIndex);
  };

  const RenderDetails = () => {
    const { itemId } = useParams();
    const editingItem = items.find((item) => item.id === parseInt(itemId, 10));
    if (editingItem) {
      return (
        <ItemDetails
          saveHandler={saveItem}
          item={editingItem}
        />
      );
    }
    return (
      <p>That item does not exist...</p>
    );
  };

  useEffect(() => {
    db.table(tableName)
      .toArray()
      .then((storedItems) => {
        setItems(storedItems);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <section className={classes.appContainer}>
        <AppHeader />
        <Container maxWidth="md" component="main" className={classes.mainContainer}>
          <Switch>
            <Route path="/new">
              <ItemAdd saveHandler={addItem} />
            </Route>
            <Route path="/edit/:itemId">
              <RenderDetails />
            </Route>
            <Route path="/map">
              <MapView items={items} />
            </Route>
            <Route path="*">
              <AppMain
                items={items}
                itemIndex={currentItemIndex}
                onSlide={handleCardSlide}
              />
              <p>
                {currentItemIndex + 1}
                /
                {`${items.length}`}
              </p>
              <AppAdd />
            </Route>
          </Switch>
        </Container>
        <AppNav navValue="cards" />
      </section>
    </ThemeProvider>
  );
};

export default App;
