const homeStyles = () => ({
  home: {
    textAlign: 'center'
  },
  '@keyframes Home-logo-spin': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' }
  },
  homeLogo: {
    animation: 'Home-logo-spin infinite 20s linear',
    height: 80
  },
  homeHeader: {
    backgroundColor: '#9a9a9a',
    height: 150,
    padding: 20,
    color: 'white'
  },
  homeIntro: {
    fontSize: 'large',
  },
  homeResources: {
    listStyle: 'none',
    '& > li': {
      display: 'inline-block',
      padding: '1rem'
    }
  }
});

export default homeStyles;
