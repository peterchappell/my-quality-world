// @flow
import React from 'react';
import { Link } from 'react-router-dom';

import AccountTreeIcon from '@material-ui/icons/AccountTree';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';

const AppNav = (props) => {
  const {
    navValue,
  } = props;

  return (
    <BottomNavigation showLabels component="nav" value={navValue}>
      <BottomNavigationAction
        component={Link}
        to="/"
        label="Cards"
        value="cards"
        icon={<ViewCarouselIcon />}
      />
      <BottomNavigationAction label="Map" value="map" icon={<AccountTreeIcon />} />
    </BottomNavigation>
  );
};

export default AppNav;
