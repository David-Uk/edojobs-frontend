import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Tab, } from 'react-bootstrap';
import Header from '../layout/header';
import Footer from '../layout/footer';
import Brand1 from '../element/brand1';


const aboutbg = require('./../../assets/images/photo/hairmaking.jpg');



class About extends Component {


    render() {
        return (
            <>
                <Header />
                <div id="search-popup" class="search-popup">
                    <div class="close-search theme-btn"><span class="flaticon-cancel"></span></div>
                    <div class="popup-inner">
                        {/* <div class="overlay-layer"></div> */}

                    </div>
                </div>


                <section class="page-banner">
                    <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                    {/* <div class="bottom-rotten-curve alternate"></div> */}

                    <div class="auto-container">
                        <h1>About Us</h1>
                        <ul class="bread-crumb clearfix">
                            <li><Link to={'/#'}>Home</Link></li>
                            <li class="active">About Us</li>
                        </ul>
                    </div>

                </section>


                {/* About Section Two */}
                <section class="about-section-two">
                    <div class="auto-container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="content-box wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="sec-title">
                                        <div class="sub-title">About Us</div>
                                        {/* <h2>We Work With <br />You To Address</h2> */}
                                        <div class="text">
                                            <p>
                                                The Edo State Skills Development Agency (Edojobs) was set up by the Edo State Government to “provide the supply of and attract the demand for the highly skilled talent in Edo State.” The agency is a fulfilment of the mandate of Governor Godwin Obaseki’s administration to Edo people to create 200,000 jobs in his first term in office.

                                                The vision was to go beyond job creation to unlock the potential of the Edo youths by igniting the hope within them and ensuring that they could excel on their chosen career path.

                                                Edojobs started in 2016 with an enumeration of citizens who were actively in search of a job; this yielded over 210,000 registrations, and in 2017, Edojobs was officially launched. By 2019, Edojobs had set up Edo Innovates, Edo Production Centre and many other projects and programmes that were actively connecting young people to jobs and building a community that brought hope and opportunity to the industrious young people.

                                                Edojobs became an agency in 2019 when it was signed into law and Ukinebo Dare was appointed the pioneering Managing Director of the agency. Since then, Edojobs has delivered on this vision and exceeded expectations and covered milestones.

                                                Today, the young and old both in rural and urban communities have benefitted from different programmes ranging from innovative and in-demand skills such as software engineering, fashion designing, digital skills, catering and event planning, employability training, agriculture for sustainable food production and much more.
                                            </p></div>
                                    </div>
                                    <div class="author-info">
                                        <div class="wrapper-box">
                                            <h2>His Excellency, Godwin Obaseki</h2>
                                            <div class="designation">Governor of Edo State</div>
                                            {/* <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod..</div> */}
                                        </div>
                                        {/* <div class="signature"><img src={require('../../assets/images/resource/signature-2.png')} alt="" /></div> */}
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="image-wrapper wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="image-one">
                                        <img src={require('../../assets/images/photo/obaseki.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* History Section */}

                {/* Team Section */}

                {/* Services Section Four */}

                {/* Sponsors Section */}


                <Brand1 />



                <Footer />
            </>
        )
    }
}
export default About;