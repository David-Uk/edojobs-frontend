import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'
import GoogleMaps from "simple-react-google-maps";

const aboutbg = require('./../../assets/images/photo/slide8.jpeg');




class Contact extends Component {


    render() {
        return (
            <>
                <Header />


                {/* <!--Search Popup--> */}


                {/* <!-- Page Banner Section --> */}
                <section class="page-banner">
                    <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                    <div class="bottom-rotten-curve alternate"></div>

                    <div class="auto-container">
                        <h1>Contact Us</h1>
                        <ul class="bread-crumb clearfix">
                            <li><Link to={'/#'}>Home</Link></li>
                            <li class="active">Contact</li>
                        </ul>
                    </div>

                </section>

                {/* <!-- Map Section --> */}
                {/* <!-- Map Section --> */}
                <section class="map-section">
                    <div class="map-column">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15862.248533784941!2d5.6022972389099674!3d6.32109920265195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d3bc677503a3%3A0xecd860a19946b152!2sEdo%20State%20Government%20House!5e0!3m2!1sen!2sng!4v1713250764809!5m2!1sen!2sng"
                            width="100%"
                            height="450" style={{ border: 0 }}
                            // allowFullscreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </section>

                {/* <!-- Contact Section Two --> */}
                <section class="contact-section-two">
                    <div class="auto-container">
                        <div class="contact-info-area">
                            <div class="contact-info">
                                <div class="row">
                                    <div class="info-column col-lg-4">
                                        <div class="icon-box">
                                            <div class="icon"><span class="flaticon-email-6"></span></div>
                                            <h3>Email Address</h3>
                                            <ul>
                                                <li><Link to={'/mailto:edojobs@edostate.gov.ng'}>edojobs@edostate.gov.ng</Link></li>
                                                {/* <li><Link to={'/mailto:info@webmail.com'}>jobs@exampleco.com</Link></li> */}
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="info-column col-lg-4">
                                        <div class="icon-box">
                                            <div class="icon"><span class="flaticon-call-1"></span></div>
                                            <h3>Phone Number</h3>
                                            <ul>
                                                <li><Link to={'/tel:+2349013722775'}>+2349013722775</Link></li>
                                                {/* <li><Link to={'/tel:+908(097)56476576'}>+908(097) 564 765 76</Link></li> */}
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="info-column col-lg-4">
                                        <div class="icon-box">
                                            <div class="icon"><span class="flaticon-location"></span></div>
                                            <h3>Office Address</h3>
                                            <ul>
                                                <li>Edojobs Office<br />Edo State Government House </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>






                <Footer />
            </>
        )
    }
}
export default Contact;