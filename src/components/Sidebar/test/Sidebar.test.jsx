import { describe, expect, test } from 'vitest';

import { screen, render } from '../../../test/testUtils';
import Sidebar from '../Sidebar';

describe('Sidebar 컴포넌트 테스트', () => {
  test('로그인 하지 않은 경우, 로그인을 요청하는 문구가 보여야 합니다.', () => {
    render(<Sidebar />);
    const loginMessageElement = screen.getByText('로그인 해주십시오');
    expect(loginMessageElement).toBeInTheDocument();
  });

  test('유저의 프로필 이미지가 보여야 합니다', () => {
    render(<Sidebar />);
    const userImageElement = screen.getByRole('img');
    expect(userImageElement).toBeInTheDocument();
  });
});
