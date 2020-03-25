import {
  SEARCH_MOVIE_START,
  SEARCH_MOVIE_ERROR,
  SEARCH_MOVIE_COMPLETE
} from '../../consts/actionTypes';

export const searchMovie = payload => ({
  type: SEARCH_MOVIE_START,
  payload
});
