import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Tab, } from 'react-bootstrap';
import Header from '../layout/header'
import Footer from '../layout/footer'
// import { Button } from 'react-bootstrap';


const aboutbg = require('./../../assets/images/photo/slide15.jpeg');
const creativeHub = require('./../../assets/images/sublets/victoruwaifohub.png');
const future500 = require('./../../assets/images/sublets/future500.png');
const jobCenter = require('./../../assets/images/sublets/jobcentre.png');
const innovates = require('./../../assets/images/sublets/innovates.png')
const edofac = require('./../../assets/images/sublets/fac.png')
const edoepc = require('./../../assets/images/icons/EPC icon1.png')
const skills = require('./../../assets/images/sublets/future500.png');

const victoruwaifohub = require("../../assets/images/sublets/images/creativehub.jpg")


const Units = () => {
    return (
        <>
            <Header />
            {/* <!--Search Popup--> */}


            {/* <!-- Page Banner Section --> */}
            <section className="page-banner">
                <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                <div className="bottom-rotten-curve alternate"></div>

                <div className="auto-container">
                    <h1>Our Units</h1>
                    <ul className="bread-crumb clearfix">
                        <li><Link to={'/#'}>Home</Link></li>
                        <li className="active">Units</li>
                    </ul>
                </div>

            </section>
            {/* <!--End Banner Section --> */}


            {/* <!-- Services Section Five --> */}
            <section className="services-section-five">
                <div className="auto-container">
                    <Tab.Container defaultActiveKey="first">
                        <Nav className="nav-tabs tab-btn-style-one">
                            <Nav.Item>
                                <Nav.Link eventKey="first">
                                    <div className="icon-box">
                                        <div className="icon">
                                            <img src={creativeHub} height={30} width={50} alt="" />

                                        </div>
                                        <h5>Edo Creative Hub</h5>
                                    </div>
                                    {/* <div className="m-4">
                                        <div className="card" style={{ width: "300px" }}>
                                            <img src={creativeHub} className="card-img-top" alt="creativeHub" />
                                            <div className="card-body text-center">
                                                <h5 className="card-title">Alice Liddel</h5>
                                                <p className="card-text">Alice is a freelance web designer and developer based in London. She is specialized in HTML5, CSS3, JavaScript, Bootstrap, etc.</p>
                                                <Link to="#" className="btn btn-primary">View Profile</Link>
                                            </div>
                                        </div>
                                    </div> */}

                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">
                                    <div className="icon-box">
                                        <div className="icon">
                                            <img src={future500} height={30} width={50} alt="" />

                                        </div>
                                        <h5>Edo Future 500</h5>
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">
                                    <div className="icon-box">
                                        <div className="icon">
                                            <img src={jobCenter} height={30} width={50} alt="" />

                                        </div>
                                        <h5>Edojob Center</h5>
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth">
                                    <div className="icon-box">
                                        <div className="icon">
                                            <img src={innovates} height={30} width={50} alt="" />

                                        </div>
                                        <h5>Edo Innovates</h5>
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fifth">
                                    <div className="icon-box">
                                        <div className="icon">
                                            <img src={edofac} height={30} width={50} alt="" />

                                        </div>
                                        <h5>Edo FAC</h5>
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="sixth">
                                    <div className="icon-box">
                                        <div className="icon">
                                            <img src={edoepc} height={30} width={50} alt="" />

                                        </div>
                                        <h5>Entrepreneurship</h5>
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="seventh">
                                    <div className="icon-box">
                                        <div className="icon">
                                            <img src={skills} height={30} width={50} alt="" />

                                        </div>
                                        <h5>Vocational Skills</h5>
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane id='creativehub' eventKey="first"
                            // className=" fadeInUp animated"
                            >
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="image"><img src={victoruwaifohub} alt="" /></div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="content pl-lg-4">
                                            <div className="sec-title">
                                                <div className="sub-title">Edo Creative Hub</div>
                                                {/* <h2>Just Proved Our Selves <br />For Great Works.</h2> */}
                                            </div>
                                            <div className="text">Victor Uwaifo Creative Hub & Sound Stage provides -a state-of-the-art soundstage to develop world-class content.</div>
                                            <div className="link-btn"><Link to='/units/edocreativehub' className="theme-btn btn-style-one"><span className="btn-title">Learn More</span></Link></div>
                                        </div>
                                    </div>
                                </div>
                                {/* </div> */}
                            </Tab.Pane>
                            <Tab.Pane id='future500' eventKey="second" className="fadeInUp animated">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="image"><img src={require('../../assets/images/resource/image-18.jpg')} alt="" /></div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="content pl-lg-4">
                                            <div className="sec-title">
                                                <div className="sub-title">Edo MSME</div>
                                                {/* <h2>Just Proved Our Selves <br />For Great Works.</h2> */}
                                            </div>
                                            <div className="text">The Edo State MSME Fund, set up by the Edo State Government,in collaboration with the Bank of Industry (BOI), and managed by the agency, is focused on fostering economic growth and supporting local businesses in Edo State. </div>
                                            <div className="link-btn"><Link to={'/units/msme'} className="theme-btn btn-style-one"><span className="btn-title">Learn More</span></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third" className=" fadeInUp animated">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="image"><img src={require('../../assets/images/sublets/images/edojobcentre.jpeg')} alt="" /></div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="content pl-lg-4">
                                            <div className="sec-title">
                                                <div className="sub-title">Edojob Center</div>
                                                {/* <h2>Just Proved Our Selves <br />For Great Works.</h2> */}
                                            </div>
                                            <div className="text">The Job Matching and Placement unit was set up to achieve the goal of the agency which is to provide the supply of and attract the demand for highly skilled talent in Edo State. This unit functions through a physical location known as  Edo Job Centres.</div>
                                            <div className="link-btn"><Link to={'/units/edojobcenter'} className="theme-btn btn-style-one"><span className="btn-title">Learn More</span></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth" className=" fadeInUp animated">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="image"><img src={require('../../assets/images/sublets/images/edoinnovates.jpg')} alt="" /></div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="content pl-lg-4">
                                            <div className="sec-title">
                                                <div className="sub-title">Edo Innovates</div>
                                                {/* <h2>Just Proved Our Selves <br />For Great Works.</h2> */}
                                            </div>
                                            <div className="text">It is an initiative of the Edo State Skills Development Agency under His Excellency, Gov. Godwin Obaseki; commissioned on the 14th of June, 2018 by Professor Yemi Osinbanjo Vice President of the Federal Republic of Nigeria with the goal of raising an army of highly skilled IT  professionals</div>
                                            <div className="link-btn"><Link to={'/units/edoinnovates'} className="theme-btn btn-style-one"><span className="btn-title">Learn More</span></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth" className=" fadeInUp animated">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="image"><img src={require('../../assets/images/sublets/images/edofac.jpeg')} alt="" /></div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="content pl-lg-4">
                                            <div className="sec-title">
                                                <div className="sub-title">Edo FAC</div>
                                                {/* <h2>Just Proved Our Selves <br />For Great Works.</h2> */}
                                            </div>
                                            <div className="text">Edo Food and Agricultural Cluster (EdoFAC) is the Agricultural unit of Edojobs leveraging Agriculture for job creation in the state with a vision to make Edo a hub of skilled Agripreneurs profitably delivering quality goods and services within and outside Edo State</div>
                                            <div className="link-btn"><Link to={'/units/edofac'} className="theme-btn btn-style-one"><span className="btn-title">Learn More</span></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="sixth" className=" fadeInUp animated">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="image"><img src={require('../../assets/images/resource/image-18.jpg')} alt="" /></div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="content pl-lg-4">
                                            <div className="sec-title">
                                                <div className="sub-title">Entrepreneurship</div>
                                                {/* <h2>Just Proved Our Selves <br />For Great Works.</h2> */}
                                            </div>
                                            <div className="text">This initiative is concerned with entrepreneurship development. It was set-up to enhance the skills and entrepreneurial knowledge of Edo business owners to boost the pace at which new ventures are created and sustained within the state.</div>
                                            <div className="link-btn"><Link to={'/units/entrepreneurship'} className="theme-btn btn-style-one"><span className="btn-title">Learn More</span></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="seventh" className=" fadeInUp animated">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="image"><img src={require('../../assets/images/sublets/images/edoskills.jpg')} alt="" /></div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="content pl-lg-4">
                                            <div className="sec-title">
                                                <div className="sub-title">Vocational Skills</div>
                                                {/* <h2>Just Proved Our Selves <br />For Great Works.</h2> */}
                                            </div>
                                            <div className="text">The Vocational Training and Skills Development unit of the Edo State Skills Development Agency is responsible for implementing vocational skills training in manufacturing and construction trades.</div>
                                            <div className="link-btn"><Link to={'/units/vocationalskills'} className="theme-btn btn-style-one"><span className="btn-title">Learn More</span></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>
            </section>

            {/* <!-- Gallery Section --> */}
            {/* <ServiceFilter1 /> */}

            {/* <!-- Sponsors Section --> */}

            {/* <Brand1 /> */}

            <Footer />
        </>
    )
}

export default Units;