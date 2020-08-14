import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  dialogContent: {
    margin: '0 auto',
    maxWidth: '700px',
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(5),
    },
  },
  quote: {
    borderLeft: '5px solid #ccc',
    margin: [[theme.spacing(2), 0]],
    paddingLeft: theme.spacing(2),
  },
  section: {
    flexDirection: 'column',
  },
  content: {
    backgroundColor: '#f5f5f5',
  },
}));

const Transition = React.forwardRef((props, ref) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Slide direction="left" ref={ref} {...props} />
));

const InfoPanel = (props) => {
  const {
    isOpen,
    closeHandler,
  } = props;
  const classes = useStyles();

  return (
    <Dialog
      fullScreen
      open={isOpen}
      scroll="paper"
      aria-labelledby="dialog-title-help"
      TransitionComponent={Transition}
    >
      <DialogTitle id="dialog-title-help">
        <IconButton edge="start" color="inherit" onClick={closeHandler} aria-label="close">
          <CloseIcon />
        </IconButton>
        Help
      </DialogTitle>
      <DialogContent dividers className={classes.content}>
        <DialogContentText component="div">
          <div className={classes.dialogContent}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="help-about"
              >
                <Typography variant="h6" component="h3">
                  What is a quality world?
                </Typography>
              </AccordionSummary>
              <AccordionDetails id="help-about" className={classes.section}>
                <blockquote className={classes.quote}>
                  <Typography variant="body1" component="p" gutterBottom>
                    Dr. Glasser describes the Quality World as a &quot;personal picture
                    album&quot; of all the people, things, ideas, and ideals that we have
                    discovered increase the quality of our lives.
                  </Typography>
                  <Typography variant="body2" component="footer">
                    <a
                      href="https://www.brucedavenport.com/quality-world.html"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Bruce Davenport, An Introduction to Choice Theory
                    </a>
                  </Typography>
                </blockquote>
                <Typography variant="body1" component="p" gutterBottom>
                  Visualising our own quality world helps us think the people, things and
                  activities in our lives that we really value.
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                  We can also think about how our quality world items help us meet our
                  basic needs in life.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="help-use"
                id="about-header"
              >
                <Typography variant="h6" component="h3">
                  How do I use this tool?
                </Typography>
              </AccordionSummary>
              <AccordionDetails id="help-use" className={classes.section}>
                <Typography variant="body1" component="p" gutterBottom>
                  Click the big plus button in the bottom right of the screen to add
                  items to your quality world.
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                  For each item you add, upload an image and then spend a moment
                  indicating how that item helps you meet your basic needs.
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                  You can then review your quality world items by flicking through
                  them like cards or by using the map view.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="help-use"
                id="about-header"
              >
                <Typography variant="h6" component="h3">
                  What is the map view?
                </Typography>
              </AccordionSummary>
              <AccordionDetails id="help-use" className={classes.section}>
                <Typography variant="body1" component="p" gutterBottom>
                  Your quality world is always changing. Sometimes we&apos;re not able to enjoy
                  items in our quality world for various reasons. And some of our other quality
                  world items might play a very big part in our lives right now.
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                  The map view allows you to move items further away or close to you to reflect
                  how big a part those items play in your life right now.
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                  As you move items around on the map, you can see the effect they have on how
                  your basic needs are being met.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="help-use"
                id="about-header"
              >
                <Typography variant="h6" component="h3">
                  Privacy
                </Typography>
              </AccordionSummary>
              <AccordionDetails id="help-use" className={classes.section}>
                <Typography variant="body1" component="p" gutterBottom>
                  All the data you add to this tool is only stored on your device. It is
                  not uploaded to the internet.
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                  Only people who have access to your device will be able to see your
                  quality world.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeHandler} color="primary" autoFocus data-testid="close_button_text">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InfoPanel;
