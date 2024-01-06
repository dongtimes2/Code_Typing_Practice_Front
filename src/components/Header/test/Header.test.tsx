import { describe, expect, test } from 'vitest';

import { screen, render } from '../../../test/testUtils';
import Header from '../Header';

describe('Header 컴포넌트 테스트', () => {
  test('이름이 보여야 합니다.', () => {
    render(<Header />);
    const headerElement = screen.getByText('Code Typing Practice');
    expect(headerElement).toBeInTheDocument();
  });

  test('로그인 버튼이 보여야 합니다.', () => {
    render(<Header />);
    const loginButtonElement = screen.getByText('로그인');
    expect(loginButtonElement).toBeInTheDocument();
  });
});
