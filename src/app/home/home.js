import Button from '@material-ui/core/Button/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import Delete from '@material-ui/icons/Delete';
import React from 'react';
import { connect } from 'react-redux';
import Link from 'react-router-dom/Link';
import { initAction, incAction } from '../../common/actions/counter-actions';
import { getCountSelector } from '../../common/selectors/counter-selector';
import { store } from '../../common/store/configure-store';
import Logo from '../../react.svg';
import Bus from '../../bus.svg';
import homeStyles from './home.styles';
import messages from './home.text';
import { FormattedMessage } from 'react-intl';

@connect(state => ({ count: getCountSelector(state) }), { incAction })
@withStyles(homeStyles)
class Home extends React.Component {
  static async getInitialProps({ isServer }) {
    const tasks = [initAction(), { type: 'children' }];
    await store.execSagaTasks(isServer, tasks);
  }

  render() {
    const { classes, count, incAction } = this.props;
    return (
      <div className={classes.home}>
        <div className={classes.homeHeader}>
          <Logo className={classes.homeLogo}/>
          <h2>Welcome to Razzle: {count}</h2>
        </div>
        <FormattedMessage {...messages.home}/>
        <Delete style={{ fontSize: 40 }}/> Material icon.
        <Bus height={50} width={50} className={classes.busSvg}/> custom svg
        <ul className={classes.homeResources}>
          <Button variant="contained" color="primary" onClick={incAction}>
            Increment
          </Button>
          <br/>
          <Link to="/about">About</Link>
        </ul>
      </div>
    );
  }
}

export default Home;
