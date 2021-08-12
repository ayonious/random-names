import USA from './countryInput/USA.json';
import Germany from './countryInput/Germany.json';
import Italy from './countryInput/Italy.json';
import Spain from './countryInput/Spain.json';
import France from './countryInput/France.json';
import Russia from './countryInput/Russia.json';
import Bangladesh from './countryInput/Bangladesh.json';
import Brazil from './countryInput/Brazil.json';
import India from './countryInput/India.json';
import Turkey from './countryInput/Turkey.json';
import Peru from './countryInput/Peru.json';
import Romania from './countryInput/Romania.json';
import Iran from './countryInput/Iran.json';
import Egypt from './countryInput/Egypt.json';
import Switzerland from './countryInput/Switzerland.json';

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
  Italy,
  Spain,
  France,
  Russia,
  Bangladesh,
  Brazil,
  USA,
  India,
  Turkey,
  Peru,
  Romania,
  Iran,
  Egypt,
  Switzerland,
};
