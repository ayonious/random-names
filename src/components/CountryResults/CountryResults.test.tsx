/**
 * @jest-environment jsdom
 */
import { expect } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import CountryResults from '.';
import * as SwitzerlandData from '../../resources/countryInput/Switzerland.json';

it('CountryResults renders', () => {
  const { container } = render(<CountryResults country="Germany" />);
  expect(container).toMatchSnapshot();
});

it('CountryResults after click renders', () => {
  render(<CountryResults country="Switzerland" />);

  const button = screen.getByTestId('shuffle-button');
  const nameOnCardBeforeClick = screen.getByTestId('name-card').textContent;

  expect(nameOnCardBeforeClick).toBe('');

  fireEvent.click(button);

  const nameOnCardAfterClick = screen.getByTestId('name-card').textContent;
  expect(SwitzerlandData.names).toContain(nameOnCardAfterClick);
});
