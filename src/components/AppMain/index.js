import React from 'react';
import { useHistory } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    alignItems: 'center',
    display: 'flex',
    margin: [[0, 'auto']],
  },
  itemImage: {
    maxWidth: '500px',
    width: '100%',
  },
  card: {
    backgroundColor: '#fff',
    margin: [[theme.spacing(2), 'auto']],
  },
}));

const AppMain = (props) => {
  const {
    items,
    itemIndex,
    onSlide,
  } = props;

  const classes = useStyles();
  const history = useHistory();

  const updateIndex = (newIndex) => {
    onSlide(newIndex);
  };

  const editItem = (itemId) => {
    history.push(`/edit/${itemId}`);
  };

  return (
    <div className={classes.mainContainer}>
      <SwipeableViews
        enableMouseEvents
        index={itemIndex}
        onChangeIndex={updateIndex}
        slideStyle={{ display: 'flex', alignItems: 'center' }}
      >
        { items.map((item) => (
          <Card key={`card_${item.id}`} className={classes.card} raised>
            { item.image && (
              <img
                src={item.image}
                alt={`${item.name}`}
                className={classes.itemImage}
              />
            )}
            <CardContent>
              <Typography gutterBottom variant="h5" component="h3">
                Name
                {item.name}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => {
                  editItem(item.id);
                }}
              >
                Edit this item
              </Button>
            </CardActions>
          </Card>
        ))}
      </SwipeableViews>
    </div>
  );
};

export default AppMain;
