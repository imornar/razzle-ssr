// import { createSelector } from 'reselect';

export const getCountSelector = state => state.count.data.count;
export const fetchedCountSelector = state => state.count.fetched;
