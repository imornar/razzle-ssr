import { withStyles, Button } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import React from 'react';
import { connect } from 'react-redux';
import { incAction } from '../../common/actions/counter-actions';
import Logo from '../../react.svg';
import Bus from '../../bus.svg';
import homeStyles from './home.styles';

@connect(state => ({count: state.count}), { incAction })
@withStyles(homeStyles)
class Home extends React.Component {
  render() {
    const { classes, count, incAction } = this.props;
    return (
      <div className={classes.home}>
        <div className={classes.homeHeader}>
          <Logo className={classes.homeLogo} />
          <h2>Welcome to Razzle: {count}</h2>
        </div>
        <Delete style={{ fontSize: 40 }}/> Material icon
        <Bus height={50} width={50} className={classes.busSvg}/> custom svg
        <ul className={classes.homeResources}>
          <Button variant="contained" color="primary" onClick={incAction}>
            Increment
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
