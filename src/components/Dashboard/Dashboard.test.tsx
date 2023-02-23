/**
 * @jest-environment jsdom
 */
import { expect } from '@jest/globals';
import { render } from '@testing-library/react';
import React from 'react';

import Dashboard from '.';

it('Dashboard renders', () => {
  const { container } = render(<Dashboard />);
  expect(container).toMatchSnapshot();
});
