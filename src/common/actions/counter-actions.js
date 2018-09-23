import { INC, SET, GET, ERR, INIT } from '../types/counter-types';

export const incAction = () => ({
  type: INC
});

export const setAction = (payload) => ({
  type: SET,
  payload
});

export const errAction = (payload) => ({
  type: ERR,
  payload
});

export const getAction = () => ({
  type: GET
});

export const initAction = () => ({
  type: INIT
});
