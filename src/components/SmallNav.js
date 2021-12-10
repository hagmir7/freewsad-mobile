import React from 'react'

export default function SmallNav() {
 return (
  <div className=" overflow-hidden border rounded d-flex mt-1 w-100 bg-white mb-2">
   <div className='p-2 header-link '>
    <span>CAK</span>&#xa0;&#xa0;
    <span><svg xmlns="http://www.w3.org/2000/svg" fontWeight='800' color='#0071c2' width="16" height="16" fill="currentColor" className="bi bi-arrow-left-right" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z" /></svg></span>&#xa0;&#xa0;
    <span>DEL</span>
   </div>
   <div className="p-2 header-link border-start" style={{ width: '32%' }}>
    Sun, 05 Des - Fri, 10 Dec
   </div>

   <div className='p-2 header-link border-start d-flex d-flex align-items-center justify-content-center'>
    <svg xmlns="http://www.w3.org/2000/svg" color='#0071c2' width="16" height="16" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16"><path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /><path fillRule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" /><path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" /></svg>
    &#xa0;1<span className="d-none d-lg-block d-xl-block">&#xa0; Passenger </span>
   </div>

   <div className='log-in p-2 header-link d-flex align-items-center justify-content-center'>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" /></svg>
    &#xa0; <span className="d-none d-lg-block d-xl-block">Modify search</span>
   </div>
  </div>
 )
}
