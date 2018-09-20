import withStyles from '@material-ui/core/styles/withStyles';
import React, { Fragment, PureComponent } from 'react';
import layoutStyles from './layout.styles';

@withStyles(layoutStyles)
class Layout extends PureComponent {
  // Remove the server-side injected CSS.
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    return (
      <Fragment>
        <div>THIS IS HEADER LAYOUT</div>
        {this.props.children}
        <div>THIS IS FOOTER LAYOUT</div>
      </Fragment>
    );
  }
}

export default Layout;
