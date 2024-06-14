import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../../layout/header'
import Footer from '../../layout/footer'
import { Helmet } from 'react-helmet';

const aboutbg = require('./../../../assets/images/sublets/images/fac/ss30.png');
const addbg = require('./../../../assets/images/background/image-15.jpg');



const EdoFAC = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Edo Food and Agricultural Cluster (EdoFAC) is the Agricultural unit of Edojobs leveraging Agriculture for job creation in the State" />
                <title>Edojobs Official Website | Edo FAC</title>
            </Helmet>
            <Header />

            {/* Page Banner Section */}
            <section class="page-banner">
                <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                <div class="bottom-rotten-curve alternate"></div>

                <div class="auto-container">
                    <h1>Edo FAC</h1>
                    <ul class="bread-crumb clearfix">
                        <li><Link to={'/'}>Home</Link></li>
                        <li class="active">Edo FAC</li>
                    </ul>
                </div>
            </section>

            <div class="portfolio-details">
                <div class="auto-container">
                    <div class="top-content">
                        <div class="image-box"><img src={require('../../../assets/images/sublets/images/fac/005.jpg')} alt="" /></div>
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
                        <h2>Edo<br />FAC</h2>
                    </div>
                    <div class="text">Edo Food and Agricultural Cluster (EdoFAC) is the Agricultural unit of Edojobs leveraging Agriculture for job creation in the state with a vision to make Edo a hub of skilled Agripreneurs profitably delivering quality goods and services within and outside Edo state and to further improve the livelihood of farmers in the state. EdoFAC works within Edojobs to not just improve the livelihood of farmers, but to encourage more people to go into farming.</div>
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="image-box"><img height={300} src={require('../../../assets/images/sublets/images/fac/ss17.png')} alt="" /></div>
                        </div>
                        <div class="col-lg-6">
                            <div class="image-box"><img height={300} src={require('../../../assets/images/sublets/images/fac/ss18.png')} alt="" /></div>
                        </div>
                    </div>
                    <div>
                        <p>The unit provides the following services to farmers in the state.
                            <ul style={{ listStyle: 'dot' }}>
                                <li>Aggregation Services </li>
                                <li>Provision of Inputs</li>
                                <li>Startup Support</li>
                                <li>Promoting Tech Enabled Agriculture</li>
                            </ul>
                        </p>

                        <p>Programs implemented through EdoFAC across all LGAs in collaboration with various implementing partners like GIZ (Deutsche Gesellschaft für internationale Zusammenarbeit) include.
                            <ul>
                                <li>Training and demo farm set-up for cassava farmers (training on good agricultural practices in cassava cultivation</li>
                                <li>Edojobs forest regeneration and tree planting project to plant and nurture 44,000 trees in 40 hectares of land across three local Government Areas.</li>
                                <li>Set up of the Edo Farmers Market (market linkages for farmers)</li>
                                <li>Retail Aggregation Scheme</li>
                                <li>Soilless Agriculture training and demo farm setup.</li>
                                <li>Cassava processing value chain development program</li>
                                <li>EDOFAC Cooperative Management</li>
                                <li>Training on poultry production, cassava processing beekeeping, snail amongst others.</li>
                            </ul>
                        </p>
                    </div>
                    <div class="project-post-pagination">
                        <div class="wrapper-box">

                            {/* <div class="prev-post">
                                <h5> Previous Post</h5>
                                <h4>UX Design Means</h4>
                            </div> */}

                            {/* <a href='' class="page-view"><span class="icon">Learn More</span></a> */}

                            {/* <a style={{
                                background: 'green',
                                textAlign: 'center',
                                color: 'white',
                                padding: '1.2em',
                                borderRadius: '1.5em',
                                margin: '0 auto'
                            }} className='' href="">Learn More</a> */}

                        </div>
                    </div>
                </div>
            </div>



            <Footer />
        </>
    )
}

export default EdoFAC;