import {NavLink } from "react-router-dom";
import reactLogo from '../assets/images/reactLogo.png';
import { useEffect, useState } from "react";

const Header = () => {
    const [isMobileScreen, setIsMobileScreen] = useState(window.innerWidth <= 767);
    const [isOpenMobileMenu, setisOpenMobileMenu] = useState(false);

    const openMobileMenu = ()=>{
        setisOpenMobileMenu(!isOpenMobileMenu);

        const headerMenu = document.querySelector('.header-area__menu');
        const mobileCross = document.querySelector('.mobileCross');
        if (isMobileScreen) {
            if (!isOpenMobileMenu) {
                headerMenu.classList.add("active");
                mobileCross.classList.add("active");
            } else {
                headerMenu.classList.remove("active");
                mobileCross.classList.remove("active");
            }
        }
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobileScreen(window.innerWidth <= 767);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <header className="header-area">
                <div className="header-area__wrap center-content">
                    <div className="header-area__bx">
                        <div className="header-area__logo">
                            <a href="#"><img src={reactLogo} alt="" /></a>
                        </div>

                        <nav className="header-area__menu">
                                <ul className="header-area__list" style={{ display: isMobileScreen ? 'none' : '' }}>
                                    <li onClick={openMobileMenu}><NavLink className={({isActive})=> isActive ? "active-item" : "pending-item"} to="/">Home</NavLink></li>
                                    <li onClick={openMobileMenu}><NavLink className={({isActive})=> isActive ? "active-item" : "pending-item"} to="/about">About</NavLink></li>
                                    <li onClick={openMobileMenu}><NavLink className={({isActive})=> isActive ? "active-item" : "pending-item"} to="/services">Services</NavLink></li>
                                    <li onClick={openMobileMenu}><NavLink className={({isActive})=> isActive ? "active-item" : "pending-item"} to="/contact">Contact</NavLink></li>
                                </ul>
                        </nav>

                        <div className="header-area__contact--btnwrap">
                            <a href="#" className="header-area__contact--btn">Contact Us</a>
                        </div>

                        {!isMobileScreen ? null :(
                            <button className="mobileCross" onClick={openMobileMenu}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        )}
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;