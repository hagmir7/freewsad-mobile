import React from 'react'

export default function CarsFilter() {
 return (
  <div className="col-sm-12 col-md-12 col-lg-3 col-xl-3 d-flex">
   <div className="h-100 w-100 mb-3 bg-white border w-100">
    <h4 className="h5 m-2">Filter by :</h4>
    <table className="table w-100">
     <tbody>

      <tr><th>Seats</th><td></td> </tr>
      <tr>
       <td><input type='checkbox' /> 2 Seat</td>
       <td></td>
      </tr>
      <tr>
       <td><input type='checkbox' /> 4 Seats</td>
       <td></td>
      </tr>

      <tr>
       <td><input type='checkbox' /> 5 Seats</td>
       <td></td>
      </tr>
      <tr>
       <td><input type='checkbox' /> 6 Seats</td>
       <td></td>
      </tr>

      <tr><th>Bags</th> <th></th></tr>
      <tr>
       <td><input type='checkbox' /> 1Bag</td>
       <td></td>
      </tr>
      <tr>
       <td><input type='checkbox' /> 2Bag</td>
       <td></td>
      </tr>
      <tr>
       <td><input type='checkbox' /> 3bag</td>
       <td></td>
      </tr>
      <tr>
       <td><input type='checkbox' /> +3bag</td>
       <td></td>
      </tr>
      <tr />

      <tr><th>Doors</th> <th></th></tr>
      <tr>
       <td><input type='checkbox' /> 2 Doors</td>
       <td></td>
      </tr>
      <tr>
       <td><input type='checkbox' /> 4 Doors</td>
       <td></td>
      </tr>

      <tr><th>Brand</th> <th></th></tr>

      <tr>
       <td><input type='checkbox' /> Ferrari</td>
       <td><img width="30px" src="https://logos-world.net/wp-content/uploads/2020/05/Ferrari-Logo-700x394.png" alt="Ferrari" /></td>
      </tr>

      <tr>
       <td><input type='checkbox' /> Masirati</td>
       <td><img width="30px" src="https://logos-world.net/wp-content/uploads/2021/04/Maserati-Logo-700x394.png" alt="Masirati" /></td>
      </tr>

      <tr>
       <td><input type='checkbox' /> Dacia</td>
       <td>
        <img width="30px" src="https://seeklogo.com/images/D/dacia-logo-EE7F7FB82B-seeklogo.com.png" alt="Dacia" />
       </td>
      </tr>
     </tbody>
    </table>
   </div>
  </div>
 )
}
