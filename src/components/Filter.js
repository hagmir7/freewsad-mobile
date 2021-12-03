import React from "react";

function Filter() {
    return (
        <div className="col-md-3">
            <div className="position-sticky" style={{ top: "2rem" }}>
                <div className="p-2 mb-3 bg-light border">
                    {/* Stops */}
                    <h4 className="fst-italic h5">Stops</h4>
                    <table class="table">
                        <tbody>
                            <tr>
                                <td><input type='checkbox' /> Nonstop</td>
                                <td>MAD 2,128</td>
                            </tr>
                            <tr>
                                <td><input type='checkbox' /> 1 Stop</td>
                                <td>MAD 3,128</td>
                            </tr>
                            <tr>
                                <td><input type='checkbox' /> +2 Stop</td>
                                <td>MAD 4,159</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Covid */}
                    <h4 className="fst-italic h5">COVED-19 Policies</h4>
                    <table class="table">
                        <tbody>
                            <tr>
                                <td><input type='checkbox' /> Nonstop</td>
                                <td>MAD 2,128</td>
                            </tr>
                            <tr>
                                <td><input type='checkbox' /> 1 Stop</td>
                                <td>MAD 3,128</td>
                            </tr>
                            <tr>
                                <td><input type='checkbox' /> +2 Stop</td>
                                <td>MAD 4,159</td>
                            </tr>
                        </tbody>
                    </table>
                    {/* Flight Times */}
                    <h4 className="fst-italic h5">Flight Times</h4>
                    <table className="table">
                        <tbody>
                            <tr>
                                <div className="slidecontainer">
                                    <input type="range" min="1" max="100" value="50" className="slider" id="myRange" />
                                    <p>Value: <span id="demo"></span></p>
                                </div>
                            </tr>
                            <tr>
                                <td><input type='checkbox' /> 1 Stop</td>
                                <td>MAD 3,128</td>
                            </tr>
                            <tr>
                                <td><input type='checkbox' /> +2 Stop</td>
                                <td>MAD 4,159</td>
                            </tr>
                        </tbody>
                    </table>


                </div>

                <div className="p-4">
                    <h4 className="fst-italic">Archives</h4>
                    <ol className="list-unstyled mb-0">
                        <li><a href="#">March 2021</a></li>
                        <li><a href="#">February 2021</a></li>
                        <li><a href="#">January 2021</a></li>
                        <li><a href="#">December 2020</a></li>
                        <li><a href="#">November 2020</a></li>
                        <li><a href="#">October 2020</a></li>
                        <li><a href="#">September 2020</a></li>
                        <li><a href="#">August 2020</a></li>
                        <li><a href="#">July 2020</a></li>
                        <li><a href="#">June 2020</a></li>
                        <li><a href="#">May 2020</a></li>
                        <li><a href="#">April 2020</a></li>
                    </ol>
                </div>

                <div className="p-4">
                    <h4 className="fst-italic">Elsewhere</h4>
                    <ol className="list-unstyled">
                        <li><a href="#">GitHub</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Facebook</a></li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Filter;