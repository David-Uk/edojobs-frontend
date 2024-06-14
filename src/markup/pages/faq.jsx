import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import FaqAccordion from '../element/faq-accordion'
import Footer from '../layout/footer'
import { Helmet } from 'react-helmet';


const aboutbg = require('./../../assets/images/photo/faq.jpg');



class Faq extends Component {


    render() {
        return (
            <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <meta name="description" content="Frequently Asked Questions about Edo State Skills Development Agency" />
                    <title>Edojobs Official Website | FAQ</title>
                </Helmet>
                <Header />
                {/* <!--Search Popup--> */}


                {/* <!-- Page Banner Section --> */}
                <section class="page-banner">
                    <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                    <div class="bottom-rotten-curve alternate"></div>

                    <div class="auto-container">
                        <h1>Faq's</h1>
                        <ul class="bread-crumb clearfix">
                            <li><Link to={'/#'}>Home</Link></li>
                            <li class="active">Faq's</li>
                        </ul>
                    </div>

                </section>
                {/* <!--End Banner Section --> */}

                <FaqAccordion />




                <Footer />
            </>
        )
    }
}
export default Faq;