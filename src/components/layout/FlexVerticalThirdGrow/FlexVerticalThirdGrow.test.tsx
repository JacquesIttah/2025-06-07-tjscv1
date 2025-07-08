import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FlexVerticalThirdGrow from './FlexVerticalThirdGrow';

describe('<FlexVerticalThirdGrow />', () => {
  test('it should mount', () => {
    render(<FlexVerticalThirdGrow />);

    const flexVerticalThirdGrow = screen.getByTestId('FlexVerticalThirdGrow');

    expect(flexVerticalThirdGrow).toBeInTheDocument();
  });
});