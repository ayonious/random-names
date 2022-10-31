import Bangladesh from './countryInput/Bangladesh.json';
import Brazil from './countryInput/Brazil.json';
import Egypt from './countryInput/Egypt.json';
import France from './countryInput/France.json';
import Germany from './countryInput/Germany.json';
import India from './countryInput/India.json';
import Iran from './countryInput/Iran.json';
import Italy from './countryInput/Italy.json';
import Peru from './countryInput/Peru.json';
import Poland from './countryInput/Poland.json';
import Romania from './countryInput/Romania.json';
import Russia from './countryInput/Russia.json';
import Spain from './countryInput/Spain.json';
import Switzerland from './countryInput/Switzerland.json';
import Turkey from './countryInput/Turkey.json';
import USA from './countryInput/USA.json';

interface CountryInput {
  flag: string;
  names: {
    [index: number]: string;
  };
}

interface Database {
  [country: string]: CountryInput;
}

export const database: Database = {
  Germany,
  Bangladesh,
  Brazil,
  Egypt,
  France,
  India,
  Iran,
  Italy,
  Peru,
  Poland,
  Romania,
  Russia,
  Spain,
  Switzerland,
  Turkey,
  USA,
};
