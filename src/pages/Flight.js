import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Pagenation from '../components/Pagination';
import FlightFilter from '../components/FlightFilter'


export default function Flight() {
 return (
  <div>
   <Header />
   <main className="container d-flex justify-content-center">
    <div className="row g-5 w-100 p-0 m-0">
     <FlightFilter />
     <div className="col-md-8 col-lg-8 col-xl-6 p-3 mt-3 ">
      <div className="alert bg-white border alert-dismissible fade show" role="alert">
       Great news, we found you an even lower fare!
       <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      <div className='m-0 border row bg-white mb-2 box p-2'>
       <div className='col-sm-12 col-md-12 col-lg-8 col-xl-8 p-0 m-0 position-relative'>
        <div className="d-flex">
         <div className="col-1">
          <img width="40px" src="https://static.tacdn.com/img2/flights/airlines/logos/100x100/Turkish-Airlines.png" alt="Turkish Airlines" />

         </div>
         <div className="col-7 ms-3">
          <h5 className="m-0">6:10 AM - 2:35 PM</h5>
          <span className="company-flight">AMM - CMN, Turkish Airlines</span>
         </div>
         <div className="mx-3 col-4">
          <span>9h 25m</span>
          <h6 data-bs-toggle="tooltip" data-bs-placement="top" title="2h 10m layover, Istanbul Airport">1 stop, IST</h6>
         </div>

        </div>
        <div className="d-flex mt-4">
         <div className="col-1">
          <img width="40px" src="https://static.tacdn.com/img2/flights/airlines/logos/100x100/Turkish-Airlines.png" alt="Turkish Airlines" />

         </div>
         <div className="col-7 ms-3">
          <h5 className="m-0">7:20 AM - 9:35 PM</h5>
          <span className="company-flight">AMM - CMN, Turkish Airlines</span>
         </div>
         <div className="mx-3 col-4">
          <span>9h 25m</span>
          <h6 data-bs-toggle="tooltip" data-bs-placement="top" title="2h 10m layover, Istanbul Airport">1 stop, IST</h6>
         </div>

        </div>
       </div>
       <div className='col-sm-12 col-md-12 col-lg-4 col-xl-4'>
        <div className='text-center py-2'>
         <span className='text-black h4'>$ 500</span>
         <a href='#' className='btn btn-detail mt-3 w-100'>View  Detail</a>
        </div>
       </div>
      </div>


      <div className='m-0 border row bg-white mb-2 box p-2'>
       <div className='col-sm-12 col-md-12 col-lg-8 col-xl-8 p-0 m-0 position-relative'>
        <div className="d-flex">
         <div className="col-1">
          <img width="40px"
           src="https://static.tacdn.com/img2/flights/airlines/logos/100x100/Emirates2.png"
           alt="Turkish Airlines" />
         </div>
         <div className="col-7 ms-3">
          <h5 className="m-0">9:00 AM - 12:35 PM</h5>
          <span className="company-flight">AMM - CMN, Turkish Airlines</span>
         </div>
         <div className="mx-3 col-4">
          <span>5h 25m</span>
          <h6 data-bs-toggle="tooltip" data-bs-placement="top" title="2h 10m layover, Istanbul Airport">1 stop,
           IST</h6>
         </div>

        </div>
        <div className="d-flex mt-4">
         <div className="col-1">
          <img width="40px"
           src="https://static.tacdn.com/img2/flights/airlines/logos/100x100/api_default.png"
           alt="Turkish Airlines" />

         </div>
         <div className="col-7 ms-3">
          <h5 className="m-0">3:10 AM - 7:35 PM</h5>
          <span className="company-flight">AMM - CMN, Turkish Airlines</span>
         </div>
         <div className="mx-3 col-4">
          <span>2h 25m</span>
          <h6 data-bs-toggle="tooltip" data-bs-placement="top" title="2h 10m layover, Istanbul Airport">1 stop,
           IST</h6>
         </div>

        </div>
       </div>
       <div className='col-sm-12 col-md-12 col-lg-4 col-xl-4'>
        <div className='text-center py-2'>
         <span className='text-black h4'>$ 193</span>
         <a href='#' className='btn btn-detail mt-3 w-100'>View Detail</a>

        </div>

       </div>
      </div>

      <div className='m-0 border row bg-white mb-2 box p-2'>
       <div className='col-sm-12 col-md-12 col-lg-8 col-xl-8 p-0 m-0 position-relative'>
        <div className="d-flex">
         <div className="col-1">
          <img width="40px" src="https://static.tacdn.com/img2/flights/airlines/logos/100x100/EgyptAir.png" alt="Turkish Airlines" />

         </div>
         <div className="col-7 ms-3">
          <h5 className="m-0">4:10 AM - 9:35 PM</h5>
          <span className="company-flight">AMM - CMN, Turkish Airlines</span>
         </div>
         <div className="mx-3 col-4">
          <span>5h 25m</span>
          <h6 data-bs-toggle="tooltip" data-bs-placement="top" title="2h 10m layover, Istanbul Airport">1 stop, IST</h6>
         </div>

        </div>

        <div className="d-flex mt-4">
         <div className="col-1">
          <img width="40px" src="https://static.tacdn.com/img2/flights/airlines/logos/100x100/EgyptAir.png" alt="Turkish Airlines" />
         </div>
         <div className="col-7 ms-3">
          <h5 className="m-0">7:10 AM - 6:35 PM</h5>
          <span className="company-flight">AMM - CMN, Turkish Airlines</span>
         </div>
         <div className="mx-3 col-4">
          <span>12h 35m</span>
          <h6 data-bs-toggle="tooltip" data-bs-placement="top" title="2h 10m layover, Istanbul Airport">1 stop, IST</h6>
         </div>

        </div>
       </div>
       <div className='col-sm-12 col-md-12 col-lg-4 col-xl-4'>
        <div className='text-center py-2'>
         <span className='text-black h4'>$ 354</span>
         <a href='#' className='btn btn-detail mt-3 w-100'>View  Detail</a>

        </div>

       </div>
      </div>
      <Pagenation />
     </div>

     <div className="col-md-4 col-lg-4 col-xl-3 p-1 mt-3">
      <div className="position-sticky" style={{ top: '2rem' }}>
       <div className="p-2 mb-3 bg-white rounded border">
        <div className='mb-2'>
         <img className='w-100' src='https://media-cdn.tripadvisor.com/media/daodao/photo-l/16/fc/e3/94/photo4jpg.jpg' alt='Adds' />
        </div>
        <div className='mb-2'>
         <img className='w-100' src='https://s1.apideeplink.com/images/websites/mtuk.png' alt='Adds' />
        </div>
       </div>
      </div>
     </div>
    </div>
   </main>
   <Footer />
  </div>
 )
}
