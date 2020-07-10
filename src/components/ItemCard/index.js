import React from 'react';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
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

const ItemCard = (props) => {
  const {
    item,
  } = props;

  const classes = useStyles();
  const history = useHistory();

  const editItem = (itemId) => {
    history.push(`/edit/${itemId}`);
  };

  return (
    <Container maxWidth="sm">
      <Card className={classes.card} raised>
        { item.image && (
          <img
            src={item.image}
            alt={`${item.name}`}
            className={classes.itemImage}
          />
        )}
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="h3" className={!item.name && classes.untitled}>
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
  );
};

export default ItemCard;
