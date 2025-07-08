import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MemeSVGVierwer from './MemeSVGVierwer';

describe('<MemeSVGVierwer />', () => {
  test('it should mount', () => {
    render(<MemeSVGVierwer />);

    const memeSvgVierwer = screen.getByTestId('MemeSVGVierwer');

    expect(memeSvgVierwer).toBeInTheDocument();
  });
});