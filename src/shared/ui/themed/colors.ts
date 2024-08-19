export const tintColorLight = '#2f95dc';
export const tintColorDark = '#fff';

export const white = '#fff';
export const black = '#000';

export const dark = {
  50: '#e8e8e9',
  100: '#b7b9bc',
  200: '#95979c',
  300: '#64686e',
  400: '#464a52',
  500: '#181d27',
  600: '#161a23',
  700: '#11151c',
  800: '#0d1015',
  900: '#0a0c10',
};

export const greyscale = {
  50: '#F9FAFC',
  100: '#EDF1F9',
  200: '#E2E8F6',
  300: '#D6E0F3',
  400: '#B5C0D6',
  500: '#95A1B9',
  600: '#77839C',
  700: '#5C687E',
  800: '#434D61',
  900: '#2D3444',
};

export const primary_green = {
  50: '#ebf2ec',
  100: '#c2d7c5',
  200: '#a4c3a9',
  300: '#7ba882',
  400: '#619769',
  500: '#3a7d44',
  600: '#35723e',
  700: '#295930',
  800: '#204525',
  900: '#18351d',
};

export const secondary_yellow = {
  50: '#fafbf5',
  100: '#f0f4df',
  200: '#e9eecf',
  300: '#e0e7b9',
  400: '#d9e2ac',
  500: '#d0db97',
  600: '#bdc789',
  700: '#949b6b',
  800: '#727853',
  900: '#575c3f',
};

export default {
  light: {
    text: dark['500'],
    border: dark['500'],
    background: white,
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    primary: tintColorLight,
    secondary: primary_green['500'],
    danger: 'red',
    outline: white,
  },
  dark: {
    text: white,
    background: white,
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    primary: tintColorLight,
  },
};
