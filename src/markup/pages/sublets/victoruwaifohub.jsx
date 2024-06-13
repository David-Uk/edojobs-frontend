import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../../layout/header'
import Footer from '../../layout/footer'

const aboutbg = require('./../../../assets/images/sublets/images/creativehub/016.jpg');
const addbg = require('./../../../assets/images/background/image-15.jpg');



const CreativeHub = () => {
    return (
        <>
            <Header />

            {/* Page Banner Section */}
            <section class="page-banner">
                <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                <div class="bottom-rotten-curve alternate"></div>

                <div class="auto-container">
                    <h1>Edo Creative Hub</h1>
                    <ul class="bread-crumb clearfix">
                        <li><Link to={'/'}>Home</Link></li>
                        <li class="active">Edo Creative Hub</li>
                    </ul>
                </div>
            </section>

            <div class="portfolio-details">
                <div class="auto-container">
                    <div class="top-content">
                        <div class="image-box"><img src={require('../../../assets/images/sublets/images/creativehub/017.jpg')} alt="" /></div>
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
                        <h2>Edo<br />Creative Hub</h2>
                    </div>
                    <div class="text">With the creative industry being a significant player in Nigerian economy and a huge contributor to the nation’s GDP next to oil and agriculture, the state government through Edojobs sought to provide a world class platform, learning facility and job centre where individuals from all sectors of the creative industry can connect, learn, practice and produce content while developing themselves.</div>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="image-box"><img src={require('../../../assets/images/sublets/images/creativehub/018.jpg')} alt="" /></div>
                        </div>
                        <div class="col-lg-6">
                            <div class="image-box"><img src={require('../../../assets/images/sublets/images/creativehub/014.jpg')} alt="" /></div>
                        </div>
                    </div>
                    <div class="text">Edo Creative hub was designed to help creatives to showcase their talent to the world and offer a place to build valuable connections, and serves as a hub of hubs with various partners collaborating to run an entertainment college, production academy, fashion school, videography, photography and digital art academy, personal development and soft-skills training programmes and so much more. This uni works towards bringing content creators together and providing for them a state-of-the-art studio and equipment that support the growth of creativity in Edo state. Over 1,000 users have benefitted from the online training and physical training with film making experts from France, Spain and Nigeria. </div>
                    <div class="project-post-pagination">
                        <div class="wrapper-box">

                            {/* <div class="prev-post">
                                <h5> Previous Post</h5>
                                <h4>UX Design Means</h4>
                            </div> */}

                            {/* <a href='' class="page-view"><span class="icon">Learn More</span></a> */}

                            <a style={{
                                background: 'green',
                                textAlign: 'center',
                                color: 'white',
                                padding: '1.2em',
                                borderRadius: '1.5em',
                                margin: '0 auto'
                            }} className='' href="https://edocreativehub.com">Learn More</a>
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

export default CreativeHub