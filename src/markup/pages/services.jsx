import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'
import ServiceFilter1 from '../element/service-filter1'


const aboutbg = require('./../../assets/images/photo/slide4.jpeg');
// const casebg = require('./../../assets/images/background/image-14.jpg');

const Services = () => {

    return (
        <>
            <Header />

            {/* <!--Search Popup--> */}

            {/* <!-- Page Banner Section --> */}
            <section class="page-banner">
                <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                <div class="bottom-rotten-curve alternate"></div>

                <div class="auto-container">
                    <h1>What We Do</h1>
                    <ul class="bread-crumb clearfix">
                        <li><Link to={'/#'}>Home</Link></li>
                        <li class="active">Services</li>
                    </ul>
                </div>

            </section>
            {/* <!--End Banner Section --> */}


            {/* <!-- Services Section Three --> */}
            <section class="services-section-three style-two">
                <div class="auto-container">
                    <div class="row">
                        {/* <!-- Services Block One --> */}

                        <div class="service-block-one col-lg-4">
                            <div class="inner-box">
                                <div class="icon"><span class="flaticon-team"></span><span class="round-shape"></span></div>
                                <h3>Job Matching & Placement</h3>
                                <div class="text"></div>
                            </div>
                        </div>
                        {/* <!-- Services Block One --> */}
                        <div class="service-block-one col-lg-4">
                            <div class="inner-box">
                                <div class="icon"><span class="flaticon-money"></span><span class="round-shape"></span></div>
                                <h3>Vocational Skills Training</h3>
                                <div class="text"></div>
                            </div>
                        </div>
                        {/* <!-- Services Block One --> */}
                        <div class="service-block-one col-lg-4">
                            <div class="inner-box">
                                <div class="icon"><span class="flaticon-assets"></span><span class="round-shape"></span></div>
                                <h3>Entrepreneurship Development</h3>
                                <div class="text"></div>
                            </div>
                        </div>
                        {/* <!-- Services Block One --> */}
                        <div class="service-block-one col-lg-4">
                            <div class="inner-box">
                                <div class="icon"><span class="flaticon-world"></span><span class="round-shape"></span></div>
                                <h3>Professional Career Counseling</h3>
                                <div class="text"></div>
                            </div>
                        </div>
                        {/* <!-- Services Block One --> */}
                        <div class="service-block-one col-lg-4">
                            <div class="inner-box">
                                <div class="icon"><span class="flaticon-money-1"></span><span class="round-shape"></span></div>
                                <h3>Internship & Apprenticeship</h3>
                                <div class="text"></div>
                            </div>
                        </div>
                        {/* <!-- Services Block One --> */}
                        <div class="service-block-one col-lg-4">
                            <div class="inner-box">
                                <div class="icon"><span class="flaticon-notebook"></span><span class="round-shape"></span></div>
                                <h3>Computer | Digital Skills</h3>
                                <div class="text"></div>
                            </div>
                        </div>
                        <div class="service-block-one col-lg-4">
                            <div class="inner-box">
                                <div class="icon"><span class="flaticon-notebook"></span><span class="round-shape"></span></div>
                                <h3>Business Advisory Support</h3>
                                <div class="text"></div>
                            </div>
                        </div>
                        <div class="service-block-one col-lg-4">
                            <div class="inner-box">
                                <div class="icon"><span class="flaticon-notebook"></span><span class="round-shape"></span></div>
                                <h3>Employer Engagement & Advisory</h3>
                                <div class="text"></div>
                            </div>
                        </div>
                        <div class="service-block-one col-lg-4">
                            <div class="inner-box">
                                <div class="icon"><span class="flaticon-notebook"></span><span class="round-shape"></span></div>
                                <h3>Access to Grant & Loan</h3>
                                <div class="text"></div>
                            </div>
                        </div>
                        <div class="service-block-one col-lg-4">
                            <div class="inner-box">
                                <div class="icon"><span class="flaticon-notebook"></span><span class="round-shape"></span></div>
                                <h3>Best Agricultural Practices</h3>
                                <div class="text"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Case Studies --> */}
            {/* <ServiceFilter1 /> */}


            <Footer />
        </>
    )
}

export default Services;