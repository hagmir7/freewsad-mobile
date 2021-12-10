import React from 'react';
import booking from '../assets/img/booking.png';
import agoda from '../assets/img/agoda.jpg';
import Skyscanner from '../assets/img/Skyscanner.jpg'

export default function FilterForm() {
 return (
  <div className="card-body row">
   <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
    <div className="row">
     <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
      <label htmlFor="form">From</label>
      <div className="input-group date">
       <div className="input-group-text icon-input bg-white border-0 p-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
         <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"></path>
         <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
        </svg>
       </div>
       <input type="text" id="from" className="form-control border-0" placeholder="Input your location" />
      </div>
     </div>
     <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
      <label htmlFor="to">To</label>
      <div className="input-group date">
       <div className="input-group-text icon-input input-group-text icon-input bg-white border-0 p-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
         <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"></path>
         <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
        </svg>
       </div>
       <input type="text" className="form-control border-0" id="to" placeholder="Enter city or airport" />
      </div>
     </div>
    </div>
    <div className="d-flex gap-5 my-4">
     <div className="form-check">
      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
      <label className="form-check-label" htmlFor="flexRadioDefault1">
       Round-trip
      </label>
     </div>
     <div className="form-check">
      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
      <label className="form-check-label" htmlFor="flexRadioDefault2">
       One-way
      </label>
     </div>
    </div>
    <div className="date my-4 row">
     <div className="col-6 m-0">
      <input type="date" id="depart" className="date-item w-100" />
     </div>
     <div className=" col-6 m-0">
      <input type="date" id="return" placeholder="Return" className="date-item w-100" />
     </div>
    </div>

    <input type="text" className="form-control  my-4 date" placeholder="Receive our travel deals newletter" />
    <div className="submit mt-3" >
     <input type="submit" value="Find deals" className="btn-detail w-100" />
    </div>

    <div className="form-check mt-4">
     <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
     <label className="form-check-label" htmlFor="flexCheckChecked">
      Receive our travel deals newletter
     </label>
    </div>

   </div>

   <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex text-center">
    <hr className="d-none d-sm-block d-md-block" />
    <div>
     <h5 className="mt-3">We work with mote than 300 partners to bring you better travel deal</h5>
     <div className="d-flex justify-content-center">
      <div className="d-grid gap-4">
       <img width="130px" src={booking} alt="booking" />
       <img width="130px" src={agoda} alt="agoda" />
       <img width="130px" src={Skyscanner} alt="Skyscanner" />
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}
