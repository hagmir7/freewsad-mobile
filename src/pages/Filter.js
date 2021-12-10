import React from 'react';
import Header from '../components/Header';
import FilterForm from '../components/FilterForm';
import BigFooter2 from '../components/BigFooter2.js';

export default function Filter() {
 return (
  <div>
   <Header />
   <div className="my-4">
    <h3 className="text-center">Hello Travelers. Where Would you like to go?</h3>
   </div>
   <main className="container p-0 col-sm-12 col-md-12 col-lg-8 col-xl-8 mt-5 pb-5">

    <div className="row mt-3">
     <div className="col-sm-12 col-md-12 col-lg-6">
      <div className="bottun d-flex justify-content-between">
       <div className="card-header btn-detail">
        <a className="btn text-white" data-bs-toggle="collapse" href="#collapseOne">
         Hotels
        </a>
       </div>

       <div className="card-header btn-detail">
        <a className="collapsed btn text-white" data-bs-toggle="collapse" href="#collapseTwo">
         Flights
        </a>
       </div>

       <div className="card-header btn-detail">
        <a className="collapsed btn text-white" data-bs-toggle="collapse" href="#collapseThree">
         Car rental
        </a>
       </div>
      </div>
     </div>


    </div>

    <div id="accordion">

     <div className="card border-0 mt-2">
      <div id="collapseOne" className="collapse content-form show" data-bs-parent="#accordion">
       <FilterForm />
      </div>
     </div>

     <div className="card border-0">
      <div id="collapseTwo" className="collapse content-form" data-bs-parent="#accordion">
       <FilterForm />
      </div>
     </div>


     <div className="card border-0">
      <div id="collapseThree" className="collapse content-form" data-bs-parent="#accordion">
       <FilterForm />
      </div>
     </div>

    </div>
   </main>

   <BigFooter2 />
  </div>
 )
}
