import { lightTheme, darkTheme } from '~/renderer/constants/themes';

export const getTheme = (name: string) => {
  if (name === 'starboard-light') return lightTheme;
  else if (name === 'starboard-dark') return darkTheme;
  return lightTheme;
};
