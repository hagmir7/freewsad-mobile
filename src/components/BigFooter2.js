import React from 'react'
import logo from '../assets/img/logo.png';
import map from '../assets/img/coved-map.jpg';
import flex from '../assets/img/flexible.png';
import d1 from '../assets/img/image.jpg';
import d2 from '../assets/img/db-1.jpeg';
import d3 from '../assets/img/db-2.jpg';
import d4 from '../assets/img/db-3.webp';

import air from '../assets/img/air-icon.png';
import enty from '../assets/img/entry.jpg';




export default function BigFooter() {
  return (
    <footer className="text-muted pb-3 bg-white">
      <section className="container">
        <h3 className="text-center text-black pt-3">Informed Travel During COVIDE-19</h3>
        <div className="row align-items-md-stretch">
          <div className="col-md-6 pb-2">
            <div className="col-12 border p-2 mt-2 rounded">
              <img src={air} width="70px" alt="airplan icon" />
              <span className="h4 text-black ms-2">Committed to Healthy flying</span>
            </div>
            <div className="col-12 border p-2 mt-2 rounded">
              <img src={flex} width="70px" alt="airplan icon" />
              <span className="h4 text-black ms-2">Flexible Booking</span>
            </div>
            <div className="col-12 border p-2 mt-2 rounded">
              <img src={enty} width="70px" alt="airplan icon" />
              <span className="h4 text-black ms-2">Entry Restriction by Country/Region</span>
            </div>


          </div>
          <div className="col-md-6 position-relative">
            <img src={map} width="100%" alt="coved" />
            <div className="position-absolute map-content">
              <h5 className="text-white">Can I go to...?</h5>
              <span className="w-50 text-white">
                Travel informd Use our interactive map to view exit and entry restriction around the world
              </span> <br />
              <a href='https://coronavirus.data.gov.uk/details/interactive-map/cases' target="_blanck" className='btn btn-detail mt-3 text-white'>View Map</a>
            </div>
          </div>
        </div>

        <h3 className="text-center mt-3 text-black">Popular Routes</h3>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-3">
          <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <div className="card mb-4 shadow-sm ">
              <img className="img-card" src={d1} alt="" />
              <div className="px-3">
                <div className="card card-aps shadow">
                  <div className="text-center text-black mt-2">
                    <span className="h4 mx-2">Riyadh</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-left-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                    <span className="h4 mx-2">Dubai</span>
                  </div>
                  <p className="mx-2 m-1">Round-trip | Sat, dec 18-Wed...</p>
                  <span className="mx-2 text-end text-black">From <strong>212$</strong></span>

                </div>
              </div>
            </div>
          </div>


          <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <div className="card mb-4 shadow-sm ">
              <img className="img-card" src={d2} alt="" />
              <div className="px-3">
                <div className="card card-aps shadow">
                  <div className="text-center text-black mt-2">
                    <span className="h4 mx-2">Riyadh</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-left-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                    <span className="h4 mx-2">Manila</span>
                  </div>
                  <p className="mx-2 m-1">Round-trip | Sat, dec 18-Wed...</p>
                  <span className="mx-2 text-end text-black">From <strong>212$</strong></span>

                </div>
              </div>
            </div>
          </div>


          <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <div className="card mb-4 shadow-sm ">
              <img className="img-card" src={d3} alt="" />
              <div className="px-3">
                <div className="card card-aps shadow">
                  <div className="text-center text-black mt-2">
                    <span className="h4 mx-2">Riyadh</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-left-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                    <span className="h4 mx-2">Jeddah</span>
                  </div>
                  <p className="mx-2 m-1">Round-trip | Sat, dec 18-Wed...</p>
                  <span className="mx-2 text-end text-black">From <strong>212$</strong></span>

                </div>
              </div>
            </div>
          </div>


          <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <div className="card mb-4 shadow-sm ">
              <img className="img-card" src={d4} alt="" />
              <div className="px-3">
                <div className="card card-aps shadow">
                  <div className="text-center text-black mt-2">
                    <span className="h4 mx-2">Riyadh</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-left-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z" />
                    </svg>
                    <span className="h4 mx-2">London</span>
                  </div>
                  <p className="mx-2 m-1">Round-trip | Sat, dec 18-Wed...</p>
                  <span className="mx-2 text-end text-black">From <strong>212$</strong></span>

                </div>
              </div>
            </div>
          </div>


        </div>
      </section>
      <div className="container mt-5">
        <div className="row">
          <p className="float-end mb-1 col-md-2 text-center">
            <img width="100px" src={logo} alt="logo" />
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
