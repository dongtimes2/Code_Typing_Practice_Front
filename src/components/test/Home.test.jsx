import { userEvent } from '@testing-library/user-event';
import { afterAll, beforeAll, describe, expect, test } from 'vitest';

import Home from '../../pages/Home';
import { screen, render } from '../../test/testUtils';

beforeAll(() => {
  const modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal-root');
  document.body.appendChild(modalRoot);
});

afterAll(() => {
  const modalRoot = document.getElementById('modal-root');
  if (modalRoot) {
    document.body.removeChild(modalRoot);
  }
});

describe('Home 컴포넌트 테스트', () => {
  test('배너가 보여야 합니다.', () => {
    render(<Home />);
    const bannerElement = screen.getByTestId('home-banner');
    expect(bannerElement).toHaveTextContent(
      'Choose What You Want To Practice!',
    );
  });

  test('python 언어 버튼을 클릭했을 때 modal이 떠야 합니다.', async () => {
    render(<Home />);
    const pythonButton = screen.getByText('Python');
    await userEvent.click(pythonButton);
    const modalElement = screen.getByText(/긴 글 연습/i);
    expect(modalElement).toBeInTheDocument();
  });

  test('c 언어 버튼을 클릭했을 때 modal이 떠야 합니다.', async () => {
    render(<Home />);
    const cButton = screen.getByText('C');
    await userEvent.click(cButton);
    const modalElement = screen.getByText(/긴 글 연습/i);
    expect(modalElement).toBeInTheDocument();
  });

  test('javaScript 언어 버튼을 클릭했을 때 modal이 떠야 합니다.', async () => {
    render(<Home />);
    const javaScriptButton = screen.getByText('JavaScript');
    await userEvent.click(javaScriptButton);
    const modalElement = screen.getByText(/긴 글 연습/i);
    expect(modalElement).toBeInTheDocument();
  });
});
