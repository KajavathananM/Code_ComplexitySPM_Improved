import React, { Component } from 'react';
import '../../Assets/css/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard, faLaptop, faFilePdf, faInfo } from '@fortawesome/free-solid-svg-icons'

class Footer extends Component {

    render() {

        return (
            <footer className="mt-5">
                <div className="container-fluid bg-faded mt-5">
                    <div className="container">
                        <div className="row py-3">

                            <div className="col-md-4">

                                <div className="row py-2">
                                    <div className="col-sm-3 hidden-md-down">
                                        <FontAwesomeIcon icon={faTwitter} class="bg-circle bg-info" />
                                    </div>
                                    <div className="col-sm-9">
                                        <h4>Tweets</h4>
                                        Embed here?
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-4">

                                <div className="row py-2">
                                    <div className="col-sm-3 hidden-md-down">
                                        <FontAwesomeIcon icon={faAddressCard} class="bg-circle bg-info" />
                                    </div>
                                    <div className="col-sm-9">
                                        <h4>Contact us</h4>
                                        <p>Why not?</p>
                                    </div>
                                </div>
                                <div className="row py-2">
                                    <div className="col-sm-3 hidden-md-down">
                                        <FontAwesomeIcon icon={faLaptop} class="bg-circle bg-info" />
                                    </div>
                                    <div className="col-sm-9">
                                        <h4>Cookie policy</h4>
                                        <p className=" ">We use <a class=" " href="/# ">cookies </a></p>
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-4">

                                <div className="row py-2">
                                    <div className="col-sm-3 hidden-md-down">
                                        <FontAwesomeIcon icon={faFilePdf} class="bg-circle bg-danger" />
                                    </div>
                                    <div className="col-sm-9">
                                        <h4>Download pdf</h4>
                                        <p><a> You like print?</a></p>

                                    </div>
                                </div>

                                <div className="row py-2">
                                    <div className="col-sm-3 hidden-md-down">
                                        <FontAwesomeIcon icon={faInfo} class="bg-circle bg-warning" />
                                    </div>
                                    <div className="col-sm-9">
                                        <h4>Info</h4>
                                        About us.
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>


                <div className="container-fluid bg-primary py-3">
                    <div className="container">
                        <div className="row py-3">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center text-white">
                                Created for <a href="https://www.sliit.lk/" target="_blank">SLIIT &copy;2019</a>
                            </div>

                            <div className="col-md-3">
                                <div className="d-inline-block">
                                    <FontAwesomeIcon icon={faFacebookF} class="text-white bg-circle d-inline-block" size={"10px"} />
                                    <FontAwesomeIcon icon={faTwitter} class="text-white bg-circle d-inline-block" />
                                    <FontAwesomeIcon icon={faLinkedinIn} class="text-white bg-circle d-inline-block" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer >
        );
    }
}

export default Footer;