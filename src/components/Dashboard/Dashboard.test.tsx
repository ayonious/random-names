/**
 * @jest-environment jsdom
 */
import { expect } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import Dashboard from '.';
import { database } from '../../resources/Database';

it('Dashboard renders', () => {
  const { container } = render(<Dashboard />);
  expect(container).toMatchSnapshot();
});

it('Dashboard generates a name from the selected country', () => {
  render(<Dashboard />);

  expect(screen.getByTestId('name-card').textContent).toBe('');
  fireEvent.click(screen.getByTestId('shuffle-button'));
  expect(database.Germany.names).toContain(
    screen.getByTestId('name-card').textContent,
  );
});
