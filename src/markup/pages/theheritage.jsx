import React from 'react'
import { Link } from 'react-router-dom';
// import Header from '../layout/header'
// import Footer from '../layout/footer'
import { Helmet } from 'react-helmet';
import Header from '../layout/header';
import Footer from '../layout/footer';

const aboutbg = require('../../assets/images/programmes/theheritage.jpg')
// const aboutbg = require('./../../../assets/images/sublets/images/entrepreneurship/005.jpg');
// const addbg = require('./../../../assets/images/background/image-15.jpg');



const TheHeritage = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Open Call for The Heritage 100 Training Program: A Unique Opportunity to Shape the Future of Edo State’s Cultural Heritage" />
                <title>Edojobs Official Website | The Heritage 100 Training Programme</title>
            </Helmet>
            <Header />

            {/* Page Banner Section */}
            <section class="page-banner">
                <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                <div class="bottom-rotten-curve alternate"></div>

                <div class="auto-container">
                    {/* <h1>Entrepreneurship</h1> */}
                    <ul class="bread-crumb clearfix">
                        <li><Link to={'/'}>Home</Link></li>
                        <li class="active">The Heritage 100 Training Programme</li>
                    </ul>
                </div>
            </section>

            {/* Details */}
            <div class="portfolio-details">
                <div class="auto-container">
                    <div class="top-content">
                        <a href="https://forms.gle/cBzVrgyzvZhBaPjR7" target="_blank" rel="noopener noreferrer">
                            <div class="image-box">
                                <img src={aboutbg} alt="" /></div> </a>
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
                        <h4>Open Call for The Heritage 100 Training Program: A Unique Opportunity to Shape the Future of Edo State’s Cultural Heritage<br /></h4>
                    </div>
                    <div class="text">
                        <p>Are you passionate about preserving culture and history? Do you want to be part of Edo State’s transformation into a global cultural hub? The Edo State Ministry of Arts, Culture, and Tourism is excited to announce the Heritage 100 Training Program, an exceptional opportunity for 100 young people to gain useful skills and contribute to the success of the Benin Cultural District.</p>
                        <p><strong>Program Overview</strong></p>
                        <p>The Heritage 100 Training Program is designed to equip participants with the skills needed to support Edo State’s vibrant cultural and tourism sectors. Participants will undergo intensive training, with the possibility of gaining permanent employment within the Edo State Ministry of Arts, Culture, and Tourism (MATC) or working as freelance heritage support officers.</p>
                    </div>
                    {/* <div class="row">
                        <div class="col-lg-6">
                            <div class="image-box"><img src={require('../../../assets/images/sublets/images/entrepreneurship/018.jpg')} alt="" /></div>
                        </div>
                        <div class="col-lg-6">
                            <div class="image-box"><img src={require('../../../assets/images/sublets/images/entrepreneurship/019.jpg')} alt="" /></div>
                        </div>
                    </div> */}
                    <div class="text">
                        <h5>Key Training Areas Include:</h5>
                        <ul style={{ listStyleType: "circle !important", marginLeft: '1.5em' }}>
                            <li>•	Introduction to Edo State's Cultural Heritage</li>
                            <li>•	Tour Guide Training</li>
                            <li>•	Cultural and Event Management</li>
                            <li>•	Cultural Digital Skills Development</li>
                            <li>•	Customer Service and Hospitality</li>
                            <li>•	Career Development</li>
                        </ul>

                    </div>
                    <div class="text">
                        <h5>Program Benefits</h5>
                        <ul style={{ listStyleType: "circle !important", marginLeft: '1.5em' }}>
                            <li>•	Duration: 2 weeks of hands-on, immersive training.</li>
                            <li>•	Skills Development: Acquire critical skills to excel in Edo State’s growing cultural and tourism industries.</li>
                            <li>•	Employment Opportunities: Stand a chance to be absorbed into the Edo State Ministry of Arts, Culture, and Tourism or explore freelance career paths as a registered heritage support officer.</li>
                            <li>•	Cultural Impact: Play a key role in the preservation and promotion of Edo State’s rich heritage.</li>
                            <li>•	Becoming a cultural Ambassador: Represent Edo State's heritage with pride in local and international platforms.</li>
                        </ul>

                    </div>
                    <div class="text">
                        <h5>Who Can Apply?</h5>
                        <p>We are looking for passionate young people who:</p>
                        <ul style={{ listStyleType: "circle !important", marginLeft: '1.5em' }}>
                            <li>•	Are aged between 18 and 40 with at a minimum of S.S.C.E, B.A(HONS.) B.Sc., B.A or HND in any discipline.</li>
                            <li>•	Have a deep interest in Edo State's cultural heritage.</li>
                            <li>•	Are enthusiastic about building a career in the cultural and tourism sectors.</li>
                            <li>•	Are eager to learn, develop new skills, and contribute to Edo State’s transformation.</li>
                        </ul>

                    </div>
                    <div class="text">
                        <h5>How to Apply</h5>
                        <p>Applications are open to all eligible young people across Edo State. To apply, please submit your application through the Edo State Skills Acquisition Agency (EdoJobs) portal by following the steps below:</p>
                        <ul style={{ listStyleType: "circle !important", marginLeft: '1.5em' }}>
                            <li>•	Visit the EdoJobs website: <a href="https://edojobs.info/upcoming/minartandculture-heritage100training">https://edojobs.info/upcoming/mInartandculture-heritage100training</a></li>
                            <li>•	Click on the Heritage 100 Training Program banner.</li>
                            <li>•	Complete the application form and upload your supporting documents.</li>
                        </ul>
                        <p>Application Deadline: October 10, 2024. Training Begins October 14 2024</p>
                        <p>
                            For further inquiries about the program, please contact: <br />
                            •	Edo State Ministry of Arts, Culture, and Tourism, 6th floor, Secretariat Complex, Sapele Road, Benin City

                        </p>

                    </div>
                    <div class="text">
                        <h5>Don’t Miss This Chance!</h5>
                        <p>Be part of a program that blends tradition with innovation, empowering you to contribute to the future of Edo State’s cultural and tourism industries. Apply today and take the first step towards a rewarding career in preserving Edo State’s heritage!</p>
                    </div>

                    <a style={{ color: 'white', backgroundColor: 'green', padding: '10px' }} className="category" href="https://forms.gle/cBzVrgyzvZhBaPjR7" target="_blank" rel="noopener noreferrer">Apply Here</a>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default TheHeritage