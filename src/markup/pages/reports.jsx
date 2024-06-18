import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'
import { Helmet } from 'react-helmet';

const aboutbg = require('./../../assets/images/photo/mdreport.jpg');

const Information = [
    {
        heading: 'Obaseki launches Edo Tech Park',
        details: 'The Edo State Governor, Godwin Obaseki, on Monday launched the Edo Tech Park in partnership with Decagon',
        imageUrl: require('../../assets/images/reports/report1.main.jpg'),
        link: 'https://punchng.com/obaseki-launches-edo-tech-park-promises-digital-economy/'
    },
    {
        heading: 'Edojobs partners Azura Power',
        details: 'The Edo State Skills Development Agency (EdoJobs) in partnership with Azura Power Plc has commenced the training of 30 youths',
        imageUrl: require('../../assets/images/reports/report2.main.jpg'),
        link: "https://www.latestnigeriannews.com/p/166885/edojobs-patners-azura-power-to-train-30-edojobs-partners-azura-power-to-train-30-edo-youths-in-skills-acquisition.html"
    },
    {
        heading: '4 French companies partner Wazobia, EdoJobs',
        details: 'Edo State Skills Development Agency (EdoJobs), LAFAAAC, SUMMVIEW, Teach on Mars, Wazobia, and WebForce3 have partnered',
        imageUrl: require('../../assets/images/reports/report3.main.jpg'),
        link: "https://sunnewsonline.com/4-french-companies-partner-wazobia-edojobs-to-train-3000-youths/"
    },
    {
        heading: 'IOM donates to Edo Innovates',
        details: 'The International Organisation for Migration (IOM) has donated work stations and some office items to Edo Innovation Hub',
        imageUrl: require('../../assets/images/reports/report4.main.jpg'),
        link: "https://nigerianobservernews.com/2021/02/iom-donates-office-work-stations-other-items-to-edo-innovation-hub/"
    },
    {
        heading: 'Edojobs adminoshes youths',
        details: 'Hon. Mrs. Ukinebo Dare has admonished youths seeking employment',
        imageUrl: require('../../assets/images/reports/report5.main.jpg'),
        link: 'http://nigerianobservernews.com/2021/07/acquire-skills-and-attitudes-edojobs-md-admonishes-youths/'
    },
    {
        heading: 'Obaseki target spot in Africa’s tech market',
        details: 'The Edo State Governor, Mr. Godwin Obaseki, has restated his government’s plan',
        imageUrl: require('../../assets/images/reports/report6.main.jpg'),
        link: 'https://nigerianobservernews.com/2021/06/obaseki-targets-top-spot-in-africas-tech-market/'
    }

]

const doc = 'https://www.dropbox.com/scl/fi/dqxt9s35xfn7sk98idytv/brochure-march-edition.pdf?rlkey=7vmhtvnc634offevmdclmtuso&st=so9vn0ns&dl=0'

function Items() {
    return (
        <>
            {Information &&
                Information.map((item) => (
                    <div style={{}} class="news-block-one col-lg-4">
                        <div class="inner-box">
                            <div class="image"><img src={item.imageUrl} alt="" /></div>
                            <div class="lower-content">
                                {/* <div class="category">Business</div> */}
                                <ul class="post-meta">
                                    {/* <li><Link to={'/#'}><i class="far fa-calendar-alt"></i>24th March 2020</Link></li> */}
                                    {/* <li><Link to={'/#'}><i class="far fa-user"></i>By Admin</Link></li> */}
                                </ul>
                                <h3>{item.heading}</h3>
                                <div class="text">{item.details.slice(0, 80) + '...'}</div>
                                <a className='category' target='_blank' rel='noopener noreferrer' href={item.link}>Read More</a>
                            </div>

                        </div>
                    </div>

                ))}
        </>
    );
}


const Reports = () => {
    const onResumeClick = () => {
        window.open(doc);
    }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Our publications and media reports. What the media says about us and what the " />
                <title>Edojobs Official Website | Reports</title>
            </Helmet>
            <Header />

            {/* <!-- Page Banner Section --> */}
            <section class="page-banner">
                <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                <div class="bottom-rotten-curve alternate"></div>

                <div class="auto-container">
                    <h1>Reports</h1>
                    <ul class="bread-crumb clearfix">
                        <li><Link to={'/#'}>Home</Link></li>
                        <li class="active">Reports</li>
                    </ul>
                </div>

            </section>
            {/* <!--End Banner Section --> */}

            <section class="about-section-two">
                <div class="auto-container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="content-box wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="sec-title">
                                    <div class="sub-title">Reports</div>
                                    {/* <h2>We Work With <br />You To Address</h2> */}
                                    <div class="text">
                                        <p>
                                            <h3>OUR BROCHURE</h3>
                                            <h4><strong>What we've achieved.</strong> </h4><br />

                                            The Edo State Skills Development Agency (Edojobs) was set up by the Edo State Government to “provide the supply of and attract the demand for highly skilled talent in Edo State”.
                                            The agency is a fulfillment of the mandate of Governor Godwin Obaseki's promise to Edo people to create 200,000 jobs in his first term in office with the visions to go beyond job creation to unlocking the potential of youth in Edo State by igniting the hope within them and ensuring that they could excel on their chosen career path.
                                            We started in 2016 with an enumeration of citizens who were actively in search of a job, this yielded over 210,000 registrations and in 2017 Edojobs was officially launched. Since 2019, EdoJobs had setup Edo Innovates, Edo Production Centre, and many other programs that were actively connecting young people to jobs and building a community that was bringing hope and opportunity to our industrious young people. Edojobs became an agency in 2019 when it was signed into law and Ukinebo Dare was appointed as the pioneer the Managing Director of the Agency.
                                            Click to discover the first 5 years of impact at Edo State Skills Development Agency.
                                        </p></div>
                                </div>
                                <div class="author-info">
                                    <div class="wrapper-box">
                                        <ul class="post-meta">
                                            <li><a href={doc} download className='btn theme-btn'><i class="far fa-calendar-alt"></i>March Edition Brochure</a></li>
                                        </ul>
                                        {/* <div class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod..</div> */}
                                    </div>
                                    {/* <div class="signature"><img src={require('../../assets/images/resource/signature-2.png')} alt="" /></div> */}
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="image-wrapper wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                                <div class="image-one">
                                    <img src={require('../../assets/images/photo/impact.jpg')} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <!-- News Section --> */}
            <section class="news-section">
                <div class="auto-container">
                    <div class="row">
                        {/* <!-- News Block One --> */}
                        <Items />


                    </div>
                </div>
            </section>


            <Footer />
        </>
    )

}
export default Reports;