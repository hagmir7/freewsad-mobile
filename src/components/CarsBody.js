import React from 'react'
import CarsCard from './CarsCard';
import CarsFilter from './CarsFilter';

export default function CarsBody() {

 const carInfo = [
  {
   name: 'Dacia', doors: 4, seats: 5, bags: 3, key: 1, img: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/dacia_bigster_concept_9hr00_14012021_3.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, mollitia.',
  },
  {
   name: 'Masirati', doors: 2, seats: 2, bags: 1, key: 2, img: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/dacia_bigster_concept_9hr00_14012021_3.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, mollitia.',
  },
  {
   name: 'Ferrari', doors: 2, seats: 2, bags: 2, key: 3, img: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/dacia_bigster_concept_9hr00_14012021_3.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, mollitia.',
  },
  {
   name: 'B M W', doors: 4, seats: 5, bags: 3, key: 4, img: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/dacia_bigster_concept_9hr00_14012021_3.jpg', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, mollitia.',
  }
 ]


 const carItems = carInfo.map(function (item) {
  return (
   < CarsCard
    name={item.name}
    img={item.img}
    description={item.description}
    doors={item.doors}
    seats={item.seats}
    bags={item.bags}
    key={item.key}

   />
  )

 })




 return (
  <main className="container p-0 col-sm-12 col-md-12 col-lg-10 col-xl-10 mt-3 pb-5">
   <div id="accordion">
    <div className="card mt-2 border">
     <h3 className="mt-2 mx-2 h5">Cheap rental cars in Casablanca</h3>
     <div className="d-flex gap-2 align-items-center justify-content-center mt-3">
      <div> <input type="text" placeholder="City" className="form-control" /> </div>
      <div> <input type="date" name="" id="" className="form-control" /> </div>
      <div> <input type="date" name="" id="" className="form-control" /> </div>
      <div> <input type="search" name="" id="" placeholder="Search..." className="form-control" /> </div>
     </div>
     <div className="card-body row">
      <CarsFilter />
      <div className="col-sm-12 col-md-12 col-lg-9 col-xl-9">
       {carItems}
      </div>
     </div>
    </div>
   </div>
  </main>
 )
}
