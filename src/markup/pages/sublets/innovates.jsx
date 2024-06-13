import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../../layout/header'
import Footer from '../../layout/footer'

const aboutbg = require('./../../../assets/images/sublets/images/innovates/001.jpg');
const addbg = require('./../../../assets/images/background/image-15.jpg');



const EdoInnovates = () => {
    return (
        <>
            <Header />

            {/* Page Banner Section */}
            <section class="page-banner">
                <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                <div class="bottom-rotten-curve alternate"></div>

                <div class="auto-container">
                    <h1>Edo Innovates</h1>
                    <ul class="bread-crumb clearfix">
                        <li><Link to={'/'}>Home</Link></li>
                        <li class="active">Edo Innovates</li>
                    </ul>
                </div>
            </section>

            {/* Details */}
            <div class="portfolio-details">
                <div class="auto-container">
                    <div class="top-content">
                        <div class="image-box"><img src={require('../../../assets/images/sublets/images/innovates/002.jpg')} alt="" /></div>
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
                        <h2>Edo<br />Innovates</h2>
                    </div>
                    <div class="text">It is an initiative of the Edo State Skills Development Agency under His Excellency, Gov. Godwin Obaseki; commissioned on the 14th of June, 2018 by Professor Yemi Osinbanjo Vice President of the Federal Republic of Nigeria with the goal of raising an army of highly skilled IT  professionals who are able to leverage the digital economy to innovate, create jobs, drive economic growth and create new market through partnerships. Since its inception, Edo Innovates has trained over 42,000 individuals in technology and seeks to train 40,000 highly skilled IT talent within the next 5 years.</div>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="image-box"><img src={require('../../../assets/images/sublets/images/innovates/003.jpg')} alt="" /></div>
                        </div>
                        <div class="col-lg-6">
                            <div class="image-box"><img src={require('../../../assets/images/sublets/images/innovates/004.jpg')} alt="" /></div>
                        </div>
                    </div>
                    <div class="text">Edo Innovates exists majorly to produce highly skilled ICT talents, support startups through innovation and support the tech ecosystem in Edo state. Edo innovates has partnered with companies like Amazon Web service, Udacity, GIZ, Decagon among others to bring globally recognised content to Edo state. The training programs offered include cloud computing, data science, power platform, web development, children coding bootcamp, computer appreciation e.t.c
                        <p>Services provided by the hub include:</p>
                        <ul style={{ listStyleType: "circle !important", marginLeft: '1.5em' }}>
                            <li>Co-working spaces</li>
                            <li>Business Support services</li>
                            <li>Internet and stable power</li>
                            <li>ICT skills training</li>
                            <li>Business incubation</li>
                            <li>Business acceleration</li>
                        </ul>

                    </div>
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
                            }} className='' href="https://edoinnovates.com">Learn More</a>
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

export default EdoInnovates