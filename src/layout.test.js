import Layout from './layout';
import React from 'react';
import ReactDOM from 'react-dom';
import MemoryRouter from 'react-router-dom/MemoryRouter';

describe('<Layout />', () => {
  test('renders without exploding', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>,
      div
    );
  });
});
