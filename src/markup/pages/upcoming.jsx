import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'
import ProgramModal from '../element/modals/programmodal';

const aboutbg = require('./../../assets/images/gallery/slide3.jpeg');

const programs = [
    {
        title: 'Edojobs Internship & Apprenticeship',
        imageUrl: require('../../assets/images/programmes/internship.jpeg'),
        intro: 'Are you a job seeker eager to gain hands-on experience in your preferred career path?',
        description: <p>Are you a job seeker eager to gain hands-on experience in your preferred career path? Our Internship and Apprenticeship Program offers the perfect opportunity to jumpstart your professional journey. Don't miss out on this chance to build your skills, expand your network, and launch your career!
            Get the opportunity to: <br />
            ✅ Gain Real-World Experience. <br />
            ✅ Develop Your Skills <br />
            ✅ Career Exploration<br />
            ✅ Build Your Network.<br />
            ✅ Increase Your Employability<br />

            Don't Wait – Apply Today!</p>,
        registrationUrl: 'https://tinyurl.com/Internship-Program-Jobseekers'
    }
]


const Upcoming = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Header />


            {/* <!-- Page Banner Section --> */}
            <section class="page-banner">
                <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                <div class="bottom-rotten-curve alternate"></div>

                <div class="auto-container">
                    <h1>Upcoming</h1>
                    <ul class="bread-crumb clearfix">
                        <li><Link to={'/#'}>Home</Link></li>
                        <li class="active">Upcoming Programmes</li>
                    </ul>
                </div>

            </section>
            {/* <!--End Banner Section --> */}

            {/* <!-- News Section --> */}
            <section class="news-section">
                <div class="auto-container">
                    <div class="row">
                        {/* <!-- News Block One --> */}
                        {programs.map(item => (
                            <div class="news-block-one col-lg-4">
                                <div class="inner-box">
                                    <div class="image"><Link to={'/#'}><img src={item.imageUrl} alt="" /></Link></div>
                                    <div class="lower-content">
                                        {/* <div class="category">Business</div> */}
                                        {/* <ul class="post-meta">
                                        <li><Link to={'/#'}><i class="far fa-calendar-alt"></i>24th March 2020</Link></li>
                                        <li><Link to={'/#'}><i class="far fa-user"></i>By Admin</Link></li>
                                    </ul> */}
                                        <h3><Link to={'#'}>{item.title}</Link></h3>
                                        <div class="text">{item.intro}</div>
                                        <button className='category' onClick={handleShow}>Read More</button>
                                    </div>
                                </div>
                                <ProgramModal show={show} handleClose={handleClose} item={item} />
                            </div>
                        ))}


                    </div>
                </div>
            </section>




            <Footer />
        </>
    )
}

export default Upcoming;