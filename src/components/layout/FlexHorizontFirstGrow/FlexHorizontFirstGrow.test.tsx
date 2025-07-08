import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FlexHorizontFirstGrow from './FlexHorizontFirstGrow';

describe('<FlexHorizontFirstGrow />', () => {
  test('it should mount', () => {
    render(<FlexHorizontFirstGrow />);

    const flexHorizontFirstGrow = screen.getByTestId('FlexHorizontFirstGrow');

    expect(flexHorizontFirstGrow).toBeInTheDocument();
  });
});