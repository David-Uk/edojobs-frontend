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
    },
    {
        title: 'EdoCARES GRANTS now open for applications! ',
        imageUrl: require('../../assets/images/programmes/edocares.jpeg'),
        intro: 'The Edo State Government Godwin Obaseki, is proud to announce the 4th Phase of the EdoCARES Grants.',
        description: <p>The Edo State Government, led by His Excellency, Godwin Obaseki, is proud to announce the 4th Phase of the EdoCARES Grants. <br />
            This fantastic opportunity which is in partnership with the World Bank and Federal Government of Nigeria offers a threshold to structure your businesses with nonrefundable tokens. <br />
            Don't miss out! 🤝🌍 <br />
            Application is a breeze!🤩 <br />

            1️⃣ Online: Visit https://plax.ng/edo <br />

            2️⃣ In-person: Visit your nearest Edo Job Centre for guidance. <br />


            **
            📚 Review Eligibility Criteria and guidelines carefully before applying. Choose the right category for your business! <br />

            ••••••• <br />
            Enquiries Call: 07049296670 / 09056556134 <br />

            ⏰ Application deadline: Friday, 26th July, 2024. <br />

            Open to all Edo State resident business owners. Remember, this is a grant – no repayment is required! <br />

            Note: Application DOES NOT guarantee approval. Strict screening applies.</p>,
        registrationUrl: 'https://plax.ng/edo'
    },
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