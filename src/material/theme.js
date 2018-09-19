import { roomiBlue, roomiGold, roomiRed } from './material-palettes';

export const roomiPrimaryPalette = roomiBlue;
export const roomiSecondaryPalette = roomiGold;
export const roomiErrorPalette = roomiRed;

const darkGray = '#9B9B9B';
const green = '#96BDA3';

export default {
  props: {
    MuiButtonBase: {
      disableRipple: true
    },
    MuiInput: {
      disableUnderline: true
    }
  },
  typography: {
    fontFamily: '"Avenir", "Roboto", "Arial", sans-serif',
    button: {
      fontFamily: '"Lovelo", "Avenir", "Roboto", sans-serif',
      fontSize: '20px',
      fontSizeSmall: '14px',
      fontWeight: 900
    }
  },
  utils: {
    shadeColor: (color, percent) => {
      let R = parseInt(color.substring(1, 3), 16);
      let G = parseInt(color.substring(3, 5), 16);
      let B = parseInt(color.substring(5, 7), 16);

      R = parseInt(R * (100 + percent) / 100, 10);
      G = parseInt(G * (100 + percent) / 100, 10);
      B = parseInt(B * (100 + percent) / 100, 10);

      R = (R < 255) ? R : 255;
      G = (G < 255) ? G : 255;
      B = (B < 255) ? B : 255;

      let RR = ((R.toString(16).length === 1) ? '0' + R.toString(16) : R.toString(16));
      let GG = ((G.toString(16).length === 1) ? '0' + G.toString(16) : G.toString(16));
      let BB = ((B.toString(16).length === 1) ? '0' + B.toString(16) : B.toString(16));

      return `#${RR}${GG}${BB}`;
    }
  },
  palette: {
    primary: roomiPrimaryPalette,
    secondary: {
      light: roomiSecondaryPalette[300],
      main: roomiSecondaryPalette[500],
      dark: roomiSecondaryPalette[700],
      ...roomiSecondaryPalette,
      contrastText: roomiSecondaryPalette.contrastText
    },
    error: roomiErrorPalette,
    common: {
      facebook: '#3b5998'
    },
    red: {
      primary: '#df6e4f',
      secondary: '#f6ad99'
    },
    background: {
      primary: '#f7f9ff',
      secondary: '#fcf6e3',
      error: '#fff6f4',
      errorBorder: '#f8ccc1',
      footer: '#f7f7f7'
    },
    green,
    darkGray
  },
  overrides: {
    MuiList: {
      padding: {
        paddingTop: 0,
        paddingBottom: 0
      }
    },
    MuiFormControlLabel: {
      root: {
        marginLeft: 0,
        marginRight: 0
      },
      labelPlacementStart: {
        '& $label': {
          marginLeft: 0,
          marginRight: 5
        }
      },
      label: {
        transition: 'color 0.3s ease-in-out',
        marginLeft: 5
      }
    },
    MuiListItem: {
      default: {
        paddingTop: 6,
        paddingBottom: 6
      }
    },
    MuiMenuItem: {
      root: {
        color: '#9e9e9e',
        '&:hover': {
          background: '#eff4ff'
        },
        '&$selected': {
          backgroundColor: '#eff4ff'
        }
      },
      selected: {
        color: roomiPrimaryPalette[500]
      }
    },
    MuiTabs: {
      root: {
        minHeight: 30,
        minWidth: 'unset'
      },
      indicator: {
        backgroundColor: roomiPrimaryPalette[500]
      }
    },
    MuiTab: {
      root: {
        minHeight: 30,
        '&:not(:last-of-type)': {
          marginRight: 20
        },
        '@media (min-width: 960px)': {
          minWidth: 'unset'
        }
      },
      textColorInherit: {
        color: darkGray
      },
      labelContainer: {
        paddingTop: 0,
        paddingBottom: 0,
        '@media (min-width: 960px)': {
          paddingLeft: 0,
          paddingRight: 0
        }
      },
      label: {
        fontFamily: '"Avenir", "Roboto", "Arial", sans-serif',
        fontSize: 14,
        '@media (min-width: 960px)': { // this is needed to override material-ui 'font-size: 0.8125rem;' setting
          fontSize: 16
        }
      },
      selected: {
        color: roomiPrimaryPalette[500]
      }
    }
  },
  zIndex: {
    drawer: 1500
  },
  selectors: {
    ie11Only: '@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)'
  }
};
