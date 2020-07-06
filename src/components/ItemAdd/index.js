import React, { useState, useEffect } from 'react';

import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => createStyles({
  fileInput: {
    display: 'none',
  },
  uploadContainer: {
    margin: theme.spacing(2),
  },
}));

export default function AppAdd(props) {
  const {
    saveHandler,
  } = props;

  const classes = useStyles();
  const [fileUpload, setFileUpload] = useState();

  const handleImage = (event) => {
    const fileReader = new FileReader();
    const file = event.target.files[0];
    fileReader.onload = (upload) => {
      setFileUpload(upload.target.result);
    };
    fileReader.readAsDataURL(file);
  };

  useEffect(() => {
    if (fileUpload) {
      saveHandler(fileUpload);
    }
  }, [fileUpload]);

  return (
    <div className={classes.uploadContainer}>
      <label htmlFor="file_upload">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
        <input
          accept="image/*"
          className={classes.fileInput}
          id="file_upload"
          type="file"
          onChange={handleImage}
          encType="multipart/form-data"
        />
      </label>
    </div>
  );
}
