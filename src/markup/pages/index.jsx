import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Tab, } from 'react-bootstrap';
import Header from '../layout/header';
import Footer from '../layout/footer';
import HomeSlider1 from './../element/home-slider1';

import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

// import '../../assets/css/color.css';

import VideoPopup1 from './../element/video-popup1';
import PortfolioFilter1 from './../element/portfolio-filter1';
import HomeSlider2 from '../element/home-slider2';

const teambg1 = require('./../../assets/images/background/image-3.jpg');
const newsbg1 = require('./../../assets/images/background/image-4.jpg');
const wellcomebg1 = require('./../../assets/images/resource/image-1.jpg');

class Index extends Component {


    render() {
        return (
            <>
                <Header />

                {/* <!--Search Popup--> */}
                <div id="search-popup" class="search-popup">
                    <div class="close-search theme-btn"><span class="flaticon-cancel"></span></div>
                    <div class="popup-inner">
                        <div class="overlay-layer"></div>
                        <div class="search-form">
                            <form method="post" action="http://azim.commonsupport.com/Finandox/index.html">
                                <div class="form-group">
                                    <fieldset>
                                        <input type="search" class="form-control" name="search-input" value="" placeholder="Search Here" required />
                                        <input type="submit" value="Search Now!" class="theme-btn" />
                                    </fieldset>
                                </div>
                            </form>
                            <br />
                            <h3>Recent Search Keywords</h3>
                            <ul class="recent-searches">
                                <li><Link to={'/#'}>Finance</Link></li>
                                <li><Link to={'/#'}>Idea</Link></li>
                                <li><Link to={'/#'}>Service</Link></li>
                                <li><Link to={'/#'}>Growth</Link></li>
                                <li><Link to={'/#'}>Plan</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>


                <HomeSlider2 />




                <section class="welcome-section pt-0">
                    <div class="auto-container">
                        <div class="wrapper-box">
                            <div class="row m-0">
                                {/* <!-- Welcome Block One --> */}
                                <div class="welcome-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="inner-box">
                                        <div class="icon-box"><span class="flaticon-analysis"></span></div>
                                        <h2>Our Mission</h2>
                                        <div class="text">To provide supply of and attract demand for highly skilled workforce in Edo State.</div>
                                        {/* <div class="read-more"><Link to={'/#'}>Read More</Link></div> */}
                                    </div>
                                </div>
                                {/* <!-- Welcome Block One --> */}
                                <div class="welcome-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="inner-box"
                                    // style={{ backgroundImage: "url(" + wellcomebg1 + ")" }}
                                    >
                                        <div class="icon-box"><span class="flaticon-tax"></span></div>
                                        <h2>Our Vision</h2>
                                        <div class="text">To reduce and eradicate unemployment in Edo State through job creation and skills development.</div>
                                        {/* <div class="read-more"><Link to={'/#'}>Read More</Link></div> */}
                                    </div>
                                </div>
                                {/* <!-- Welcome Block One --> */}
                                <div class="welcome-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="inner-box">
                                        <div class="icon-box"><span class="flaticon-work-1"></span></div>
                                        <h2>Our Mandate</h2>
                                        <div class="text">
                                            Reduce unemployment through a coordinated and effective programme that will produce and supply highly skilled labour.
                                        </div>
                                        {/* <div class="read-more"><Link to={'/#'}>Read More</Link></div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* <!-- About Section Two --> */}
                {/* Services */}
                <section class="services-section-four services-section-about">
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <div class="sub-title">What we do</div>
                            <h3>Services</h3>
                        </div>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="icon-box">
                                    <div class="icon"><img src={require('../../assets/images/icons/icon-3.png')} alt="" /></div>
                                    <h4>JOB MATCHING & PLACEMENT</h4>
                                    <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="icon-box">
                                    <div class="icon"><img src={require('../../assets/images/icons/icon-21.png')} alt="" /></div>
                                    <h4>Finance Division</h4>
                                    <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="icon-box">
                                    <div class="icon"><img src={require('../../assets/images/icons/icon-4.png')} alt="" /></div>
                                    <h4>Insurance & Planning</h4>
                                    <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="icon-box">
                                    <div class="icon"><img src={require('../../assets/images/icons/icon-22.png')} alt="" /></div>
                                    <h4>Family Case</h4>
                                    <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="icon-box">
                                    <div class="icon"><img src={require('../../assets/images/icons/icon-5.png')} alt="" /></div>
                                    <h4>Financial Strategy</h4>
                                    <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="icon-box">
                                    <div class="icon"><img src={require('../../assets/images/icons/icon-23.png')} alt="" /></div>
                                    <h4>Financial Planning</h4>
                                    <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </>

        )
    }
}
export default Index;