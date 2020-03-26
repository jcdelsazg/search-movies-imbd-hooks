import {
  SEARCH_MOVIE_START,
  SEARCH_MOVIE_ERROR,
  SEARCH_MOVIE_COMPLETE
} from '../../consts/actionTypes';

//import { get } from 'lodash';

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE_START:
      return { ...state, isLoading: true, movies: null };
    //break;
    case SEARCH_MOVIE_ERROR:
      console.log('action de error' + action);
      return { ...state, isLoading: false, movies: null };
    //break;
    case SEARCH_MOVIE_COMPLETE:
      console.log('action de complete' + action);
      return { ...state, isLoading: false, movieResults: action.results.data };
    //break;

    default:
      return { ...state };
    //break;
  }
}
