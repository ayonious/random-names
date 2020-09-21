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
  Germany: Germany,
  Italy: Italy,
  Spain: Spain,
  France: France,
  Russia: Russia,
  Bangladesh: Bangladesh,
  Brazil: Brazil,
  USA: USA,
  India: India,
  Turkey: Turkey,
  Peru: Peru,
};
