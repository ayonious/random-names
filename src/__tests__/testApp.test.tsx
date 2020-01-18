import * as React from 'react';
import * as renderer from 'react-test-renderer';
import CountryResults from '../components/CountryResults';
import Dashboard from '../components/Dashboard';
import { CustomButton, Greeting } from '../components/Utils';

it('CountryResults renders', () => {
  const tree = renderer.create(<CountryResults country="Germany" />);
  expect(tree).toMatchSnapshot();
});

it('Dashboard renders', () => {
  const tree = renderer.create(<Dashboard />);
  expect(tree).toMatchSnapshot();
});

it('CustomButton renders', () => {
  const func = () => {
    console.log('on click function testing');
  };

  const tree = renderer.create(
    <CustomButton onClick={func} title={'Shuffle'} />
  );
  expect(tree).toMatchSnapshot();
});

it('Greeting renders', () => {
  const tree = renderer.create(<Greeting />);
  expect(tree).toMatchSnapshot();
});
