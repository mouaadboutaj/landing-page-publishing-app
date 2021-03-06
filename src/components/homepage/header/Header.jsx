// Import React components
import { useState } from 'react';
import { Link } from "react-router-dom";

// Import Header images
import image from './../../../images/bg-pattern-intro-desktop.svg';
import iconhamburger from './../../../images/icon-hamburger.svg';
import iconClose from './../../../images/icon-close.svg';

// Import CSS for Header
import './Header.style.css';

const Header = ({bn}) => {

    const [bgURL, setBgURL] = useState(iconhamburger);


    const bgStyles = { 
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'norepeat',
        backgroundSize: 'cover',
    };

    function navToggle()
    {
        if(bgURL === iconhamburger)
        {
            setBgURL(iconClose);
        }
        else
        {
            setBgURL(iconhamburger);
        }
    }

    
    return (
        <div className="bg-container">
            <div className="container" style={bgStyles}>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid navbar-margin">
                        <a href="#" className="navbar-brand">{bn}</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#amavit-navbar" aria-controls="amavit-navbar" aria-expanded="false" aria-label="Toggle navigation" onClick={() => navToggle()}>
                            <span className="navbar-toggler-icon" style={{backgroundImage : `url(${bgURL})`}}></span>
                        </button>
                        <div className="collapse navbar-collapse" id="amavit-navbar">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        ??????????????
                                    </a>
                                    <ul className="dropdown-menu animate slideIn" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">?????? ??????????</a></li>
                                        <li><a className="dropdown-item" href="#">?????????? ??????????????</a></li>
                                        <li><a className="dropdown-item" href="#">?????????? ????????</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">
                                        ???? ?????? ??
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">
                                        ???????? ??????
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <ul className="navbar-nav d-none d-lg-flex">
                            <li className="nav-item">
                                <Link to="signin" className="nav-link">?????????? ????????????</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="signup" className="nav-link g-button">?????????? ????????</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container main-header">
                    <h1> ???????????? ?????? ?????????? ???????????? ?????? ????????????????</h1>
                    <p>?????????? ?????????????? ?????????? ???????????? ???????????????? ?????? ????????????????</p>
                    <div className="buttons">
                        <Link to="signup">???????? ???????? </Link>
                        <a href="#about">???????? ????????</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Header;