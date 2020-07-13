import React, { useState, useEffect } from 'react';

import Container from '@material-ui/core/Container';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import {
  Route,
  Switch,
  useParams,
  useHistory,
} from 'react-router-dom';

import db, { tableName } from 'utils/db';
import theme from 'utils/muiTheme';
import AppAdd from 'components/AppAdd';
import AppHeader from 'components/AppHeader';
import ItemCards from 'components/ItemCards';
import AppNav from 'components/AppNav';
import Home from 'components/Home';
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
    flexBasis: '100%',
    overflowY: 'auto',
    position: 'relative',
  },
  loading: {
    color: theme.palette.grey[500],
    left: 0,
    position: 'absolute',
    right: 0,
    textAlign: 'center',
    top: '30%',
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
  const [currentNavValue, setCurrentNavValue] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const history = useHistory();

  const addItem = (itemData) => {
    const newItem = {
      ...NEW_ITEM,
      image: itemData,
      imageRatio: 3 / 4, // TODO: Do this better
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
        history.push(`/edit/${id}`);
      });
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
  };

  const deleteItem = (itemId) => {
    const updatedItems = [
      ...items,
    ];
    const indexOfItemToRemove = updatedItems.findIndex((item) => item.id === itemId);
    updatedItems.splice(indexOfItemToRemove, 1);
    setItems(updatedItems);
    setCurrentItemIndex(0);
    db.table(tableName).delete(itemId);
  };

  const RenderDetails = () => {
    const { itemId } = useParams();
    const editingItem = items.find((item) => item.id === parseInt(itemId, 10));
    if (editingItem) {
      return (
        <ItemDetails
          saveHandler={saveItem}
          deleteHandler={deleteItem}
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
        setIsLoaded(true);
        setItems(storedItems);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <section className={classes.appContainer}>
        <AppHeader />
        <Container
          component="main"
          className={classes.mainContainer}
          maxWidth={false}
          disableGutters
        >
          { isLoaded ? (
            <Switch>
              <Route path="/new">
                <ItemAdd saveHandler={addItem} />
              </Route>
              <Route path="/edit/:itemId">
                <RenderDetails />
              </Route>
              <Route path="/map">
                <MapView items={items} handleSaveItem={saveItem} />
                <AppAdd />
              </Route>
              <Route path="/cards">
                <ItemCards
                  items={items}
                  itemIndex={currentItemIndex}
                />
                <AppAdd />
              </Route>
              <Route path="/">
                <Home items={items} />
                <AppAdd />
              </Route>
            </Switch>
          ) : (
            <div className={classes.loading}>Loading...</div>
          )}
        </Container>
        <AppNav
          navValue={currentNavValue}
          navChangeHandler={setCurrentNavValue}
        />
      </section>
    </ThemeProvider>
  );
};

export default App;
