import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  TextField,
  Typography,
  CardMedia,
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  Grid,
} from '@material-ui/core';
import { FavoriteActions } from '../../store/modules/favorites/favoritesDucks';
import { useStyles } from './styles';
import Loading from '../../components/Loading';

export default function Home() {
  const classes = useStyles();

  const [repositoryInput, setRepositoryInput] = useState('');
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  function handleInputChange(e) {
    setRepositoryInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(FavoriteActions.favoriteRequest(repositoryInput));
    setRepositoryInput('');
  }

  return (
    <>
      <Grid
        container
        justify="center"
        alignContent="center"
        direction="column"
        className={classes.container}
      >
        <Grid item>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Usuário/Repositório"
              variant="outlined"
              value={repositoryInput}
              onChange={handleInputChange}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.buttonStyle}
            >
              Adicionar
            </Button>
            {favorites.loading && <Loading />}
            <Grid container justify="center" alignContent="center">
              {!!favorites.error && (
                <Typography className={classes.errorStyle}>
                  {favorites.error}
                </Typography>
              )}
            </Grid>
          </form>
        </Grid>
      </Grid>

      <Grid item className={classes.containerCard}>
        <Grid container justify="center" alignContent="center" spacing={2}>
          {favorites &&
            favorites.data.map((favorite) => (
              <Card key={favorite.id} style={{ maxWidth: 350 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="350"
                    image={favorite.avatar}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {favorite.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {favorite.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    {favorite.url}
                  </Button>
                </CardActions>
              </Card>
            ))}
        </Grid>
      </Grid>
    </>
  );
}
