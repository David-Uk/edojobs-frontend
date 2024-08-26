import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../layout/header'
import Footer from '../layout/footer'
import ProgramModal from '../element/modals/programmodal';

const aboutbg = require('./../../assets/images/gallery/slide3.jpeg');

const programs = [
    {
        key: 1,
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
        key: 2,
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
    {
        key: 3,
        title: 'Edojobs Business Digitization Programme',
        imageUrl: require('../../assets/images/programmes/businessdigital.jpeg'),
        intro: 'The Edo State Government Godwin Obaseki, is proud to announce the 4th Phase of the EdoCARES Grants.',
        description: <p>
            CALL FOR APPLICATION. 🚨 🚨 🚨 <br />

            Are you a business owner looking to stay ahead in the competitive market? Do you want to learn how to leverage digital technologies to drive business growth and success? 🤔 Then, this opportunity is for you. <br />

            EdoJobs is organizing a 6-weeks Business Digitalization Training Program, designed to help businesses like yours thrive in this digital age. <br />

            BENEFITS: <br />
            •Increase Sales and boost profits with digital strategies <br />
            •Expanding your market reach by attracting more customers online <br />
            •Enhanced customer satisfaction and engagement through digital tools <br /> <br />

            During the 6-week training program, you'll gain practical skills and knowledge in: <br />
            •Digital marketing and social media advertising <br />
            •E-commerce and online sales strategies <br />
            •Content creation and visual branding <br />
            •Video editing and product photography. <br /> <br />

            Seize this opportunity to transform your business and gain a competitive edge in the market! <br />

            Register now with the link 👇 <br />
            https://tinyurl.com/EdojobsBizDigitalization <br />

            Application Deadline: Monday, 10th June, 2024. <br />

            For more enquiries: please call - 08125286095 <br />
        </p>,
        registrationUrl: 'https://tinyurl.com/EdojobsBizDigitalization'

    },
    {
        key: 4,
        title: 'Edojobs Agricultural Training',
        imageUrl: require('../../assets/images/programmes/businessdigital.jpeg'),
        intro: 'The Edo State Government Godwin Obaseki, is proud to announce the 4th Phase of the EdoCARES Grants.',
        description: <p>
            The high nutritional value of vegetables make them highly appreciated for human consumption and lucrative on both small and large scale farming. <br />

            Vegetable farming provides a promising economic opportunity and plays a vital role on the food front. <br />

            Now, you can sign up for Edojobs training on Vegetable Cultivation and learn the improved techniques for maximum farm produce. <br />
            EDO CENTRAL <br />
            ✓ Location: Esan North-east LGA <br />
            ✓ Date: 6th September, 2024 <br />
            ✓ Time: 10:00 am <br /><br />

            For enquiries, please call 08131861068 <br />

            This training is brought to you free of charge by the Edo State Government.<br />
        </p>,
        registrationUrl: 'https://tinyurl.com/EDOJOBS-AGRICULTURAL-TRAINING'

    }
]


const Upcoming = () => {
    const [show, setShow] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleShow = (item) => {
        setSelectedItem(item);
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
        setSelectedItem(null);
    };


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
            <div>
                <section className="news-section">
                    <div className="auto-container">
                        <div className="row">
                            {programs.map((item) => (
                                <div key={item.key} className="news-block-one col-lg-4">
                                    <div className="inner-box">
                                        <div className="image">
                                            <Link to={`/#${item.imageUrl}`}>
                                                <img src={item.imageUrl} alt="" />
                                            </Link>
                                        </div>
                                        <div className="lower-content">
                                            <h3><Link to={`/#${item.title}`}>{item.title}</Link></h3>
                                            <div className="text">{item.intro}</div>
                                            <button className="category" onClick={() => handleShow(item)}>Read More</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {selectedItem && (
                    <ProgramModal show={show} handleClose={handleClose} item={selectedItem} />
                )}
            </div>



            <Footer />
        </>
    )
}

export default Upcoming;