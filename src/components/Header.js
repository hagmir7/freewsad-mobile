import React from 'react';
import Logo from '../assets/img/logo.png';
import { Link } from "react-router-dom";


function Header() {
    return (
        <div className="blog-header bg-light">
            <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                <div className="container-fluid d-flex justify-content-center align-items-center w-100">
                    <div className="d-block m-auto">
                        <ul className="d-flex">
                            <li className="nav-item">
                                <Link to='/'>
                                    <span className="nav-link active" aria-current="page">Home</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/pricing'>
                                    <span className="nav-link active" aria-current="page">Pricing</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/hotels'>
                                    <span className="nav-link active" aria-current="page">Hotels</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/flights'>
                                    <span className="nav-link active" aria-current="page">Flights deals</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/cars'>
                                    <span className="nav-link active" aria-current="page">Car rental</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <header className="blog-header py-2 bg-white border-bottom">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-4 col-lg-3 col-x-3">
                        <h1 className='h3 m-0'>
                            <Link to='/'><img width='50px' src={Logo} alt='Moshitools' /> Moshitools</Link>
                        </h1>
                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-9 col-x-9">
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;




