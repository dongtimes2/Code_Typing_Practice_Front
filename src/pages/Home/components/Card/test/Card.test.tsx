import { describe, expect, test, vi } from 'vitest';

import { render, screen } from '../../../../../test/testUtils';
import Card from '../Card';

describe('Card 컴포넌트 테스트', () => {
  test('타이틀 텍스트, 내용 텍스트, 이미지가 출력되어야 합니다', () => {
    render(
      <Card
        title="sampleTitle"
        content="sampleContent"
        logoImgSrc="sampleSource"
        onClick={vi.fn()}
      />,
    );
    const title = screen.getByText('sampleTitle');
    expect(title).toBeInTheDocument();
    const content = screen.getByText('sampleContent');
    expect(content).toBeInTheDocument();
    const imageElement = screen.getByRole('img', {
      name: /logo/i,
    });
    expect(imageElement).toBeInTheDocument();
  });
});

describe('통합 테스트', () => {
  test('시작하기 버튼이 존재해야 합니다', () => {
    render(
      <Card
        title="sampleTitle"
        content="sampleContent"
        logoImgSrc="sampleSource"
        onClick={vi.fn()}
      />,
    );
    const buttonElement = screen.getByRole('button', {
      name: '시작하기',
    });
    expect(buttonElement).toBeInTheDocument();
  });

  test('시작하기 버튼은 disabled 속성이 false여야 합니다', () => {
    render(
      <Card
        title="sampleTitle"
        content="sampleContent"
        logoImgSrc="sampleSource"
        onClick={vi.fn()}
      />,
    );
    const buttonElement = screen.getByRole('button', {
      name: '시작하기',
    });
    expect(buttonElement).toBeEnabled();
  });

  test('시작하기 버튼을 클릭하면, onClick 함수가 실행되어야 합니다', () => {
    const mockOnClick = vi.fn();
    render(
      <Card
        title="sampleTitle"
        content="sampleContent"
        logoImgSrc="sampleSource"
        onClick={mockOnClick}
      />,
    );
    const buttonElement = screen.getByRole('button', {
      name: '시작하기',
    });
    buttonElement.click();
    expect(mockOnClick).toBeCalledTimes(1);
  });
});
