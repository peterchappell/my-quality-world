// @flow
import React from 'react';
import { Link } from 'react-router-dom';

import AccountTreeIcon from '@material-ui/icons/AccountTree';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PersonIcon from '@material-ui/icons/Person';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';

const AppNav = (props) => {
  const {
    navValue,
    navChangeHandler,
  } = props;

  return (
    <BottomNavigation showLabels component="nav" value={navValue}>
      <BottomNavigationAction
        component={Link}
        to="/"
        label="Home"
        value="home"
        selected={navValue === 'home'}
        icon={<PersonIcon />}
        onClick={() => navChangeHandler('home')}
      />
      <BottomNavigationAction
        component={Link}
        to="/cards"
        label="Cards"
        value="cards"
        selected={navValue === 'cards'}
        icon={<ViewCarouselIcon />}
        onClick={() => navChangeHandler('cards')}
      />
      <BottomNavigationAction
        component={Link}
        to="/map"
        label="Map"
        value="map"
        selected={navValue === 'map'}
        icon={<AccountTreeIcon />}
        onClick={() => navChangeHandler('map')}
      />
    </BottomNavigation>
  );
};

export default AppNav;
