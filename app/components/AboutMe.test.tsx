import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutMe from './AboutMe';

test('renders AboutMe component', () => {
    render(<AboutMe />);
    const linkElement = screen.getByText(/about me/i);
    expect(linkElement).toBeInTheDocument();
});