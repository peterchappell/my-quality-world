import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';

import { makeStyles, createStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

import getCroppedImg from './cropImage';

const ASPECT = 4 / 3;
const WIDTH = 800;

const useStyles = makeStyles((theme) => createStyles({
  fileInput: {
    display: 'none',
  },
  upload: {
    marginTop: theme.spacing(1),
  },
  uploadContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: [[theme.spacing(2), 0]],
  },
  cropContainer: {
    backgroundColor: '#fff',
    flex: [[1, 0, '220px']],
    marginTop: theme.spacing(1),
    position: 'relative',
  },
  zoomControls: {
    padding: theme.spacing(1),
  },
  actions: {
    padding: theme.spacing(1),
  },
  loadingBackdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function AppAdd(props) {
  const {
    saveHandler,
  } = props;

  const classes = useStyles();
  const [fileUpload, setFileUpload] = useState();
  const [croppedAreaPixels, setCroppedAreaPixels] = useState();
  const [isCropping, setIsCropping] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const onCropComplete = useCallback((croppedArea, currentCroppedAreaPixels) => {
    setCroppedAreaPixels(currentCroppedAreaPixels);
  }, []);

  const handleImageSelection = (event) => {
    const fileReader = new FileReader();
    const file = event.target.files[0];
    fileReader.onload = (upload) => {
      setFileUpload(upload.target.result);
    };
    fileReader.readAsDataURL(file);
  };

  const cancelImage = () => {
    setFileUpload(null);
  };

  const cropImageAndSave = async () => {
    setIsCropping(true);
    const imgToSave = await getCroppedImg(
      fileUpload,
      croppedAreaPixels,
      0,
      {
        width: WIDTH,
        aspect: ASPECT,
      },
    );
    setIsCropping(false);
    saveHandler(imgToSave);
  };

  return (
    <>
      <Container disableGutters>
        <div className={classes.uploadContainer}>
          { !fileUpload && (
            <>
              <Typography variant="body1" component="p" gutterBottom>
                Select a photo to add to your quality world.
              </Typography>
              <label htmlFor="file_upload" className={classes.upload}>
                <Button variant="contained" color="primary" component="span">
                  Select Photo
                </Button>
                <input
                  accept="image/*"
                  className={classes.fileInput}
                  id="file_upload"
                  type="file"
                  onChange={handleImageSelection}
                  encType="multipart/form-data"
                />
              </label>
            </>
          )}
          { fileUpload && (
            <>
              <div>
                <Typography variant="body1" component="p" gutterBottom>
                  Now you can crop your photo so that it fits nicely in the box.
                  Click the okay button when you&apos;re done.
                </Typography>
              </div>
              <div className={classes.cropContainer}>
                <Cropper
                  image={fileUpload}
                  crop={crop}
                  zoom={zoom}
                  aspect={ASPECT}
                  onCropChange={setCrop}
                  onCropComplete={onCropComplete}
                  onZoomChange={setZoom}
                />
              </div>
              <div className={classes.zoomControls}>
                <Slider
                  value={zoom}
                  min={1}
                  max={3}
                  step={0.1}
                  aria-labelledby="Zoom"
                  onChange={(e, newZoom) => setZoom(newZoom)}
                />
              </div>
              <div className={classes.actions}>
                <Button variant="contained" color="primary" onClick={cropImageAndSave}>
                  Okay
                </Button>
                <Button onClick={cancelImage}>
                  Cancel
                </Button>
              </div>
            </>
          )}
        </div>
      </Container>
      <Backdrop className={classes.loadingBackdrop} open={isCropping}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}
