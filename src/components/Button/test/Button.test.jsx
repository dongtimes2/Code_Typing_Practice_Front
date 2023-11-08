import { describe, expect, test, vi } from 'vitest';

import { screen, render } from '../../../test/testUtils';
import Button from '../Button';

describe('Button 컴포넌트 테스트', () => {
  test('버튼이 보여야 합니다', () => {
    render(<Button />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });

  test('입력한 대로 텍스트가 출력되어야 합니다', () => {
    render(<Button>sampleText</Button>);
    const buttonElement = screen.getByRole('button', {
      name: 'sampleText',
    });
    expect(buttonElement).toBeInTheDocument();
  });

  test('onClick 함수가 실행되어야 합니다', () => {
    const mockOnClick = vi.fn();
    render(<Button onClick={mockOnClick} />);
    const buttonElement = screen.getByRole('button');
    buttonElement.click();
    expect(mockOnClick).toBeCalledTimes(1);
  });

  test('disabled 속성이 true인 경우, 버튼이 비활성화 되어야 합니다', () => {
    render(<Button disabled />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeDisabled();
  });

  test('disable 속성이 true인 경우, onClick 함수가 실행되지 않아야 합니다', () => {
    const mockOnClick = vi.fn();
    render(<Button onClick={mockOnClick} disabled />);
    const buttonElement = screen.getByRole('button');
    buttonElement.click();
    expect(mockOnClick).not.toBeCalled();
  });

  test('disabled 속성이 true인 경우, opacity 값이 0.2여야 합니다', () => {
    render(<Button disabled />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveStyle('opacity: 0.2');
  });

  test('disabled 속성이 false인 경우, opacity 값이 따로 지정되지 않아야 합니다', () => {
    render(<Button />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveStyle('opacity: 1');
  });
});
