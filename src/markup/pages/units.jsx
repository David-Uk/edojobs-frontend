import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Tab, } from 'react-bootstrap';
import Header from '../layout/header'
import Footer from '../layout/footer'
// import { Button } from 'react-bootstrap';


const aboutbg = require('./../../assets/images/sublets/images/edoskills.jpeg');
const creativeHub = require('./../../assets/images/icons/edo creative hub icon1.png');
const future500 = require('./../../assets/images/icons/edo future 500 icon1.png');
const jobCenter = require('./../../assets/images/icons/edo job centre icon1.png');
const innovates = require('./../../assets/images/icons/edo innovates icon1.png')
const edofac = require('./../../assets/images/icons/EDOFAC icon1.png')
const edoepc = require('./../../assets/images/icons/EPC icon1.png')

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
                                        <h5>Edo EPC</h5>
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first"
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
                                            <div className="link-btn"><Link to={'/#'} className="theme-btn btn-style-one"><span className="btn-title">Learn More</span></Link></div>
                                        </div>
                                    </div>
                                </div>
                                {/* </div> */}
                            </Tab.Pane>
                            <Tab.Pane eventKey="second" className=" fadeInUp animated">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="image"><img src={require('../../assets/images/resource/image-18.jpg')} alt="" /></div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="content pl-lg-4">
                                            <div className="sec-title">
                                                <div className="sub-title">Edo Future 500</div>
                                                {/* <h2>Just Proved Our Selves <br />For Great Works.</h2> */}
                                            </div>
                                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</div>
                                            <div className="link-btn"><Link to={'/#'} className="theme-btn btn-style-one"><span className="btn-title">Learn More</span></Link></div>
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
                                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</div>
                                            <div className="link-btn"><Link to={'/#'} className="theme-btn btn-style-one"><span className="btn-title">Learn More</span></Link></div>
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
                                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</div>
                                            <div className="link-btn"><Link to={'/#'} className="theme-btn btn-style-one"><span className="btn-title">Learn More</span></Link></div>
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
                                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</div>
                                            <div className="link-btn"><Link to={'/#'} className="theme-btn btn-style-one"><span className="btn-title">Learn More</span></Link></div>
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
                                                <div className="sub-title">Get Rewards</div>
                                                <h2>Just Proved Our Selves <br />For Great Works.</h2>
                                            </div>
                                            <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</div>
                                            <div className="link-btn"><Link to={'/#'} className="theme-btn btn-style-one"><span className="btn-title">Learn More</span></Link></div>
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