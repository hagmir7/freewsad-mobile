import React from 'react'
import Logo from '../assets/img/logo.png'

export default function Footer() {
    return (
        <footer className="text-muted pb-3 bg-white">
            <div className="container pt-3">
                <div className="row">
                    <p className="float-end mb-1 col-md-2 text-center">
                        <img width="100px" src={Logo} alt="logo" />
                    </p>
                    <p className="mb-1 col-md-10">
                        MASHITOOLS is a leading travel comparison site that lets you find cheap flights, hotels, car rentals and
                        vacation package online. Whether you're traveling for fun, business, adventure, or relaxation, your
                        ideal trip is simply a click away! You can compare airline fares, hotel rates, and car rentals from all
                        the top internet travel sites in one location. Finding cheap flights has never been easier. Save time,
                        save money; there's no need to visit website after website to find cheap airline ticket or the best
                        deals. It's all here for you in one location.</p>
                </div>
                <div className="d-flex gap-5 justify-content-center mt-2">
                    <a href="#">Private Policy</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">About us</a>
                </div>
            </div>
        </footer>

    )
}
