import React from 'react'

const Navbar = () => {
    return (
        <>
            <div>
                <header className="header" data-header>
                    <div className="container">

                        <a href="#" className="logo">
                            <img src={"/logo-dark.svg"} width="64" height="24" alt="Julia home" />
                        </a>

                        <nav className="navbar" data-navbar>

                            <div className="navbar-top">
                                <a href="#" className="logo">
                                    <img src={"/logo-light.svg"} width="64" height="24" alt="Julia home" />
                                </a>

                                <button className="nav-close-btn" aria-label="close menu" data-nav-toggler>
                                    <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
                                </button>
                            </div>

                            <ul className="navbar-list">

                                <li>
                                    <a href="#" className="navbar-link">Home</a>
                                </li>

                                <li>
                                    <a href="#" className="navbar-link">About</a>
                                </li>

                                <li>
                                    <a href="#" className="navbar-link">Projects</a>
                                </li>

                                <li>
                                    <a href="#" className="navbar-link">Blog</a>
                                </li>

                                <li>
                                    <a href="#" className="navbar-link">Contact</a>
                                </li>

                            </ul>

                            <div className="wrapper">
                                <a href="mailto:info@email.com" className="contact-link">info@email.com</a>

                                <a href="tel:001234567890" className="contact-link">00 (123) 456 78 90</a>
                            </div>

                            <ul className="social-list">

                                <li>
                                    <a href="#" className="social-link">
                                        <ion-icon name="logo-twitter"></ion-icon>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="social-link">
                                        <ion-icon name="logo-facebook"></ion-icon>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="social-link">
                                        <ion-icon name="logo-dribbble"></ion-icon>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="social-link">
                                        <ion-icon name="logo-instagram"></ion-icon>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="social-link">
                                        <ion-icon name="logo-youtube"></ion-icon>
                                    </a>
                                </li>

                            </ul>

                        </nav>

                        <button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
                            <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
                        </button>

                        <div className="overlay" data-nav-toggler data-overlay></div>

                    </div>
                </header>

            </div>
        </>
    )
}

export default Navbar
