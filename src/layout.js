import withStyles from '@material-ui/core/styles/withStyles';
import React, { Fragment, Component } from 'react';
import Seo from './common/components/seo/seo.component';
import layoutStyles from './layout.styles';

@withStyles(layoutStyles)
class Layout extends Component {
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
        <Seo/>
        <div>THIS IS HEADER LAYOUT</div>
        {this.props.children}
        <div>THIS IS FOOTER LAYOUT</div>
      </Fragment>
    );
  }
}

export default Layout;
