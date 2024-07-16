import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../../layout/header'
import Footer from '../../layout/footer'
import { Helmet } from 'react-helmet';

const aboutbg = require('./../../../assets/images/sublets/images/msme/005.jpg');
const addbg = require('./../../../assets/images/background/image-15.jpg');



const MSME = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Edo Food and Agricultural Cluster (EdoFAC) is the Agricultural unit of Edojobs leveraging Agriculture for job creation in the State" />
                <title>Edojobs Official Website | Edo MSME</title>
            </Helmet>
            <Header />

            {/* Page Banner Section */}
            <section class="page-banner">
                <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                <div class="bottom-rotten-curve alternate"></div>

                <div class="auto-container">
                    <h1>MSME</h1>
                    <ul class="bread-crumb clearfix">
                        <li><Link to={'/'}>Home</Link></li>
                        <li class="active">MSME</li>
                    </ul>
                </div>
            </section>

            {/* Details */}
            <div class="portfolio-details">
                <div class="auto-container">
                    <div class="top-content">
                        <div class="image-box"><img src={require('../../../assets/images/sublets/images/msme/001.jpg')} alt="" /></div>
                        {/* <div class="single-project-info">02                            <h3>Project Details</h3>
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
                        <h2>MSME<br /></h2>
                    </div>
                    <div class="text">The Edo State MSME Fund, set up by the Edo State Government,in collaboration with the Bank of Industry (BOI), and managed by the agency, is focused on fostering economic growth and supporting local businesses in Edo State.</div>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="image-box"><img src={require('../../../assets/images/sublets/images/msme/002.jpg')} alt="" /></div>
                        </div>
                        <div class="col-lg-6">
                            <div class="image-box"><img src={require('../../../assets/images/sublets/images/msme/003.jpg')} alt="" /></div>
                        </div>
                    </div>
                    <div class="text">The primary objective of this initiative is to empower entrepreneurs and small business owners in Edo State by offering them access to single-digit interest financing options. Through this program, eligible businesses (SME) can secure loans
                        ranging from 1 million to 10 million Naira, depending on their specific business needs and acceptable risk assessment by the Participating Financial Institutions. Additionally, informal businesses (Nano & Micro), who form a vital part of the local economy are provided with
                        loan options ranging from 100,000 to 500,000 Naira at favorable interest rates. So far a total of 1,720 businesses have benefited from this scheme across Edo State.
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

export default MSME;