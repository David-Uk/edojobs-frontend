import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    const date = new Date().getFullYear()

    return (
        <>
            <footer class="main-footer">
                <div class="auto-container">

                    <div class="widgets-section">
                        <div class="row clearfix">


                            <div class="column col-lg-4">
                                <div class="footer-widget logo-widget">
                                    <div class="widget-content">
                                        <div class="footer-logo">
                                            <Link to="/"><img class="" src={require('../../assets/images/essda.svg')} height={150} width={150} alt="" /></Link>
                                        </div>
                                        {/* <div class="text">Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</div> */}
                                        <ul style={{ marginLeft: '0', marginRight: 0, fontSize: '10px', textAlign: 'left' }} class="social-links clearfix">
                                            <li style={{ margin: '0' }}><a href={'https://facebook.com/edojobsinitiative'}><span class="fab fa-facebook-f"></span></a></li>
                                            <li style={{ margin: '0' }}><a href={'https://x.com/Edojobs'}><span class="fab fa-twitter"></span></a></li>
                                            <li style={{ margin: '0' }}><a href={'https://instagram.com/edojobs'}><span class="fab fa-instagram"></span></a></li>
                                            <li style={{ margin: '0' }}><a href={'https://linkedin.com/company/edojobs'}><span class="fab fa-linkedin"></span></a></li>
                                            <li style={{ margin: '0' }}><a href={'https://wa.link/3qdacu'}><span class="fab fa-whatsapp"></span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <div class="column col-lg-4">
                                <div class="footer-widget links-widget">
                                    <div class="widget-content">
                                        <h3>Links</h3>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <ul>
                                                    <li><Link to={'/'}>Home</Link></li>
                                                    <li><Link to={'/about'}>About</Link></li>
                                                    <li><Link to={'/services'}>Services</Link></li>
                                                    <li><Link to={'/contact'}>Contact</Link></li>
                                                </ul>
                                            </div>
                                            <div class="col-md-6">
                                                <ul>
                                                    <li><Link to={'/reports'}>Reports</Link></li>
                                                    <li><Link to={'/units'}>Units</Link></li>
                                                    <li><Link to={'/gallery'}>Gallery</Link></li>
                                                    <li><Link to={'/faq'}>FAQ</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="column col-lg-4">
                                <div class="footer-widget instagram-widget">
                                    <h3>Photo Showcase</h3>
                                    <div class="inner-box">
                                        <div class="wrapper-box">
                                            <div class="image">
                                                <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-1.jpg')} alt="" />

                                                <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-1.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                            </div>
                                            <div class="image">
                                                <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-2.jpg')} alt="" />
                                                <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-2.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                            </div>
                                            <div class="image">
                                                <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-3.jpg')} alt="" />
                                                <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-3.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                            </div>
                                            <div class="image">
                                                <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-4.jpg')} alt="" />
                                                <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-4.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                            </div>
                                            <div class="image">
                                                <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-5.jpg')} alt="" />
                                                <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-5.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                            </div>
                                            <div class="image">
                                                <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-6.jpg')} alt="" />
                                                <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-6.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                            </div>
                                            <div class="image">
                                                <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-7.jpg')} alt="" />
                                                <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-7.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                            </div>
                                            <div class="image">
                                                <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-8.jpg')} alt="" />
                                                <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-8.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                            </div>
                                            <div class="image">
                                                <img class="lazy-image owl-lazy" src={require('../../assets/images/gallery/gallery-9.jpg')} alt="" />
                                                <div class="overlay-link"><Link to={'/assets/images/gallery/gallery-9.jpg'} class="lightbox-image" data-fancybox="gallery"><span class="fa fa-plus"></span></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div class="auto-container">
                    <div class="footer-bottom">
                        <div class="copyright">Copyright &copy; {date}</div>
                    </div>
                </div>
            </footer>


        </>
    );

}

export default Footer;