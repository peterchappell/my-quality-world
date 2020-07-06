import React, { useState } from 'react';

import Container from '@material-ui/core/Container';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import {
  Route, Switch, useParams, useHistory,
} from 'react-router-dom';

import theme from 'utils/muiTheme';
import AppAdd from 'components/AppAdd';
import AppHeader from 'components/AppHeader';
import AppMain from 'components/AppMain';
import AppNav from 'components/AppNav';
import ItemAdd from 'components/ItemAdd';
import ItemDetails from 'components/ItemDetails';

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
  level: 0,
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
      name: `newItem ${items.length}`,
    };
    setItems([
      ...items,
      newItem,
    ]);
    setCurrentItemIndex(items.length);
    history.push('/');
  };

  const saveItem = (itemData, itemIndex) => {
    const updatedItems = [
      ...items,
    ];
    updatedItems[itemIndex] = itemData;
    setItems(updatedItems);
    setCurrentItemIndex(itemIndex);
    history.push('/');
  };

  function RenderDetails() {
    const { itemIndex } = useParams();
    return (
      <ItemDetails
        saveHandler={saveItem}
        item={items[itemIndex]}
        itemIndex={parseInt(itemIndex, 10)}
      />
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <section className={classes.appContainer}>
        <AppHeader />
        <Container maxWidth="md" component="main" className={classes.mainContainer}>
          <Switch>
            <Route path="/new">
              <ItemAdd saveHandler={addItem} />
            </Route>
            <Route path="/edit/:itemIndex">
              <RenderDetails />
            </Route>
            <Route path="*">
              <AppMain items={items} itemIndex={currentItemIndex} />
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
