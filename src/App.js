import { withStyles } from '@material-ui/core';
import React, { PureComponent } from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import appStyles from './app.styles';
import Home from './app/home/home';
import MaterialClientProvider from './material/material-client-provider';

@withStyles(appStyles)
class App extends PureComponent {
  // Remove the server-side injected CSS.
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    return (
      <MaterialClientProvider>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </MaterialClientProvider>
    );
  }
}

export default App;
