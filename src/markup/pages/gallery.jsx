import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../../layout/header'
import Footer from '../../layout/footer'
import { Helmet } from 'react-helmet';

const aboutbg = require('./../../../assets/images/sublets/images/jobcenter/004.jpg');
const addbg = require('./../../../assets/images/background/image-15.jpg');



const Gallery = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="View Our Gallery" />
                <title>Edojobs Official Website | Gallery</title>
            </Helmet>
            <Header />

            {/* Page Banner Section */}
            <section class="page-banner">
                <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                <div class="bottom-rotten-curve alternate"></div>

                <div class="auto-container">
                    <h1>Edo Job Center</h1>
                    <ul class="bread-crumb clearfix">
                        <li><Link to={'/'}>Home</Link></li>
                        <li class="active">Edojob Center</li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Gallery;