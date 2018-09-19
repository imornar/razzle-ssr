import { withStyles, Button } from '@material-ui/core';
import React from 'react';
import Logo from '../../react.svg';
import homeStyles from './home.styles';

function decorator() {
  console.log('****** decorators working ******');
}

@decorator
@withStyles(homeStyles)
class Home extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.home}>
        <div className={classes.homeHeader}>
          <img src={Logo} className={classes.homeLogo} alt="logo" />
          <h2>Welcome to Razzle</h2>
        </div>
        <p className={classes.homeIntro}>
          To get started, edit <code>src/App.js</code> or{' '}
          <code>src/Home.js</code> and save to reload.
        </p>
        <ul className={classes.homeResources}>
          <Button variant="contained" color="primary">
            Material ui button
          </Button>
          <li>
            <a href="https://github.com/jaredpalmer/razzle">Docs</a>
          </li>
          <li>
            <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
          </li>
          <li>
            <a href="https://palmer.chat">Community Slack</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
