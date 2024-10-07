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
        imageUrl: require('../../assets/images/programmes/vegetable.jpeg'),
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

const heritage = {
    title: 'The Heritage 100 Training Programme',
    imageUrl: require('../../assets/images/programmes/theheritage.jpg'),
    link: '/upcoming/minartandculture-heritage100training',
    intro: 'Open Call for The Heritage 100 Training Program: A Unique Opportunity to Shape the Future of Edo State’s Cultural Heritage',
    description: <p>
        <h2>        Open Call for The Heritage 100 Training Program: A Unique Opportunity to Shape the Future of Edo State’s Cultural Heritage</h2>
        <p>
            Are you passionate about preserving culture and history? Do you want to be part of Edo State’s transformation into a global cultural hub? The Edo State Ministry of Arts, Culture, and Tourism is excited to announce the Heritage 100 Training Program, an exceptional opportunity for 100 young people to gain useful skills and contribute to the success of the Benin Cultural District. <br />
            <h3>Program Overview</h3>
            The Heritage 100 Training Program is designed to equip participants with the skills needed to support Edo State’s vibrant cultural and tourism sectors. Participants will undergo intensive training, with the possibility of gaining permanent employment within the Edo State Ministry of Arts, Culture, and Tourism (MATC) or working as freelance heritage support officers. <br />
            Key Training Areas Include: <br />
            •	Introduction to Edo State's Cultural Heritage <br />
            •	Tour Guide Training <br />
            •	Cultural and Event Management <br />
            •	Cultural Digital Skills Development <br />
            •	Customer Service and Hospitality <br />
            •	Career Development <br /> <br />
            <h4>Program Benefits</h4>
            •	Duration: 2 weeks of hands-on, immersive training. <br />
            •	Skills Development: Acquire critical skills to excel in Edo State’s growing cultural and tourism industries. <br />
            •	Employment Opportunities: Stand a chance to be absorbed into the Edo State Ministry of Arts, Culture, and Tourism or explore freelance career paths as a registered heritage support officer. <br />
            •	Cultural Impact: Play a key role in the preservation and promotion of Edo State’s rich heritage. <br />
            •	Becoming a cultural Ambassador: Represent Edo State's heritage with pride in local and international platforms. <br />
            Who Can Apply? <br />
            We are looking for passionate young people who: <br />
            •	Are aged between 18 and 40 with at a minimum of S.S.C.E, B.A(HONS.) B.Sc., B.A or HND in any discipline. <br />
            •	Have a deep interest in Edo State's cultural heritage. <br />
            •	Are enthusiastic about building a career in the cultural and tourism sectors. <br />
            •	Are eager to learn, develop new skills, and contribute to Edo State’s transformation. <br />
        </p>
        <p>
            <h4>How to Apply</h4>
            Applications are open to all eligible young people across Edo State. To apply, please submit your application through the Edo State Skills Acquisition Agency (EdoJobs) portal by following the steps below: <br />
            •	Visit the EdoJobs website: <a href="https://edojobs.info/upcoming/minartandculture-heritage100training"></a> <br />
            •	Click on the Heritage 100 Training Program banner. <br />
            •	Complete the application form and upload your supporting documents. <br />
            Application Deadline: October 10, 2024. Training Begins October 14 2024 <br />
            For further inquiries about the program, please contact: <br />
            •	Edo State Ministry of Arts, Culture, and Tourism, 6th floor, Secretariat Complex, Sapele Road, Benin City <br />
            Don’t Miss This Chance! <br />
            Be part of a program that blends tradition with innovation, empowering you to contribute to the future of Edo State’s cultural and tourism industries. Apply today and take the first step towards a rewarding career in preserving Edo State’s heritage! <br />

        </p>
    </p>
}


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


                            <div className="news-block-one col-lg-4">
                                <div className="inner-box">
                                    <div className="image">
                                        <Link to={heritage.link}>
                                            <img src={heritage.imageUrl} alt="" />
                                        </Link>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link to={heritage.link}>{heritage.title}</Link></h3>
                                        <div className="text">{heritage.intro}</div>
                                        <Link to={heritage.link} className="category">Read More</Link>
                                    </div>
                                </div>
                            </div>

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