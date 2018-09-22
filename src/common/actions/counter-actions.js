import { INC, SET, GET } from '../types/counter-types';

export const incAction = () => ({
  type: INC
});

export const setAction = (payload) => ({
  type: SET,
  payload
});

export const getAction = () => ({
  type: GET
});
