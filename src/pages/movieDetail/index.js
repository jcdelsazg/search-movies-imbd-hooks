import React, { useEffect } from 'react';
import {
  Container,
  Card,
  Grid,
  Typography,
  CircularProgress
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { searchMovieByID } from '../../redux/actions/search';
import { movieDetails as movieDetailsSelector } from '../../redux/selectors';
import styles from './styles';

function MovieDetail({ match }) {
  const dispatch = useDispatch();
  const movieDetails = useSelector(state => movieDetailsSelector(state));
  const classes = styles();

  useEffect(() => {
    const movieID = match.params.id;
    if (!movieDetails || (movieDetails && movieDetails.imdbID !== movieID)) {
      dispatch(searchMovieByID({ movieID }));
    }
  });

  if (!movieDetails) {
    return <CircularProgress size={100} color="primary" />;
  }

  return (
    <Container>
      <Typography variant="h3" color="primary" className={classes.title}>
        {movieDetails.Title}
      </Typography>
      <Grid container>
        <Grid item>
          <img src={movieDetails.Poster} alt={movieDetails.Title} />
        </Grid>
        <Grid item>
          <Typography>
            <strong>Actors:</strong> {movieDetails.Actors}
          </Typography>
          <Typography>
            <strong>Director:</strong> {movieDetails.Director}
          </Typography>
          <Typography>
            <strong>Rating:</strong> {movieDetails.imdbRating}
          </Typography>
          <Typography>
            <strong>Date Release:</strong> {movieDetails.Released}
          </Typography>
          <Typography>
            <strong>Genre:</strong> {movieDetails.Genre}
          </Typography>
          <Typography>
            <strong>Plot:</strong> {movieDetails.Plot}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MovieDetail;
