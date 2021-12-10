import React from 'react'

export default function FlightFilter() {
 return (
  <div className="col-md-3 mt-3 d-none d-sm-none d-lg-none d-xl-block">
   <div className="position-sticky" style={{ top: '2rem' }}>
    <div className="h-100 p-3 mb-3 bg-white border">
     <h4 className="h5">Filter by :</h4>
     <table className="table">
      <tbody>

       <tr><th>Stops</th><td></td></tr>
       <tr>
        <td><input type='checkbox' /> NonStop</td>
        <td>$00</td>
       </tr>
       <tr>
        <td><input type='checkbox' /> Stop</td>
        <td>$145</td>
       </tr>
       <tr>
        <td><input type='checkbox' /> +2 Stops</td>
        <td>$145</td>
       </tr>
       <tr><th>COVED-19 Policies</th><th></th></tr>
       <tr><td><input type='checkbox' /> Flexible Changes</td><td></td></tr>
       <tr><td><input type='checkbox' /> Flexible Cancellations</td><td></td></tr>
       <tr><th>Airlines</th><th></th></tr>
       <tr><th className="h6">Select all airlines</th><th></th></tr>
       <tr>
        <td><input type='checkbox' /> Egyptair</td>
        <td>$435</td>
       </tr>
       <tr>
        <td><input type='checkbox' /> Emirates</td>
        <td>$345</td>
       </tr>
       <tr>
        <td><input type='checkbox' /> Pegasus</td>
        <td>$564</td>
       </tr>
       <tr>
        <td><input type='checkbox' /> Qatar Airways</td>
        <td>$432</td>
       </tr>
       <tr><th>Alliance</th><th></th></tr>

       <tr>
        <td><input type='checkbox' /> Oneworld</td>
        <td><img src="https://static.tacdn.com/img2/flights/resultFilter/oneworld.png" alt="Oneworld" /></td>
       </tr>

       <tr>
        <td><input type='checkbox' /> Sky Team</td>
        <td><img src="https://static.tacdn.com/img2/flights/resultFilter/skyteam.png" alt="Sky Team" /></td>
       </tr>

       <tr>
        <td><input type='checkbox' /> Star Alliance</td>
        <td><img src="https://static.tacdn.com/img2/flights/resultFilter/staralliance.png" alt="Star Alliance" /></td>
       </tr>
      </tbody>
     </table>
    </div>
   </div>
  </div>

 )
}
