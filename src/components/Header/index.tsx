import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import Logo from '../../assets/Logo.svg';
import './styles.css';
import { List, X } from '@phosphor-icons/react';

const HomeNavigation = ({ onMobile = false }) => (
    <nav className={onMobile ? 'menu-mobile' : 'menu'}>
        <a href='#home' className='menu-link'>Home</a>
        <a href='#contact' className='menu-link'>Contactar</a>
        <a href='#projects' className='menu-link'>Projetos</a>
    </nav>
)

export function Header() {
    const location = useLocation();
    const isSmallScreen = useMediaQuery({ query: '(max-width: 960px)' });
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    function toggleMenu() {
        setIsMenuOpened(prev => !prev);
    }

    if (isSmallScreen) {
        return (
            <>
                <header className='header'>
                    <img src={Logo} alt='Logo Eqquipe Nexus' className='logo' />
                    {isMenuOpened
                        ? <X className='menu-button closed' size={32} color='white' onClick={toggleMenu} />
                        : <List className='menu-button openned' size={32} color='white' onClick={toggleMenu} />}
                </header>
                {isMenuOpened && (
                    <div className='menu-mobile-container'>
                        <HomeNavigation onMobile />
                    </div>
                )}
            </>
        )
    }

    return (
        <header className='header'>
            <img src={Logo} alt='Logo Eqquipe Nexus' className='logo' />
            {location.pathname === '/' && <HomeNavigation />}
        </header>
    )
}
