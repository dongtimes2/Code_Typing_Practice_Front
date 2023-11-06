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

describe('modal 컴포넌트 테스트', () => {
  test('타자연습 종류를 선택할 수 있는 modal에는 세 가지 연습 모드가 떠야합니다', async () => {
    render(<Home />);
    const button = screen.getByText('Python');
    await userEvent.click(button);

    expect(screen.getByText('낱말 연습')).toBeInTheDocument();
    expect(screen.getByText('짧은 글 연습')).toBeInTheDocument();
    expect(screen.getByText('긴 글 연습')).toBeInTheDocument();
  });
});
