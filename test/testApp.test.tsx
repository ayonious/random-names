/**
 * @jest-environment jsdom
 */

import React from 'react';
import expect from 'expect';

import { render } from '@testing-library/react';
import CountryResults from '../src/components/CountryResults';
import Dashboard from '../src/components/Dashboard';
import Greeting from '../src/components/Greeting';
import CustomButton from '../src/components/CustomButton';

it('CountryResults renders', () => {
  const { container } = render(<CountryResults country="Germany" />);
  expect(container).toMatchSnapshot();
});

it('Dashboard renders', () => {
  const { container } = render(<Dashboard />);
  expect(container).toMatchSnapshot();
});

it('CustomButton renders', () => {
  const func = () => {
    console.log('on click function testing');
  };

  const { container } = render(
    <CustomButton onClick={func} title={'Shuffle'} />
  );
  expect(container).toMatchSnapshot();
});

it('Greeting renders', () => {
  const { container } = render(<Greeting />);
  expect(container).toMatchSnapshot();
});
