import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './Button';

describe('<Button />', () => {
  it('Should show label as placeholder', () => {
    const { getByText } = render(<Button onClick={() => {}} />);
    expect(getByText('label')).not.toBeNull();
  });

  it('Should show the right label', () => {
    const { getByText } = render(<Button label="botão" onClick={() => {}} />);
    expect(getByText('botão')).not.toBeNull();
  });
});
