import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../../layout/header'
import Footer from '../../layout/footer'
import { Helmet } from 'react-helmet';

const aboutbg = require('./../../../assets/images/sublets/images/vocationalskills/028.jpg');
const addbg = require('./../../../assets/images/background/image-15.jpg');



const VocationalSkills = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="The Vocational Training and Skills Development unit of the Edo State Skills Development Agency is responsible for implementing vocational skills training" />
                <title>Edojobs Official Website | Vocational Skills</title>
            </Helmet>
            <Header />

            {/* Page Banner Section */}
            <section class="page-banner">
                <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                <div class="bottom-rotten-curve alternate"></div>

                <div class="auto-container">
                    <h1>Vocational Skills</h1>
                    <ul class="bread-crumb clearfix">
                        <li><Link to={'/'}>Home</Link></li>
                        <li class="active">Vocational Skills</li>
                    </ul>
                </div>
            </section>

            {/* Details */}

            <div class="portfolio-details">
                <div class="auto-container">
                    <div class="top-content">
                        <div class="image-box"><img src={require('../../../assets/images/sublets/images/vocationalskills/017.jpg')} alt="" /></div>
                        {/* <div class="single-project-info">
                            <h3>Project Details</h3>
                            <ul>
                                <li> </li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <table class="cart-table">
                                <tbody>
                                    <tr>
                                        <td><strong>Project Name:</strong></td>
                                        <td>Brixer Consultancy</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Date:</strong></td>
                                        <td>24th March 2020</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Author:</strong></td>
                                        <td>Rosalina D. William</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Keyword:</strong></td>
                                        <td>Business, Consultancy</td>
                                    </tr>
                                </tbody>
                            </table>
                            <ul class="social-links clearfix">
                                <li><Link to={'/#'}><span class="fab fa-facebook-f"></span></Link></li>
                                <li><Link to={'/#'}><span class="fab fa-twitter"></span></Link></li>
                                <li><Link to={'/#'}><span class="fab fa-vimeo-v"></span></Link></li>
                                <li><Link to={'/#'}><span class="fab fa-instagram"></span></Link></li>
                            </ul>
                        </div> */}
                    </div>

                    <div class="sec-title">
                        {/* <div class="sub-title">Consulting Business</div> */}
                        <h2>Vocational<br />Skills</h2>
                    </div>
                    <div class="text">The Vocational Training and Skills Development unit of the Edo State Skills Development Agency is responsible for implementing vocational skills training in manufacturing and construction trades. It also oversees apprenticeship and traineeship programs for aspiring artisans. Some of the programs offered include fashion design, catering, Hair styling, leatherworks, POP and wallpaper installation, catering, solar installation, and GSM and laptop repair training. These programs are conducted in collaboration with local government authorities, and international organizations that support vocational skills. </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="image-box"><img src={require('../../../assets/images/sublets/images/vocationalskills/026.jpg')} alt="" /></div>
                        </div>
                        <div class="col-lg-6">
                            <div class="image-box"><img src={require('../../../assets/images/sublets/images/vocationalskills/007.jpg')} alt="" /></div>
                        </div>
                    </div>
                    <div class="text">We have skills centers across Edo North, South, and Central, where residents can access these training programs at zero cost.</div>
                    <div class="project-post-pagination">
                        <div class="wrapper-box">

                            {/* <div class="prev-post">
                                <h5> Previous Post</h5>
                                <h4>UX Design Means</h4>
                            </div> */}

                            {/* <a href='' class="page-view"><span class="icon">Learn More</span></a> */}

                            {/* <a style={{
                                background: 'green',
                                textAlign: 'center',
                                color: 'white',
                                padding: '1.2em',
                                borderRadius: '1.5em',
                                margin: '0 auto'
                            }} className='' href="https://edocreativehub.com">Learn More</a> */}
                            {/* <div class="next-post">
                                <h5>Next Topic </h5>
                                <h4>Business Goal Brings</h4>
                            </div> */}

                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default VocationalSkills;