import React from 'react';
import { Card, Grid, Typography, Button } from '@material-ui/core';
import { withRouter } from 'react-router-dom';

import style from './styles';

function MovieResult({ Title, Poster, Type, Year, imdbID, history }) {
  const classes = style();

  const handleSeeMoreClick = () => {
    history.push(`/movie/${imdbID}`);
  };
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
          <Button
            color="primary"
            variant="contained"
            onClick={handleSeeMoreClick}
          >
            Ver mas
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
}

export default withRouter(MovieResult);
