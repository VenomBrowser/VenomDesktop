import { lightTheme, darkTheme } from '~/renderer/constants/themes';

export const getTheme = (name: string) => {
  if (name === 'venom-light') return lightTheme;
  else if (name === 'venom-dark') return darkTheme;
  return lightTheme;
};
