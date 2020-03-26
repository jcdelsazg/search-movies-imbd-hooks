import React, { useEffect } from 'react';
import queryString from 'query-string';
import { Container, CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { searchMovie } from '../../redux/actions/search';
import { movieResults, isSearchLoading } from '../../redux/selectors';
import MovieResult from '../../components/movieResult';

export default function Results({ location }) {
  const dispatch = useDispatch();
  const movies = useSelector(state => movieResults(state));
  const isLoading = useSelector(state => isSearchLoading(state));
  useEffect(() => {
    const { movieName } = queryString.parse(location.search);
    if (movieName && !movies) {
      dispatch(searchMovie({ movieName }));
    }
  });

  const renderMovies = () => {
    if (movies) {
      return movies.map((movie, index) => (
        <MovieResult key={index} {...movie} />
      ));
    } else if (isLoading) {
      return <CircularProgress size={100} color="primary" />;
    }

    return <div />;
  };

  return <Container>{renderMovies()}</Container>;
}
