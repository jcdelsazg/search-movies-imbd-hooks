import React from 'react';
import { Card, Grid, Typography, Button } from '@material-ui/core';

import style from './styles';

export default function MovieResult({ Title, Poster, Type, Year, imdbID }) {
  const classes = style();
  return (
    <Card className={classes.cardContainer}>
      <Grid container>
        <Grid item>
          <img alt={Title} src={Poster} className={classes.poster} />
        </Grid>
        <Grid item className={classes.titlesContainer}>
          <Typography>{Title}</Typography>
          <Typography>{Type}</Typography>
          <Typography>{Year}</Typography>
          <Button color="primary" variant="contained">
            Ver mas
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}
