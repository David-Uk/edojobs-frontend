import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'
import { Helmet } from 'react-helmet';

const aboutbg = require('./../../assets/images/slides/003.jpg');
// const wellcomebg1 = require('./../../assets/images/resource/image-1.jpg');

const Items = [
    {
        imageUrl: require('../../assets/images/team/01.jpg'),
        name: 'Ukinebo Dare',
        boardRole: 'Board Chairman',
        careerDesignation: <strong>Head, Career Transition <br />Mastercard Foundation</strong>

    },
    {
        imageUrl: require('../../assets/images/team/07.jpg'),
        name: 'Victor Ehikhamenor',
        boardRole: 'Board Member',
        careerDesignation: <strong>International Visual Artist <br />Photographer & Writer</strong>
    },
    {
        imageUrl: require('../../assets/images/team/04.jpg'),
        name: 'Victor Asemota',
        boardRole: 'Board Member',
        careerDesignation: <strong>Founder <br />Swifta Systems & Services</strong>
    },
    {
        imageUrl: require('../../assets/images/team/06.jpg'),
        name: 'Ivie Temitayo-Ibitoye',
        boardRole: 'Board Member',
        careerDesignation: <strong>Founder Work in Nigeria<br />Head Empoyee Relations, Sahara Group</strong>
    },
    {
        imageUrl: require('../../assets/images/team/05.jpg'),
        name: 'Osarumen Akenzua',
        boardRole: 'Board Member',
        careerDesignation: <strong>Programme Manager <br />LEAP Africa</strong>

    },
    // {
    //     imageUrl: require('../../assets/images/team/02.jpg'),
    //     name: 'Anita Eribo',
    //     boardRole: 'Board Member',
    //     careerDesignation: <strong>MD <br />Edo State Skill Development Agency</strong>

    // },
    {
        imageUrl: require('../../assets/images/team/03.jpg'),
        name: 'Caroline Ikuenobe',
        boardRole: 'Board Secretary',
        careerDesignation: <strong>Seasoned Administrative <br />Officer</strong>

    }
]

const TeamMembers = [
    {
        imageUrl: require('../../assets/images/team/management/01.jpg'),
        name: 'Eribo Anita Itohan',
        boardRole: 'Managing Director',
        careerDesignation: <strong>Edo State Skills<br />Development Agency</strong>

    },
    {
        imageUrl: require('../../assets/images/team/management/02.jpg'),
        name: 'Ehikhuenmen Elijah',
        boardRole: 'Head',
        careerDesignation: <strong>Skills Development<br />Unit</strong>
    },
    {
        imageUrl: require('../../assets/images/team/management/03.jpg'),
        name: 'Majekodunmi Segun',
        boardRole: 'Head',
        careerDesignation: <strong>Entrepreneurship<br />Unit</strong>
    },
    {
        imageUrl: require('../../assets/images/team/management/04.JPG'),
        name: 'Ogunleye Joseph',
        boardRole: 'Head',
        careerDesignation: <strong>Job Matching<br /> & Placement</strong>
    },
    {
        imageUrl: require('../../assets/images/team/management/05.jpg'),
        name: 'Ehiremen Success',
        boardRole: 'Head',
        careerDesignation: <strong>Edo Food<br />& Agric Cluster</strong>
    },
    {
        imageUrl: require('../../assets/images/team/management/06.jpg'),
        name: 'Umeri Valentina',
        boardRole: 'Head',
        careerDesignation: <strong>Media<br />& Communications Unit</strong>
    },
]

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

                {/* <!-- Board Section --> */}
                <section class="team-section gray-bg">
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <div class="sub-title">The Board</div>
                            <h2>Board Members</h2>
                        </div>
                        <div class="row">
                            {/* <!-- Team Block One --> */}
                            {Items.map(item => (
                                <div class="col-lg-4 team-block-one">
                                    <div class="inner-box">
                                        <div class="image"><img src={item.imageUrl} alt="Profile" /></div>
                                        <div class="content">
                                            <div class="designation">{item.boardRole}</div>
                                            <h3>{item.name}</h3>
                                            <p>{item.careerDesignation}</p>
                                            {/* <ul class="social-links">
                                            <li><Link to={'/#'}><span class="fab fa-facebook-f"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-twitter"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-behance"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-youtube"></span></Link></li>
                                        </ul> */}
                                        </div>
                                    </div>
                                </div>

                            ))}
                            {/* <!-- Team Block One --> */}

                        </div>
                    </div>
                </section>

                {/* Team Members*/}
                <section class="team-section gray-bg">
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <div class="sub-title">Management</div>
                            <h2>Team Members</h2>
                        </div>
                        <div class="row">
                            {/* <!-- Team Block One --> */}
                            {TeamMembers.map(item => (
                                <div class="col-lg-4 team-block-one">
                                    <div class="inner-box">
                                        <div class="image"><img src={item.imageUrl} alt="Profile" /></div>
                                        <div class="content">
                                            <div class="designation">{item.boardRole}</div>
                                            <h3>{item.name}</h3>
                                            <p>{item.careerDesignation}</p>
                                            {/* <ul class="social-links">
                                            <li><Link to={'/#'}><span class="fab fa-facebook-f"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-twitter"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-behance"></span></Link></li>
                                            <li><Link to={'/#'}><span class="fab fa-youtube"></span></Link></li>
                                        </ul> */}
                                        </div>
                                    </div>
                                </div>

                            ))}
                            {/* <!-- Team Block One --> */}

                        </div>
                    </div>
                </section>

                <Footer />
            </>
        )
    }
}
export default Team;