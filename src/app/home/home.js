import Button from '@material-ui/core/Button/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import Delete from '@material-ui/icons/Delete';
import React from 'react';
import { connect } from 'react-redux';
import Link from 'react-router-dom/Link';
import { getAction, incAction } from '../../common/actions/counter-actions';
import Logo from '../../react.svg';
import Bus from '../../bus.svg';
import homeStyles from './home.styles';
// import sagas from '../../common/sagas';

// const sagaResolve = (store) => new Promise((resolve) => {
//   return store.runSaga(sagas).done.then(() => {
//     return resolve();
//   });
// });
// const delay = () => new Promise(resolve => setTimeout(() => resolve(), 2300));

@connect(state => ({count: state.count}), { incAction, getAction })
@withStyles(homeStyles)
class Home extends React.Component {
  static async getInitialProps({ store }) {
    // find a way to wait for all sagas to finish
  }

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
          <br/>
          <Link to="/about">About</Link>
        </ul>
      </div>
    );
  }
}

export default Home;
