import createGenerateClassName from '@material-ui/core/styles/createGenerateClassName';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import React from 'react';
import JssProvider from 'react-jss/lib/JssProvider';
import theme from './theme';

const MaterialServerProvider = ({ children, sheetsRegistry }) => {
  const sheetsManager = new Map();
  return (
    <JssProvider generateClassName={createGenerateClassName({ productionPrefix: 'roomi-' })} registry={sheetsRegistry}>
      <MuiThemeProvider theme={createMuiTheme(theme)} sheetsManager={sheetsManager}>
        {children}
      </MuiThemeProvider>
    </JssProvider>
  );
};

export default MaterialServerProvider;
