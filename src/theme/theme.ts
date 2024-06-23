import {createTheme} from '@rneui/themed';
import {light, dark} from './colors';

const theme = createTheme({
  lightColors: light,
  darkColors: dark,
  mode: 'light',
});

export default theme;
