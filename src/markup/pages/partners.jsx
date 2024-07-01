import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'
import ServiceFilter1 from '../element/service-filter1'
import Pagination from 'react-bootstrap/Pagination';

const images = require.context('../../assets/images/partners', true);
const imageList = images.keys().map(image => images(image));


console.log(imageList)

const aboutbg = require('./../../assets/images/photo/slide4.jpeg');
// const casebg = require('./../../assets/images/background/image-14.jpg');

const Partners = () => {

    return (
        <>
            <Header />

            {/* <!--Search Popup--> */}

            {/* <!-- Page Banner Section --> */}
            <section class="page-banner">
                <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                <div class="bottom-rotten-curve alternate"></div>

                <div class="auto-container">
                    <h1>Partners</h1>
                    <ul class="bread-crumb clearfix">
                        <li><Link to={'/#'}>Home</Link></li>
                        <li class="active">Partners</li>
                    </ul>
                </div>
            </section>


            <section class="services-section-three style-two">
                <div class="auto-container">
                    <div class="row">
                        {/* <!-- Services Block One --> */}
                        {imageList.map(item => (
                            <div class="service-block-one col-lg-4">
                                <div class="inner-box">
                                    <div class="icon">
                                        {/* <span class="flaticon-team"></span> */}
                                        <img src={item} alt="" />
                                        {/* <span class="round-shape"></span> */}
                                    </div>
                                    {/* <h3>Job Matching & Placement</h3> */}
                                    <div class="text"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>





            <Footer />
        </>
    )
}

export default Partners;