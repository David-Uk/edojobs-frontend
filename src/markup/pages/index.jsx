import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Tab, } from 'react-bootstrap';
import Header from '../layout/header';
import Footer from '../layout/footer';
import HomeSlider1 from './../element/home-slider1';

import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

// import '../../assets/css/color.css';

import VideoPopup1 from './../element/video-popup1';
import PortfolioFilter1 from './../element/portfolio-filter1';
import HomeSlider2 from '../element/home-slider2';

const teambg1 = require('./../../assets/images/background/image-3.jpg');
const newsbg1 = require('./../../assets/images/background/image-4.jpg');
const wellcomebg1 = require('./../../assets/images/resource/image-1.jpg');

class Index extends Component {


    render() {
        return (
            <>
                <Header />


                {/* <!--Search Popup--> */}
                <div id="search-popup" class="search-popup">
                    <div class="close-search theme-btn"><span class="flaticon-cancel"></span></div>
                    <div class="popup-inner">
                        <div class="overlay-layer"></div>
                        <div class="search-form">
                            <form method="post" action="http://azim.commonsupport.com/Finandox/index.html">
                                <div class="form-group">
                                    <fieldset>
                                        <input type="search" class="form-control" name="search-input" value="" placeholder="Search Here" required />
                                        <input type="submit" value="Search Now!" class="theme-btn" />
                                    </fieldset>
                                </div>
                            </form>
                            <br />
                            <h3>Recent Search Keywords</h3>
                            <ul class="recent-searches">
                                <li><Link to={'/#'}>Finance</Link></li>
                                <li><Link to={'/#'}>Idea</Link></li>
                                <li><Link to={'/#'}>Service</Link></li>
                                <li><Link to={'/#'}>Growth</Link></li>
                                <li><Link to={'/#'}>Plan</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>


                <HomeSlider2 />



                {/* <!-- Welcome Setion --> */}
                {/* <section class="welcome-section pt-0">
                    <div class="auto-container">
                        <div class="wrapper-box">
                            <div class="row m-0">
                                <div class="welcome-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="inner-box">
                                        <div class="icon-box"><span class="flaticon-analysis"></span></div>
                                        <h2>Business Analysis</h2>
                                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. </div>
                                        <div class="read-more"><Link to={'/#'}>Read More</Link></div>
                                    </div>
                                </div>
                                <div class="welcome-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="inner-box" style={{ backgroundImage: "url(" + wellcomebg1 + ")" }}>
                                        <div class="icon-box"><span class="flaticon-tax"></span></div>
                                        <h2>Save Your Tax</h2>
                                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. </div>
                                        <div class="read-more"><Link to={'/#'}>Read More</Link></div>
                                    </div>
                                </div>
                                <div class="welcome-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="inner-box">
                                        <div class="icon-box"><span class="flaticon-work-1"></span></div>
                                        <h2>Business Analysis</h2>
                                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. </div>
                                        <div class="read-more"><Link to={'/#'}>Read More</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                <section class="feature-section">
                    <div class="auto-container">
                        <div class="wrapper-box">
                            <div class="row">
                                <div class="col-lg-2 col-md-4 col-sm-6 col-xs-6 col-6">
                                    <div class="feature-block-one">
                                        <div class="inner-box">
                                            <div class="icon"><span class="flaticon-team"></span></div>
                                            <h5>Management</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-4 col-sm-6 col-xs-6 col-6">
                                    <div class="feature-block-one">
                                        <div class="inner-box">
                                            <div class="icon"><span class="flaticon-money"></span></div>
                                            <h5>TAX Consume</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-4 col-sm-6 col-xs-6 col-6">
                                    <div class="feature-block-one">
                                        <div class="inner-box">
                                            <div class="icon"><span class="flaticon-assets"></span></div>
                                            <h5>Finance & Strategy</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-4 col-sm-6 col-xs-6 col-6">
                                    <div class="feature-block-one">
                                        <div class="inner-box">
                                            <div class="icon"><span class="flaticon-world"></span></div>
                                            <h5>Best Advice</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-4 col-sm-6 col-xs-6 col-6">
                                    <div class="feature-block-one">
                                        <div class="inner-box">
                                            <div class="icon"><span class="flaticon-money-1"></span></div>
                                            <h5>Insurance</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-4 col-sm-6 col-xs-6 col-6">
                                    <div class="feature-block-one">
                                        <div class="inner-box">
                                            <div class="icon"><span class="flaticon-notebook"></span></div>
                                            <h5>Criminal Case</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* <!-- About Section Two --> */}
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
                                            <div class="designation">Governor of Edo</div>
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

                {/* <!-- Services Section --> */}
                {/* <section class="services-section">
                    <div class="auto-container">
                        <div class="wrapper-box">
                            <div class="left-column">
                                <div class="services-content">
                                    <div class="sec-title light">
                                        <div class="sub-title">Our Services</div>
                                        <h2>What Actually We <br />Do Here.</h2>
                                    </div>
                                    <div class="icon-box wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                        <div class="icon"><img src={require('../../assets/images/icons/icon-3.png')} alt="" /></div>
                                        <h2>Capital Market</h2>
                                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                                    </div>
                                    <div class="icon-box wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                        <div class="icon"><img src={require('../../assets/images/icons/icon-4.png')} alt="" /></div>
                                        <h2>Insurance & Planning</h2>
                                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                                    </div>
                                    <div class="icon-box wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                        <div class="icon"><img src={require('../../assets/images/icons/icon-5.png')} alt="" /></div>
                                        <h2>Financial Strategy</h2>
                                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                                    </div>
                                </div>
                            </div>
                            <div class="right-column">
                                <div class="fact-counter">
                                    <div class="border-box">
                                        <div class="border_top"></div>
                                        <div class="border_bottom"></div>
                                        <div class="border_middile"></div>
                                    </div>
                                    <div class="row">

                                        <div class="column counter-column col-md-6">
                                            <div class="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                                <div class="content">
                                                    <div class="icon"><img src={require('../../assets/images/icons/icon-6.png')} alt="" /></div>
                                                    <div class="count-outer count-box">
                                                        <CountUp
                                                            end={90}
                                                            redraw={true}
                                                        >
                                                            {({ countUpRef, start }) => (
                                                                <VisibilitySensor
                                                                    onChange={start}
                                                                    delayedCall
                                                                >
                                                                    <span class="count-text" ref={countUpRef} />
                                                                </VisibilitySensor>
                                                            )}
                                                        </CountUp>
                                                        <span>%</span>
                                                    </div>
                                                    <div class="counter-title">Business Monitoring</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="column counter-column col-md-6">
                                            <div class="inner wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms">
                                                <div class="content">
                                                    <div class="icon"><img src={require('../../assets/images/icons/icon-7.png')} alt="" /></div>
                                                    <div class="count-outer count-box">
                                                        <CountUp
                                                            end={71}
                                                            redraw={true}
                                                        >
                                                            {({ countUpRef, start }) => (
                                                                <VisibilitySensor
                                                                    onChange={start}
                                                                    delayedCall
                                                                >
                                                                    <span class="count-text" ref={countUpRef} />
                                                                </VisibilitySensor>
                                                            )}
                                                        </CountUp>
                                                        <span>%</span>
                                                    </div>
                                                    <div class="counter-title">Business Growth</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="column counter-column col-md-6">
                                            <div class="inner wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
                                                <div class="content">
                                                    <div class="icon"><img src={require('../../assets/images/icons/icon-8.png')} alt="" /></div>
                                                    <div class="count-outer count-box">
                                                        <CountUp
                                                            end={33}
                                                            redraw={true}
                                                        >
                                                            {({ countUpRef, start }) => (
                                                                <VisibilitySensor
                                                                    onChange={start}
                                                                    delayedCall
                                                                >
                                                                    <span class="count-text" ref={countUpRef} />
                                                                </VisibilitySensor>
                                                            )}
                                                        </CountUp>
                                                        <span>%</span>
                                                    </div>
                                                    <div class="counter-title">Financial Plan</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="column counter-column col-md-6">
                                            <div class="inner wow fadeInLeft" data-wow-delay="900ms" data-wow-duration="1500ms">
                                                <div class="content">
                                                    <div class="icon"><img src={require('../../assets/images/icons/icon-9.png')} alt="" /></div>
                                                    <div class="count-outer count-box">
                                                        <CountUp
                                                            end={42}
                                                            redraw={true}
                                                        >
                                                            {({ countUpRef, start }) => (
                                                                <VisibilitySensor
                                                                    onChange={start}
                                                                    delayedCall
                                                                >
                                                                    <span class="count-text" ref={countUpRef} />
                                                                </VisibilitySensor>
                                                            )}
                                                        </CountUp>
                                                        <span>%</span>
                                                    </div>
                                                    <div class="counter-title">Finance Consulting</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="column counter-column col-md-6">
                                            <div class="inner wow fadeInLeft" data-wow-delay="600ms" data-wow-duration="1500ms">
                                                <div class="content">
                                                    <div class="icon"><img src={require('../../assets/images/icons/icon-10.png')} alt="" /></div>
                                                    <div class="count-outer count-box">
                                                        <CountUp
                                                            end={69}
                                                            redraw={true}
                                                        >
                                                            {({ countUpRef, start }) => (
                                                                <VisibilitySensor
                                                                    onChange={start}
                                                                    delayedCall
                                                                >
                                                                    <span class="count-text" ref={countUpRef} />
                                                                </VisibilitySensor>
                                                            )}
                                                        </CountUp>
                                                        <span>%</span>
                                                    </div>
                                                    <div class="counter-title">Data Analysis</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="column counter-column col-md-6">
                                            <div class="inner wow fadeInLeft" data-wow-delay="900ms" data-wow-duration="1500ms">
                                                <div class="content">
                                                    <div class="icon"><img src={require('../../assets/images/icons/icon-11.png')} alt="" /></div>
                                                    <div class="count-outer count-box">
                                                        <CountUp
                                                            end={10}
                                                            redraw={true}
                                                        >
                                                            {({ countUpRef, start }) => (
                                                                <VisibilitySensor
                                                                    onChange={start}
                                                                    delayedCall
                                                                >
                                                                    <span class="count-text" ref={countUpRef} />
                                                                </VisibilitySensor>
                                                            )}
                                                        </CountUp>
                                                        <span>%</span>
                                                    </div>
                                                    <div class="counter-title">business Strategy</div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div class="author-box" style={{ "backgroundImage": "url(assets/images/background/image-1.jpg)" }}>
                                    <div class="author-info">
                                        <div class="author-thumb"><img src={require('../../assets/images/resource/author-1.jpg')} alt="" /></div>
                                        <h2>Rosalina D. William</h2>
                                        <div class="designation">Founder</div>
                                        <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod..</div>
                                    </div>
                                    <div class="signature"><img src={require('../../assets/images/resource/signature.png')} alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}



                {/* <!-- Gallery Section --> */}
                {/* <PortfolioFilter1 /> */}


                {/* <!-- Video Section --> */}
                {/* <VideoPopup1 /> */}



                {/* <!-- Why Choose Us Section --> */}
                <section class="why-chooseus-section">
                    <div class="auto-container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="content-box">
                                    <div class="sec-title">
                                        <div class="sub-title">Why Choose Us</div>
                                        <h3>Why Should You <br />Choose Us?</h3>
                                    </div>
                                    <Tab.Container defaultActiveKey="first">
                                        <Nav variant="pills" className="nav nav-tabs tab-btn-style-one">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first"><span>Our Mission</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second"><span>Our Vision</span></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third"><span>Our Mandate</span></Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content className="tabs-content">
                                            <Tab.Pane eventKey="first" className="fadeInUp animated">
                                                <div class="clearfix">
                                                    <div class="image"><img src={require('../../assets/images/photo/edgh.jpg')} height={100} width={100} alt="" /></div>
                                                    <div class="text"><p>To provide supply of and attract demand for highly skilled workforce in Edo State.</p></div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second" className="fadeInUp animated">
                                                <div class="clearfix">
                                                    <div class="image"><img src={require('../../assets/images/resource/image-4.jpg')} alt="" /></div>
                                                    <div class="text"><p>To reduce and eradicate unemployment in Edo State through job creation and skills development.</p></div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third" className="fadeInUp animated">
                                                <div class="clearfix">
                                                    <div class="image"><img src={require('../../assets/images/resource/image-4.jpg')} alt="" /></div>
                                                    <div class="text"><p>Reduce unemployment through a coordinated and effective programme that will produce and supply highly skilled labour.</p></div>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>



                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="image-wrapper">
                                    <div class="image-one"><img src={require('../../assets/images/photo/slide4.jpeg')} alt="" /></div>
                                    <div class="image-two"><img src={require('../../assets/images/photo/slide5.jpeg')} alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Team Section --> */}


                {/* <!-- Contact Section --> */}


                <Footer />
            </>
        )
    }
}
export default Index;