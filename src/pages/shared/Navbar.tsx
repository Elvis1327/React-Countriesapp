import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

export const Navbar = () => {

    const [ navbarToggle, setNavbarToggle ] = useState(false);

    return (
        <header className='_header-header'>
            <Link to="/" className="_navbar-h1-tittle">
                CountriesApp
            </Link>
            {/* Just for Responsive */}
            <div className="_just-for-responsive">
                <Link to="/" className="_navbar-h1-tittle">
                    CountriesApp
                </Link>
                <GiHamburgerMenu 
                    className='_icon-responsive-navbar' 
                    onClick={() => setNavbarToggle(!navbarToggle)}
                />
            </div>
            <nav className='_header-nav'>
                <ul className={navbarToggle === false ? '_header-ul' : '_header-ul active'}>
                    <li className='_header-li'>
                        <Link className='_header-links' to="/countries">Countries</Link>
                    </li>
                    <li className='_header-li'>
                        <Link className='_header-links' to="/countries/favorities">Favorites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};


