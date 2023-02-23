/**
 * @jest-environment jsdom
 */
import { expect } from '@jest/globals';
import { render } from '@testing-library/react';
import React from 'react';

import Greeting from '.';

it('Greeting renders', () => {
  const { container } = render(<Greeting />);
  expect(container).toMatchSnapshot();
});
