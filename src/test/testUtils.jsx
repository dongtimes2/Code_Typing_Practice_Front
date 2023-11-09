import { render } from '@testing-library/react';

import AppContainer from '../container/AppContainer';

const customRender = (ui, options) =>
  render(ui, { wrapper: AppContainer, ...options });

export { screen } from '@testing-library/react';
export { customRender as render };
