import userEvent from '@testing-library/user-event';
import { afterAll, beforeAll, describe, expect, test } from 'vitest';

import { render, screen } from '../../../test/testUtils';
import Home from '../Home';

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

describe('Home 페이지 통합 테스트', () => {
  test('베너가 보여야 합니다', () => {
    render(<Home />);
    const bannerElement = screen.getByText('연습할 언어를 선택해주세요');
    expect(bannerElement).toBeInTheDocument();
  });

  test('카드가 모두 보여야 합니다', async () => {
    render(<Home />);
    const imageElementList = await screen.findAllByRole('img', {
      name: /logo/i,
    });
    expect(imageElementList).toHaveLength(5);

    const buttonElementList = await screen.findAllByRole('button', {
      name: '시작하기',
    });
    expect(buttonElementList).toHaveLength(5);
  });

  test('로그인하지 않았을 때, 시작하기 버튼을 누르면 로그인 모달이 떠야합니다', async () => {
    render(<Home />);
    const buttonElements = await screen.findAllByRole('button', {
      name: '시작하기',
    });
    await userEvent.click(buttonElements[0]);
    const modalElement = await screen.findByText('로그인');
    expect(modalElement).toBeInTheDocument();
  });

  test('모달이 떴을 때, 모달의 바깥 영역을 클릭했다면 모달이 사라져야 합니다', async () => {
    render(<Home />);
    const buttonElements = await screen.findAllByRole('button', {
      name: '시작하기',
    });
    await userEvent.click(buttonElements[0]);
    const backgroundArea = await screen.findByTestId('background');
    await userEvent.click(backgroundArea);
    expect(backgroundArea).not.toBeInTheDocument();
  });

  test('모달이 떴을 때, 모달 내부 영역을 클릭했다면 모달이 사라져서는 안됩니다', async () => {
    render(<Home />);
    const buttonElements = await screen.findAllByRole('button', {
      name: '시작하기',
    });
    await userEvent.click(buttonElements[0]);
    const modalElement = await screen.findByTestId('modal');
    await userEvent.click(modalElement);
    expect(modalElement).toBeInTheDocument();
  });
});
