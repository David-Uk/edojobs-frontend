import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../../layout/header'
import Footer from '../../layout/footer'
import { Helmet } from 'react-helmet';

const aboutbg = require('./../../../assets/images/sublets/images/entrepreneurship/005.jpg');
const addbg = require('./../../../assets/images/background/image-15.jpg');



const Entrepreneurship = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="This initiative is concerned with entrepreneurship development. It was set-up to enhance the skills and entrepreneurial knowledge of Edo business owners to boost the pace at which new ventures are created" />
                <title>Edojobs Official Website | Entrepreneurship</title>
            </Helmet>
            <Header />

            {/* Page Banner Section */}
            <section class="page-banner">
                <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                <div class="bottom-rotten-curve alternate"></div>

                <div class="auto-container">
                    <h1>Entrepreneurship</h1>
                    <ul class="bread-crumb clearfix">
                        <li><Link to={'/'}>Home</Link></li>
                        <li class="active">Entrepreneurship</li>
                    </ul>
                </div>
            </section>

            {/* Details */}
            <div class="portfolio-details">
                <div class="auto-container">
                    <div class="top-content">
                        <div class="image-box"><img src={require('../../../assets/images/sublets/images/entrepreneurship/015.jpg')} alt="" /></div>
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
                        <h2>Entrepreneurship<br /></h2>
                    </div>
                    <div class="text">
                        <p>This initiative is concerned with entrepreneurship development. It was set-up to enhance the skills and entrepreneurial knowledge of Edo business owners to boost the pace at which new ventures are created and sustained within the state.</p>
                        <p>This unit has a target to build an MSME community delivering services to 20,000 active community members out of which 500 members become formalised and grow their revenue to 10,000,000 by 2025.</p>
                    </div>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="image-box"><img src={require('../../../assets/images/sublets/images/entrepreneurship/018.jpg')} alt="" /></div>
                        </div>
                        <div class="col-lg-6">
                            <div class="image-box"><img src={require('../../../assets/images/sublets/images/entrepreneurship/019.jpg')} alt="" /></div>
                        </div>
                    </div>
                    <div class="text">
                        <p>The Entrepreneurship development unit also manages the Edo Jobs Business Community, a vibrant community of entrepreneurs with over 2,000 members. The Edojobs Business community creates and shares growth opportunities while promoting collaboration among business owners in Edo State.</p>
                        <p>The unit has successfully implemented programs and initiatives within the areas of capacity building, access to market, access to finance and mentorship for Edo
                            businesses, all of which are based on the Edojobs Entrepreneurship Department's
                            objectives to:</p>
                        <ul style={{ listStyleType: "circle !important", marginLeft: '1.5em' }}>
                            <li>Build an Edo State where business owners have access to resources and support to
                                grow measurable and sustainable revenue.</li>
                            <li>Enhance the skills and entrepreneurial knowledge of Edo business owners to boost
                                the pace at which new ventures are created and sustained.</li>
                            <li>Increase the number of Micro, Small and Medium Enterprises (MSMEs) in Edo State.</li>
                        </ul>
                        <p>
                            Some of the key entrepreneurship development programs that have been implemented
                            between 2022, till date includes the following:
                        </p>
                        <ul style={{ listStyleType: "circle !important", marginLeft: '1.5em' }}>
                            <li>Edojobs ICSS Entrepreneurship Training Program</li>
                            <li>Edojobs Business Digitalization Program</li>
                            <li>Edojobs Chairman's Business Milestone Award</li>
                            <li>Business Networking Series - Powered by Edojobs</li>
                            <li>Edojobs Business Community</li>
                            <li>Enterprise and Leadership Program</li>
                            <li>Edo State MSME Fund</li>
                            <li>Edojobs E-Commerce Readiness Program on Product Photography, Packaging and
                                Customer Relations</li>
                            <li>Edo Online Marketplace</li>
                            <li>Transforming Nigerian Youth Program</li>
                        </ul>

                    </div>
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

export default Entrepreneurship