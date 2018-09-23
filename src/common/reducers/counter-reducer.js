import { ERR, GET, INC, SET } from '../types/counter-types';

const DEFAULT_STATE = {
  fetched: false,
  data: { count: 0 }
};
const counterReducer = (state = DEFAULT_STATE, { type, payload } = {}) => {
  if (type === GET) {
    return { ...state, fetching: true, fetched: false };
  }
  if (type === INC) {
    return { ...state, data: { ...state.data, count: state.data.count + 1 } };
  }
  if (type === ERR) {
    return { fetched: true, fetching: false, data: null, error: payload };
  }
  if (type === SET) {
    return { fetched: true, fetching: false,  data: { count: payload }, error: null };
  }
  return state;
};

export default counterReducer;
