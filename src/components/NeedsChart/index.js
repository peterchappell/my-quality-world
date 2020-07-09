import React from 'react';

import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  circleContainer: {
    position: 'relative',
  },
  background: {
    color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  value: {
    animationDuration: '550ms',
    position: 'absolute',
    left: 0,
  },
  valueCircle: {
    strokeLinecap: 'round',
    color: ({ colour }) => colour,
  },
  outerContainer: {
    display: 'inline-flex',
  },
  label: {
    display: 'block',
    fontSize: ({ type }) => (type === 'mini' ? '0.6rem' : '0.75rem'),
  },
}));

const NeedsChart = (props) => {
  const {
    value,
    label,
    // eslint-disable-next-line no-unused-vars
    colour,
    type,
    hideValue,
  } = props;

  const classes = useStyles(props);

  return (
    <>
      <Box position="relative" className={classes.outerContainer}>
        <div className={classes.circleContainer}>
          <CircularProgress
            variant="static"
            value={100}
            size={type === 'mini' ? 20 : 60}
            thickness={4}
            className={classes.background}
          />
          <CircularProgress
            variant="static"
            value={value}
            size={type === 'mini' ? 20 : 60}
            thickness={4}
            className={classes.value}
            classes={{
              circle: classes.valueCircle,
            }}
          />
        </div>
        { !hideValue && (
          <Box
            top={0}
            left={0}
            bottom={0}
            right={0}
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="caption" component="div" color="textSecondary">
              {`${Math.round(value)}%`}
            </Typography>
          </Box>
        )}
      </Box>
      {label && (
        <Typography variant="caption" className={classes.label}>
          {label}
        </Typography>
      )}
    </>
  );
};

export default NeedsChart;
