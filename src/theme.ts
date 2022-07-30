import THEME_CONSTANTS from './theme.module.scss';
export interface Theme {
  components?: Components;
}

type Components = {
  Button?: React.CSSProperties;
};

const theme: Theme = {
  components: {
    Button: {
      background: THEME_CONSTANTS.colorSecondary,
      padding: '10px',
      borderRadius: '4px',
      fontSize: THEME_CONSTANTS.fontSizeNormal,
      border: 'none',
      cursor: 'pointer',
      fontFamily: THEME_CONSTANTS.fontFamily,
      fontWeight: 300,
      color: 'white',
    },
  },
};

export default theme;
