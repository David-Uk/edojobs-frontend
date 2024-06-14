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

function Items() {
    return (
        <>
            {Information &&
                Information.map((item) => (
                    <div class="news-block-one col-lg-4">
                        <div class="inner-box">
                            <div class="image"><img src={item.imageUrl} alt="" /></div>
                            <div class="lower-content">
                                {/* <div class="category">Business</div> */}
                                <ul class="post-meta">
                                    {/* <li><Link to={'/#'}><i class="far fa-calendar-alt"></i>24th March 2020</Link></li> */}
                                    {/* <li><Link to={'/#'}><i class="far fa-user"></i>By Admin</Link></li> */}
                                </ul>
                                <h3>{item.heading}</h3>
                                <div class="text">{item.details}</div>
                                <a className='category' target='_blank' rel='noopener noreferrer' href={item.link}>Read More</a>
                            </div>

                        </div>
                    </div>

                ))}
        </>
    );
}


const Reports = () => {

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