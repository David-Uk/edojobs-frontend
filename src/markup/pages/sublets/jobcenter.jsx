import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../../layout/header'
import Footer from '../../layout/footer'

const aboutbg = require('./../../../assets/images/sublets/images/jobcenter/004.jpg');
const addbg = require('./../../../assets/images/background/image-15.jpg');



const EdoJobCenter = () => {
    return (
        <>
            <Header />

            {/* Page Banner Section */}
            <section class="page-banner">
                <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                <div class="bottom-rotten-curve alternate"></div>

                <div class="auto-container">
                    <h1>Edo Job Center</h1>
                    <ul class="bread-crumb clearfix">
                        <li><Link to={'/'}>Home</Link></li>
                        <li class="active">Edojob Center</li>
                    </ul>
                </div>
            </section>

            {/* Details */}
            <div class="portfolio-details">
                <div class="auto-container">
                    <div class="top-content">
                        <div class="image-box"><img src={require('../../../assets/images/sublets/images/jobcenter/005.jpg')} alt="" /></div>
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
                        <h2>Edo Job<br />Center</h2>
                    </div>
                    <div class="text">The Job Matching and Placement unit was set up to achieve the goal of the agency which is to provide the supply of and attract the demand for highly skilled talent in Edo State. This unit functions through a physical location known as  Edo Job Centres. Edo Job Centre is responsible for connecting job seekers directly to available jobs within and outside the state, training individuals in line with employer demands and recruiting from the registered job seekers on the portal to fill available vacancies. The memorandum of operation of this centre is to source for vacancies from private and public organisations within and outside the state and match qualified job seekers to them.</div>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="image-box"><img height={300} src={require('../../../assets/images/sublets/images/jobcenter/008.jpg')} alt="" /></div>
                        </div>
                        <div class="col-lg-6">
                            <div class="image-box"><img height={300} src={require('../../../assets/images/sublets/images/jobcenter/013.jpg')} alt="" /></div>
                        </div>
                    </div>
                    <div>
                        <p>
                            Through the partnership with the Edo State Government, the Swiss Agency for Development and Cooperation (SDC) and the German Federal Ministry for Economic Cooperation and Development (BMZ) through the Skills Development for Youth Employment –SKYE program GIZ, Edojobs set up 7 Edo Job Centres with trained job counsellors to provide professional assistance to job seekers in the following locations across the state.
                            <ul style={{ listStyleType: "circle !important", marginLeft: '1.5em' }}>
                                <li>Edo Job Centre, inside Edo Innovation Hub, 59 I.C.E. Road, Wire Road, Benin City. </li>
                                <li>Edo Job Centre, inside Magistrate Court compound, Sapele Road, Benin City.</li>
                                <li>Edo Job Centre Auchi, Along Etsako West Local Government Secretariat Road, before the Police Station, Auchi.</li>
                                <li>Edo Job Centre Uromi, SDG Building, Police Station Road before Civil Defence Office, Uromi.</li>
                                <li>Edo Job Centre Irrua, Edo State Skills Acquisition Centre, behind Irrua Local Government Area Council Secretariat, Irrua.</li>
                                <li>Edo Job Centre Usen, Inside Edo State Polytechnic, I.C.T Building Usen.</li>
                                <li>Edo Job Centre Ekpoma, Police Barrack Road, Opposite Magistrate Court, Ekpoma.</li>
                                <li>Edo Job Centre Evbomodu Aduwawa, Benin City. </li>
                            </ul>
                        </p>

                        <p>The unit is also responsible for managing job fairs, internship programs and other job placement initiatives, and has impacted over 22,464 Edo residents in the various services offered such as job matching, CV review, career guidance and counselling, employability skills training etc.
                        </p>
                    </div>
                    <div class="project-post-pagination">
                        <div class="wrapper-box">

                            {/* <div class="prev-post">
                                <h5> Previous Post</h5>
                                <h4>UX Design Means</h4>
                            </div> */}


                            <a style={{
                                background: 'green',
                                textAlign: 'center',
                                color: 'white',
                                padding: '1.2em',
                                borderRadius: '1.5em',
                                margin: '0 auto'
                            }} className='' href="https://edojobportal.vercel.app">Learn More</a>

                        </div>
                    </div>
                </div>
            </div>



            <Footer />
        </>
    )
}

export default EdoJobCenter;