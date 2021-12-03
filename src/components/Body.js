import React from "react";

function Body(){
    return(
        <div className="col-md-6 p-0">
            <a href='#'>
            <div className='m-0 border row p-0'>
                <div className='col-4 p-0 m-0'>
                <img width='100%' height='100%' className='cover' src="https://khamsat.hsoubcdn.com/images/services/1437883/dc5052798db669e7e208d54122eab458_thumb.jpg" />
                </div>
                <div className='col-8'>
                    <h5 className='text-black'>This is Title</h5>
                    <span className='text-black'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis autem enim veniam dolore molestias,
                    </span><br/>
                    <a href='#' className='btn rounded-pill btn-detail'>View  Detail</a>
                </div>
            </div>
            </a>
            <a href='#'>
            <div className='m-0 border row p-0'>
                <div className='col-4 p-0 m-0'>
                <img width='100%' height='100%' className='cover' src="https://khamsat.hsoubcdn.com/images/services/1437883/dc5052798db669e7e208d54122eab458_thumb.jpg" />
                </div>
                <div className='col-4'>
                    <h5 className='text-black'>This is Title</h5>
                    <span className='text-black'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis autem enim veniam dolore molestias,
                    </span><br/>
                    
                </div>
                <div className='col-4 ' >
                    <span className='h4 text-black text-right w-100' style={{float:'right',textAlign: 'right'}}>MAD 2,331</span>
                    <a href='#' className='btn rounded-pill btn-detail mt-3'>View  Detail</a>
                </div>
            </div>
            </a>
        </div>

    )
}

export default Body;