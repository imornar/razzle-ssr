import { INC, SET } from '../types/counter-types';

const DEFAULT_STATE = 0;
const counterReducer = (state = DEFAULT_STATE, { type, payload } = {}) => {
  if (type === INC) return state + 1;
  if (type === SET) return payload;
  return state;
};

export default counterReducer;
