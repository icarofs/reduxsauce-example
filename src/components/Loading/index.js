/* eslint-disable react/prop-types */
import { Backdrop, CircularProgress } from '@material-ui/core';
import React from 'react';
import { useStyles } from './styles';

export default function Loading() {
  const classes = useStyles();

  return (
    <>
      <Backdrop className={classes.backdrop} open>
        <CircularProgress variant="indeterminate" color="inherit" />
      </Backdrop>
    </>
  );
}
