import React from "react";

function Side(){
    return(
        <div className="col-md-4 col-lg-4 col-xl-3 p-1 mt-3">
        <div className="position-sticky" style={{top: "2rem"}}>
            <div className="p-2 mb-3 bg-white rounded border">
            <h4 className="h4">ADS</h4>
                <div className='mb-2'>
                    <img className='w-100' src='https://media-cdn.tripadvisor.com/media/photo-s/1d/9c/f4/b4/public-meeting-room.jpg' alt='Adds' />
                </div>
                <div className='mb-2'>
                    <img className='w-100' src='https://media-cdn.tripadvisor.com/media/photo-s/1c/d6/67/2c/exterior.jpg' alt='Adds' />
                </div>
            </div>
        </div>
        </div>
    )
}

export default Side;