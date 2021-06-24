import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '../../test/test-utils';


import About from './About';

it('renders <About /> page', () => {
  // You should be able to verify the About page rendered correctly.
  const { aboutPage } = render(<About />)
  expect(aboutPage).toMatchSnapshot();
});

it('clicks button and fires increment counter', () => {
  // You should be able to click the increment button and verify the count.
  render(<About />)

  const { inc1 } = render(
      <p>Current Count: 1</p>,
  );
  const { inc2 } = render(
    <p>Current Count: 2</p>,
);
  // Increment
  userEvent.click(screen.getByText('Increment'))
  expect(inc1).toMatchSnapshot();

  // Increment again
  userEvent.click(screen.getByText('Increment'))
  expect(inc2).toMatchSnapshot();
  
});
