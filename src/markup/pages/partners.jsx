import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'
import ServiceFilter1 from '../element/service-filter1'


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

            <Footer />
        </>
    )
}

export default Partners;