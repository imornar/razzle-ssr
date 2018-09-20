import { INC } from '../types/counter-types';

const DEFAULT_STATE = 7;
const counterReducer = (state = DEFAULT_STATE, { type } = {}) => {
  if (type === INC) return state + 1;
  return state;
};

export default counterReducer;
