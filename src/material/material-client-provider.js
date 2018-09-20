import createGenerateClassName from '@material-ui/core/styles/createGenerateClassName';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import React from 'react';
import JssProvider from 'react-jss/lib/JssProvider';
import theme from './theme';

const MaterialClientProvider = ({ children }) => {
  return (
    <JssProvider generateClassName={createGenerateClassName({ productionPrefix: 'roomi-' })}>
      <MuiThemeProvider theme={createMuiTheme(theme)}>
        {children}
      </MuiThemeProvider>
    </JssProvider>
  );
};

export default MaterialClientProvider;
