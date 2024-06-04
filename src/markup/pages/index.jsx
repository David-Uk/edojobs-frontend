import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header';
import Footer from '../layout/footer';


// import '../../assets/css/color.css';

import HomeSlider2 from '../element/home-slider2';
import Testimonial3 from '../element/testimonial3';


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

                <section class="welcome-section pt-0">
                    <div class="auto-container">
                        <div class="wrapper-box">
                            <div class="row m-0">
                                {/* <!-- Welcome Block One --> */}
                                <div class="welcome-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="inner-box">
                                        <div class="icon-box"><span class="flaticon-analysis"></span></div>
                                        <h2>Our Mission</h2>
                                        <div class="text">To provide supply of and attract demand for highly skilled workforce in Edo State.</div>
                                        {/* <div class="read-more"><Link to={'/#'}>Read More</Link></div> */}
                                    </div>
                                </div>
                                {/* <!-- Welcome Block One --> */}
                                <div class="welcome-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="inner-box"
                                    // style={{ backgroundImage: "url(" + wellcomebg1 + ")" }}
                                    >
                                        <div class="icon-box"><span class="flaticon-tax"></span></div>
                                        <h2>Our Vision</h2>
                                        <div class="text">To reduce and eradicate unemployment in Edo State through job creation and skills development.</div>
                                        {/* <div class="read-more"><Link to={'/#'}>Read More</Link></div> */}
                                    </div>
                                </div>
                                {/* <!-- Welcome Block One --> */}
                                <div class="welcome-block-one col-lg-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                    <div class="inner-box">
                                        <div class="icon-box"><span class="flaticon-work-1"></span></div>
                                        <h2>Our Mandate</h2>
                                        <div class="text">
                                            Reduce unemployment through a coordinated and effective programme that will produce and supply highly skilled labour.
                                        </div>
                                        {/* <div class="read-more"><Link to={'/#'}>Read More</Link></div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Edojobs */}
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
                                            </p>

                                        </div>
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
                                        <img src={require('../../assets/images/photo/obaseki.png')} style={{ height: '30rem' }} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* <!-- About Section Two --> */}
                {/* Services */}
                <section class="services-section-four services-section-about">
                    <div class="sec-title text-center">
                        <div style={{ margin: '3em 0' }} class="sub-title">Services</div>
                        {/* <h3>Services</h3> */}
                    </div>
                    <div class="auto-container">

                        <section class="feature-section">
                            <div class="auto-container">
                                <div class="wrapper-box">
                                    <div class="row">
                                        <div class="col-lg-2 col-md-4 col-sm-6 col-xs-6 col-6">
                                            <div class="feature-block-one">
                                                <div class="inner-box">
                                                    <div class="icon"><span class="flaticon-team"></span></div>
                                                    <h5>Job Matching & Placement</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-2 col-md-4 col-sm-6 col-xs-6 col-6">
                                            <div class="feature-block-one">
                                                <div class="inner-box">
                                                    <div class="icon"><span class="flaticon-money"></span></div>
                                                    <h5>Vocational Skills Trainings</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-2 col-md-4 col-sm-6 col-xs-6 col-6">
                                            <div class="feature-block-one">
                                                <div class="inner-box">
                                                    <div class="icon"><span class="flaticon-assets"></span></div>
                                                    <h5>Entrepreneurship Development</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-2 col-md-4 col-sm-6 col-xs-6 col-6">
                                            <div class="feature-block-one">
                                                <div class="inner-box">
                                                    <div class="icon"><span class="flaticon-world"></span></div>
                                                    <h5>Professional Career Counseling</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-2 col-md-4 col-sm-6 col-xs-6 col-6">
                                            <div class="feature-block-one">
                                                <div class="inner-box">
                                                    <div class="icon"><span class="flaticon-money-1"></span></div>
                                                    <h5>Computer | Digital Skills Acquisition</h5>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>

                <Testimonial3 />

                <Footer />
            </>

        )
    }
}
export default Index;