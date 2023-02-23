/**
 * @jest-environment jsdom
 */
import { expect } from '@jest/globals';
import { render } from '@testing-library/react';
import React from 'react';

import CountryResults from '.';

it('CountryResults renders', () => {
  const { container } = render(<CountryResults country="Germany" />);
  expect(container).toMatchSnapshot();
});
