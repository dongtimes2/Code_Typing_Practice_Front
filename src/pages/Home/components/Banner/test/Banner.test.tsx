import { describe, test, expect } from 'vitest';

import { render, screen } from '../../../../../test/testUtils';
import Banner from '../Banner';

describe('Banner 컴포넌트 테스트', () => {
  test('입력한 대로 텍스트가 출력되어야 합니다', () => {
    render(<Banner>sampleText</Banner>);
    const bannerElement = screen.getByText('sampleText');
    expect(bannerElement).toBeInTheDocument();
  });
});
