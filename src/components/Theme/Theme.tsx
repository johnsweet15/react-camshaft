import defaultTheme, { Theme } from '../../theme';
import { merge } from 'lodash';

let theme: Theme;

const extendTheme = (customTheme: Theme) => {
  theme = merge(defaultTheme, customTheme);
};

export { theme };
export default extendTheme;
