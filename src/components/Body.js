import React from "react";
import Card from '../components/Card';
import Agoda from '../assets/img/agoda.jpg';
import Booking from '../assets/img/booking.png';
import Skyscanner from '../assets/img/Skyscanner.jpg';
import Pagention from "./Pagination";
import SmallNav from "./SmallNav";

function Body() {
    // JSON Date
    const info = [
        { id: '1', title: 'Booking', companyImg: Booking, price: '1,230', oldePrice: '3,090', reviews: '543', website: 'https://www.booking.com', image: 'https://media-cdn.tripadvisor.com/media/photo-s/1d/9c/f4/b4/public-meeting-room.jpg' },
        { id: '2', title: 'Agoda', companyImg: Agoda, price: '230', oldePrice: '390', reviews: '64', website: 'https://www.agoda.com', image: 'https://media-cdn.tripadvisor.com/media/photo-s/1c/d6/67/2c/exterior.jpg' },
        { id: '3', title: 'Skyscanner', companyImg: Skyscanner, price: '299', oldePrice: '399', reviews: '543', website: 'https://www.skyscanner.com', image: 'https://media-cdn.tripadvisor.com/media/photo-s/13/a1/4a/83/pod-39-hotel.jpg' },
        { id: '4', title: 'Kixby.', companyImg: 'https://static.tacdn.com/img2/branding/hotels/OfficialSite_384164.png', price: '299', oldePrice: '399', reviews: '543', website: 'https://www.kixby.com', image: 'https://media-cdn.tripadvisor.com/media/photo-s/10/85/b2/3d/pod-51-hotel.jpg' },
        { id: '5', title: 'The Gallivant Times Square', companyImg: 'https://static.tacdn.com/img2/branding/hotels/Snaptravel_384x164.png', price: '600', oldePrice: '899', reviews: '32', website: 'https://www.skyscanner.com', image: 'https://media-cdn.tripadvisor.com/media/photo-s/09/06/de/9e/deluxe-double-double-room--v89167.jpg' },
        { id: '6', title: '1 Hotel Central Park', companyImg: 'https://static.tacdn.com/img2/branding/hotels/expedia2021_384164.png', price: '200', oldePrice: '499', reviews: '45', website: 'https://www.skyscanner.com', image: 'https://media-cdn.tripadvisor.com/media/photo-s/1b/e3/8c/b9/suite.jpg' },
        { id: '7', title: '15% less than usual Crowne Plaza HY36 Midtown Manhattan', companyImg: 'https://static.tacdn.com/img2/branding/hotels/Logo_Destinia_AT.GIF.png', price: '321', oldePrice: '399', reviews: '543', website: 'https://www.skyscanner.com', image: 'https://media-cdn.tripadvisor.com/media/photo-s/1d/11/75/57/deluxe-suite.jpg' },

    ]

    const data = info.map(function (item) {
        return (
            <Card company={item.companyImg}
                reviews={item.reviews}
                title={item.title}
                website={item.website}
                price={item.price}
                oldePrice={item.oldePrice}
                image={item.image}
                key={item.id}
            />

        )
    });
    return (
        <div className="col-md-8 col-lg-8 col-xl-6 p-3 mt-3 ">
           

            <SmallNav />
            {data}
            
            <Pagention />
           
        </div>

    )
}

export default Body;