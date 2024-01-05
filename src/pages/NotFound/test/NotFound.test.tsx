import { QueryClientProvider } from '@tanstack/react-query';
import { render as originalRender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, test } from 'vitest';

import { queryClient } from '../../../api/config/query';
import { render, screen } from '../../../test/testUtils';
import Home from '../../Home/Home';
import NotFound from '../NotFound';

describe('NotFound 페이지 통합 테스트', () => {
  test('올바르지 않은 경로입니다 문구가 보여야 합니다', () => {
    render(<NotFound />);
    const textElement = screen.getByText('올바르지 않은 경로입니다');
    expect(textElement).toBeInTheDocument();
  });

  test('첫 화면으로 이동하기 버튼이 보여야 합니다', () => {
    render(<NotFound />);
    const buttonElement = screen.getByRole('button', {
      name: '첫 화면으로 이동하기',
    });
    expect(buttonElement).toBeInTheDocument();
  });

  test('첫 화면으로 이동하기 버튼을 누르면 홈으로 이동해야 합니다', async () => {
    originalRender(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={['/invalid-url']}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>,
    );

    const buttonElement = screen.getByRole('button', {
      name: '첫 화면으로 이동하기',
    });
    expect(buttonElement).toBeInTheDocument();

    await userEvent.click(buttonElement);
    const bannerElement = screen.getByText('연습할 언어를 선택해주세요');
    expect(bannerElement).toBeInTheDocument();
  });
});
