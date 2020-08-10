import React from 'react';
import { useSelector } from 'react-redux';

import { Grid, Typography } from '@material-ui/core';
import { useStyles } from './styles';

export default function Header() {
  const classes = useStyles();
  const favorites = useSelector((state) => state.favorites);
  return (
    <Grid
      container
      justify="center"
      alignContent="center"
      className={classes.header}
    >
      <Typography variant="h5" className={classes.text}>
        Você tem {favorites.data.length} favoritos.
      </Typography>
    </Grid>
  );
}
