import React from 'react';
import { useHistory } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    alignItems: 'center',
    display: 'flex',
    margin: [[0, 'auto']],
  },
  itemImage: {
    width: '100%',
  },
  card: {
    backgroundColor: '#fff',
    margin: [[theme.spacing(2), 'auto']],
  },
  untitled: {
    color: '#999',
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
          <Container maxWidth="sm" disableGutters>
            <Card key={`card_${item.id}`} className={classes.card} raised>
              { item.image && (
                <img
                  src={item.image}
                  alt={`${item.name}`}
                  className={classes.itemImage}
                />
              )}
              <CardContent>
                <Typography gutterBottom variant="h5" component="h3" className={!item.name && classes.untitled}>
                  {item.name || 'Untitled'}
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
          </Container>
        ))}
      </SwipeableViews>
    </div>
  );
};

export default AppMain;
