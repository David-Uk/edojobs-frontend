import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'

const aboutbg = require('./../../assets/images/photo/mdreport.jpg');


const Reports = () => {

    return (
        <>
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

                        <div class="news-block-one col-lg-4">
                            <div class="inner-box">
                                <div class="image"><Link to={'/#'}><img src={require('../../assets/images/reports/report1.main.jpg')} alt="" /></Link></div>
                                <div class="lower-content">
                                    {/* <div class="category">Business</div> */}
                                    <ul class="post-meta">
                                        {/* <li><Link to={'/#'}><i class="far fa-calendar-alt"></i>24th March 2020</Link></li> */}
                                        {/* <li><Link to={'/#'}><i class="far fa-user"></i>By Admin</Link></li> */}
                                    </ul>
                                    <h3>Obaseki launches Edo Tech Park</h3>
                                    <div class="text">The Edo State Governor, Godwin Obaseki, on Monday launched the Edo Tech Park in partnership with Decagon</div>
                                    <a className='category' target='_blank' rel='noopener noreferrer' href='https://punchng.com/obaseki-launches-edo-tech-park-promises-digital-economy/'>Read More</a>
                                </div>

                            </div>
                        </div>


                        {/* <!-- News Block One --> */}
                        <div class="news-block-one col-lg-4">
                            <div class="inner-box">
                                <div class="image"><Link to={'/#'}><img src={require('../../assets/images/reports/report2.main.jpg')} alt="" /></Link></div>
                                <div class="lower-content">
                                    {/* <div class="category">Business</div> */}
                                    {/* <ul class="post-meta">
                                        <li><Link to={'/#'}><i class="far fa-calendar-alt"></i>26th March 2020</Link></li>
                                        <li><Link to={'/#'}><i class="far fa-user"></i>By Admin</Link></li>
                                    </ul> */}
                                    <h3>Edojobs partners Azura Power</h3>
                                    <div className='text'>EdoJobs in partnership with Azura Power Plc has commenced the training of 30 youths in different skill acquisition programmes</div>
                                    <a className='category' target='_blank' rel='noopener noreferrer' href='https://www.latestnigeriannews.com/p/166885/edojobs-patners-azura-power-to-train-30-edojobs-partners-azura-power-to-train-30-edo-youths-in-skills-acquisition.html'>Read More</a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- News Block One --> */}
                        <div class="news-block-one col-lg-4">
                            <div class="inner-box">
                                <div class="image"><Link to={'/#'}><img src={require('../../assets/images/reports/report3.main.jpg')} alt="" /></Link></div>
                                <div class="lower-content">
                                    <div class="category">Business</div>
                                    <ul class="post-meta">
                                        <li><Link to={'/#'}><i class="far fa-calendar-alt"></i>28th March 2020</Link></li>
                                        <li><Link to={'/#'}><i class="far fa-user"></i>By Admin</Link></li>
                                    </ul>
                                    <h3><Link to={'/blog-details'}>UX is best solution for your <br />business & make noise.</Link></h3>
                                    <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore</div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- News Block One --> */}
                        <div class="news-block-one col-lg-4">
                            <div class="inner-box">
                                <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-12.jpg')} alt="" /></Link></div>
                                <div class="lower-content">
                                    <div class="category">Business</div>
                                    <ul class="post-meta">
                                        <li><Link to={'/#'}><i class="far fa-calendar-alt"></i>24th March 2020</Link></li>
                                        <li><Link to={'/#'}><i class="far fa-user"></i>By Admin</Link></li>
                                    </ul>
                                    <h3><Link to={'/blog-details'}>UX is best solution for your <br />business & make noise.</Link></h3>
                                    <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore</div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- News Block One --> */}
                        <div class="news-block-one col-lg-4">
                            <div class="inner-box">
                                <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-13.jpg')} alt="" /></Link></div>
                                <div class="lower-content">
                                    <div class="category">Business</div>
                                    <ul class="post-meta">
                                        <li><Link to={'/#'}><i class="far fa-calendar-alt"></i>26th March 2020</Link></li>
                                        <li><Link to={'/#'}><i class="far fa-user"></i>By Admin</Link></li>
                                    </ul>
                                    <h3><Link to={'/blog-details'}>UX is best solution for your <br />business & make noise.</Link></h3>
                                    <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore</div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- News Block One --> */}
                        <div class="news-block-one col-lg-4">
                            <div class="inner-box">
                                <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-14.jpg')} alt="" /></Link></div>
                                <div class="lower-content">
                                    <div class="category">Business</div>
                                    <ul class="post-meta">
                                        <li><Link to={'/#'}><i class="far fa-calendar-alt"></i>28th March 2020</Link></li>
                                        <li><Link to={'/#'}><i class="far fa-user"></i>By Admin</Link></li>
                                    </ul>
                                    <h3><Link to={'/blog-details'}>UX is best solution for your <br />business & make noise.</Link></h3>
                                    <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore</div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- News Block One --> */}
                        <div class="news-block-one col-lg-4">
                            <div class="inner-box">
                                <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-15.jpg')} alt="" /></Link></div>
                                <div class="lower-content">
                                    <div class="category">Business</div>
                                    <ul class="post-meta">
                                        <li><Link to={'/#'}><i class="far fa-calendar-alt"></i>24th March 2020</Link></li>
                                        <li><Link to={'/#'}><i class="far fa-user"></i>By Admin</Link></li>
                                    </ul>
                                    <h3><Link to={'/blog-details'}>UX is best solution for your <br />business & make noise.</Link></h3>
                                    <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore</div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- News Block One --> */}
                        <div class="news-block-one col-lg-4">
                            <div class="inner-box">
                                <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-16.jpg')} alt="" /></Link></div>
                                <div class="lower-content">
                                    <div class="category">Business</div>
                                    <ul class="post-meta">
                                        <li><Link to={'/#'}><i class="far fa-calendar-alt"></i>26th March 2020</Link></li>
                                        <li><Link to={'/#'}><i class="far fa-user"></i>By Admin</Link></li>
                                    </ul>
                                    <h3><Link to={'/blog-details'}>UX is best solution for your <br />business & make noise.</Link></h3>
                                    <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore</div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- News Block One --> */}
                        <div class="news-block-one col-lg-4">
                            <div class="inner-box">
                                <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-17.jpg')} alt="" /></Link></div>
                                <div class="lower-content">
                                    <div class="category">Business</div>
                                    <ul class="post-meta">
                                        <li><Link to={'/#'}><i class="far fa-calendar-alt"></i>28th March 2020</Link></li>
                                        <li><Link to={'/#'}><i class="far fa-user"></i>By Admin</Link></li>
                                    </ul>
                                    <h3><Link to={'/blog-details'}>UX is best solution for your <br />business & make noise.</Link></h3>
                                    <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore</div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- News Block One --> */}
                        <div class="news-block-one col-lg-4">
                            <div class="inner-box">
                                <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-18.jpg')} alt="" /></Link></div>
                                <div class="lower-content">
                                    <div class="category">Business</div>
                                    <ul class="post-meta">
                                        <li><Link to={'/#'}><i class="far fa-calendar-alt"></i>24th March 2020</Link></li>
                                        <li><Link to={'/#'}><i class="far fa-user"></i>By Admin</Link></li>
                                    </ul>
                                    <h3><Link to={'/blog-details'}>UX is best solution for your <br />business & make noise.</Link></h3>
                                    <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore</div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- News Block One --> */}
                        <div class="news-block-one col-lg-4">
                            <div class="inner-box">
                                <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-19.jpg')} alt="" /></Link></div>
                                <div class="lower-content">
                                    <div class="category">Business</div>
                                    <ul class="post-meta">
                                        <li><Link to={'/#'}><i class="far fa-calendar-alt"></i>26th March 2020</Link></li>
                                        <li><Link to={'/#'}><i class="far fa-user"></i>By Admin</Link></li>
                                    </ul>
                                    <h3><Link to={'/blog-details'}>UX is best solution for your <br />business & make noise.</Link></h3>
                                    <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore</div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- News Block One --> */}
                        <div class="news-block-one col-lg-4">
                            <div class="inner-box">
                                <div class="image"><Link to={'/#'}><img src={require('../../assets/images/resource/news-20.jpg')} alt="" /></Link></div>
                                <div class="lower-content">
                                    <div class="category">Business</div>
                                    <ul class="post-meta">
                                        <li><Link to={'/#'}><i class="far fa-calendar-alt"></i>28th March 2020</Link></li>
                                        <li><Link to={'/#'}><i class="far fa-user"></i>By Admin</Link></li>
                                    </ul>
                                    <h3><Link to={'/blog-details'}>UX is best solution for your <br />business & make noise.</Link></h3>
                                    <div class="text">Lorem ipsum dolor sit amet, consectet ur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore</div>
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
export default Reports;