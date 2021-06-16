// __tests__/CheckboxWithLabel-test.js
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Step1 from '../Step1';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

Object.defineProperty(window, 'matchMedia', {
  value: () => {
    return {
      matches: false,
      addListener: () => {},
      removeListener: () => {},
    };
  },
});
test('Step1 basic dom testing', () => {
  const { getByTestId, getByLabelText } = render(<Step1 />);
  expect(getByLabelText('Player 1 name')).toBeInTheDocument();
  expect(getByLabelText('Player 2 name')).toBeInTheDocument();
  expect(getByTestId('contiue-btn')).toBeInTheDocument();
});
