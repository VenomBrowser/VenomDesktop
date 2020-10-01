export interface IFormFillData {
  _id?: string;
  type?: 'password' | 'address' | 'ccnum';
  url?: string;
  favicon?: string;
  fields?: {
    username?: string;
    passLength?: number;
    password?: string;
    name?: string;
    address?: string;
    postCode?: string;
    city?: string;
    phone?: string;
    email?: string;
    country?: string;
    ccnum?: number;
  };
}

export interface IFormFillMenuItem {
  _id?: string;
  text?: string;
  subtext?: string;
}
