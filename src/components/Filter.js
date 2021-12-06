import React from "react";

function Filter() {
    return (
        <div className="col-md-3 mt-3 d-none d-sm-none d-lg-none d-xl-block">
            <div className="position-sticky" style={{ top: "2rem" }}>
                <div className="p-2 mb-3 bg-white border">
                    {/* Filter */}
                    <h4 className="h5">Filter by :</h4>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>Your previous filters</th>
                            </tr>
                            <tr>
                                <td><input type='checkbox' /> £0 - £42</td>
                                <td>145</td>
                            </tr>
                            {/* Budge */}
                            <tr>
                                <th className='w-100'>Your budget (per night)</th>
                            </tr>
                            <tr>
                                <td><input type='checkbox' /> £0 - £42</td>
                                <td>145</td>
                            </tr>
                            <tr>
                                <td><input type='checkbox' /> £0 - £42</td>
                                <td>145</td>
                            </tr>
                            <tr>
                                <td><input type='checkbox' /> £0 - £42</td>
                                <td>145</td>
                            </tr>
                            <tr>
                                <td><input type='checkbox' /> £0 - £42</td>
                                <td>145</td>
                            </tr>
                            <tr>
                                <td><input type='checkbox' /> £0 - £42</td>
                                <td>145</td>
                            </tr>
                            {/* Popular filters */}
                            <tr>
                                <th className='w-100'>Popular filters</th>
                            </tr>
                            <tr>
                                <td><input type='checkbox' /> Breakfast included</td>
                                <td>145</td>
                            </tr>
                            <tr>
                                <td><input type='checkbox' /> Hotels</td>
                                <td>45</td>
                            </tr>
                            <tr>
                                <td><input type='checkbox' /> Free WiFi</td>
                                <td>54</td>
                            </tr>
                            <tr>
                                <td><input type='checkbox' /> Bed and breakfasts</td>
                                <td>32</td>
                            </tr>
                            <tr>
                                <td><input type='checkbox' /> Hostels</td>
                                <td>56</td>
                            </tr>
                            {/* Star Rating */}
                            <tr>
                                <th className='w-100'>Star rating</th>
                            </tr>
                            <tr>
                                <td><input type='checkbox' /> 1 star</td>
                                <td>145</td>
                            </tr>
                            <tr>
                                <td><input type='checkbox' /> 2 stars</td>
                                <td>45</td>
                            </tr>
                            <tr>
                                <td><input type='checkbox' /> 3 stars</td>
                                <td>54</td>
                            </tr>
                            <tr>
                                <td><input type='checkbox' /> 4 stars</td>
                                <td>32</td>
                            </tr>
                            <tr>
                                <td><input type='checkbox' /> 5 stars</td>
                                <td>56</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Filter;