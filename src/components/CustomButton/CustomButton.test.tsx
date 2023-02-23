/**
 * @jest-environment jsdom
 */
import { expect } from '@jest/globals';
import { render } from '@testing-library/react';
import React from 'react';

import CustomButton from '.';

it('CustomButton renders', () => {
  const func = () => {
    console.log('on click function testing');
  };

  const { container } = render(
    <CustomButton onClick={func} title={'Shuffle'} />
  );
  expect(container).toMatchSnapshot();
});
