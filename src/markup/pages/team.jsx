import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'
import { Helmet } from 'react-helmet';

const aboutbg = require('./../../assets/images/slides/003.jpg');
const wellcomebg1 = require('./../../assets/images/resource/image-1.jpg');

class Team extends Component {


    render() {
        return (
            <>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Edojobs Official Website - Team Members</title>
                </Helmet>
                <Header />


                {/* <!--Search Popup--> */}

                {/* <!-- Page Banner Section --> */}
                <section class="page-banner">
                    <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                    <div class="bottom-rotten-curve alternate"></div>

                    <div class="auto-container">
                        <h1>Our Team</h1>
                        <ul class="bread-crumb clearfix">
                            <li><Link to={'/#'}>Home</Link></li>
                            <li class="active">Team</li>
                        </ul>
                    </div>

                </section>
                {/* <!--End Banner Section --> */}



                {/* <!-- Welcome Setion --> */}
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

                {/* <!-- Team Section --> */}
                <section class="team-section gray-bg">
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <div class="sub-title">Our Team</div>
                            <h2>Leadership Team</h2>
                        </div>
                        <div class="row">
                            {/* <!-- Team Block One --> */}
                            <div class="col-lg-4 team-block-one">
                                <div class="inner-box">
                                    <div class="image"><img src={require('../../assets/images/team/01.jpg')} alt="" /></div>
                                    <div class="content">
                                        <div class="designation">Board Chairman</div>
                                        <h3>Ukinebo Dare</h3>
                                        <p><strong>Head, Career Transition <br />Mastercard Foundation</strong></p>
                                        {/* <ul class="social-links">
                                            <li><Link to={'/#'}><span class="fab fa-facebook-f"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-twitter"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-behance"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-youtube"></span></Link></li>
                                        </ul> */}
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Team Block One --> */}
                            <div class="col-lg-4 team-block-one">
                                <div class="inner-box">
                                    <div class="image"><img src={require('../../assets/images/team/02.jpg')} alt="" /></div>
                                    <div class="content">
                                        <div class="designation">Board Member</div>
                                        <h3>Anita Eribo</h3>
                                        <p><strong>Managing Director <br />Edo State Skill Development Agency</strong></p>
                                        {/* <ul class="social-links">
                                            <li><Link to={'/#'}><span class="fab fa-facebook-f"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-twitter"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-behance"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-youtube"></span></Link></li>
                                        </ul> */}
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Team Block One --> */}
                            <div class="col-lg-4 team-block-one">
                                <div class="inner-box">
                                    <div class="image"><img src={require('../../assets/images/team/03.jpg')} alt="" /></div>
                                    <div class="content">
                                        <div class="designation">Board Secretary</div>
                                        <h3>Caroline Ikuenobe</h3>
                                        <p><strong>Seasoned Administrative <br />Officer</strong></p>
                                        {/* <ul class="social-links">
                                            <li><Link to={'/#'}><span class="fab fa-facebook-f"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-twitter"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-behance"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-youtube"></span></Link></li>
                                        </ul> */}
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Team Block One --> */}
                            <div class="col-lg-4 team-block-one">
                                <div class="inner-box">
                                    <div class="image"><img src={require('../../assets/images/team/04.jpg')} alt="" /></div>
                                    <div class="content">
                                        <div class="designation">Board Member</div>
                                        <h3>Victor Asemota</h3>
                                        <p><strong>Founder <br />Swifta Systems & Services</strong></p>
                                        {/* <ul class="social-links">
                                            <li><Link to={'/#'}><span class="fab fa-facebook-f"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-twitter"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-behance"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-youtube"></span></Link></li>
                                        </ul> */}
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Team Block One --> */}
                            <div class="col-lg-4 team-block-one">
                                <div class="inner-box">
                                    <div class="image"><img src={require('../../assets/images/team/05.jpg')} alt="" /></div>
                                    <div class="content">
                                        <div class="designation">Board Member</div>
                                        <h3>Osarumen Akenzua</h3>
                                        <p><strong>Program Manager, <br />LEAP Africa</strong></p>
                                        {/* <ul class="social-links">
                                            <li><Link to={'/#'}><span class="fab fa-facebook-f"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-twitter"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-behance"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-youtube"></span></Link></li>
                                        </ul> */}
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Team Block One --> */}
                            <div class="col-lg-4 team-block-one">
                                <div class="inner-box">
                                    <div class="image"><img src={require('../../assets/images/team/06.jpg')} alt="" /></div>
                                    <div class="content">
                                        <div class="designation">Board Member</div>
                                        <h3>Ivie Temitayo-Ibitoye</h3>
                                        <p><strong>Founder, Work in Nigeria <br />Head Employee Relations, Sahara Group</strong></p>
                                        {/* <ul class="social-links">
                                            <li><Link to={'/#'}><span class="fab fa-facebook-f"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-twitter"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-behance"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-youtube"></span></Link></li>
                                        </ul> */}
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 team-block-one">
                                <div class="inner-box">
                                    <div class="image"><img src={require('../../assets/images/team/07.jpg')} alt="" /></div>
                                    <div class="content">
                                        <div class="designation">Board Member</div>
                                        <h3>Victor Ehikhamenor</h3>
                                        <p><strong>International Visual Artist <br />Photographer & Writer</strong></p>
                                        {/* <ul class="social-links">
                                            <li><Link to={'/#'}><span class="fab fa-facebook-f"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-twitter"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-behance"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-youtube"></span></Link></li>
                                        </ul> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <Footer />
            </>
        )
    }
}
export default Team;