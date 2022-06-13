import React from 'react';
import { render, screen } from '@testing-library/react';

import { Navbar } from '../../pages';

describe('Navbar Component', () => {
    test('renders Navbar component', () => {
        render(<Navbar />);
        const linkElement = screen.getByRole('holaelvis');
        expect(linkElement).toHaveTextContent('CountriesApp');
    })
})