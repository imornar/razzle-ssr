import { asyncComponent } from '@jaredpalmer/after';
import Home from '../../app/home/home'

export default [{
  path: '/',
  exact: true,
  component: Home,
}, {
  path: '/about',
  exact: true,
  component: asyncComponent({
    loader: () => import('../../app/about/about')
  }),
}, {
  path: '/xxx',
  exact: true,
  component: asyncComponent({
    loader: () => import('../../app/about/about')
  }),
}];
