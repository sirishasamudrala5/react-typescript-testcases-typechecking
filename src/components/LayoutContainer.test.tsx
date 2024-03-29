import React from 'react';
import { render, screen } from '../../test/test-utils';
import LayoutContainer from './LayoutContainer';



it('can browse to the about page', async () => {
  // For `LayoutContainer`, you should be able to render the layout container, followed by navigating to the About page.
  render(<LayoutContainer />);
  const aboutLink = screen.getByTestId(`aboutLink`)
  const spy = jest.spyOn(aboutLink, 'click');
  aboutLink.click();
  expect(spy).toBeCalledTimes(1)
  spy.mockRestore();
});
