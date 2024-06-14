import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Menu extends Component {


    render() {
        return (
            <>
                <div class="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                    <ul class="navigation clearfix">
                        <li><Link to={'/'}>Home</Link>
                            {/* <ul>
                                <li><Link to={'/#'}>Home page 01</Link></li>
                                <li><Link to={'/index-2'}>Home page 02</Link></li>
                                <li><Link to={'/index-3'}>Home page 03</Link></li>
                                <li><Link to={'/index-4'}>Home page 04</Link></li>
                                <li><Link to={'/onepage'}>Onepage Version</Link></li>
                                <li><Link to={'/rtl-home'}>Home RTL</Link></li>
                                <li class="dropdown"><Link to={'/#'}>Header Styles</Link>
                                    <ul>
                                        <li><Link to={'/'}>Header Style One</Link></li>
                                        <li><Link to={'/index-2'}>Header Style Two</Link></li>
                                        <li><Link to={'/index-3'}>Header Style Three</Link></li>
                                        <li><Link to={'/index-4'}>Header Style Four</Link></li>
                                    </ul>
                                </li>
                            </ul> */}
                        </li>
                        {/* <li><Link to={'/about'}>About Us</Link></li> */}
                        <li className='dropdown'><Link to={'/about'}>About</Link>
                            <ul>
                                <li><Link to={'/about'}>About Us</Link></li>
                                <li><Link to={'/services'}>Services</Link></li>
                                <li><Link to={'/team'}>Team</Link></li>
                            </ul>
                        </li>
                        <li class="dropdown"><Link to='/units'>Departments</Link>
                            <ul>

                                <li><Link to='/units/vocationalskills'>Vocational Skills</Link></li>
                                <li><Link to='/units/edojobcenter'>Job Matching</Link></li>
                                <li><Link to='/units/entrepreneurship'>Entrepreneurship</Link> </li>
                                <li><Link to='/units/edofac'>Edofac</Link></li>
                                <li><Link to='/units/msme'>Edo MSME</Link></li>
                                <li><Link to='/units/edocreativehub'>Edo Creative Hub</Link></li>
                                <li><Link to='/units/edoinnovates'>Edo Innovates</Link></li>
                            </ul>
                        </li>
                        {/* <li class="dropdown"><Link to={'/#'}>Portfolio</Link>
                            <ul>
                                <li><Link to={'/portfolio-1'}>Portfolio One</Link></li>
                                <li><Link to={'/portfolio-2'}>Portfolio Two</Link></li>
                                <li><Link to={'/portfolio-details'}>Portfolio Details</Link></li>
                            </ul>
                        </li> */}
                        <li class="dropdown"><Link to={'/#'}>Information</Link>
                            <ul>
                                <li><Link to={'/reports'}>Reports</Link></li>
                                <li><Link to={'/blog-standard'}>Blog</Link></li>
                                <li><Link to={'/blog-details'}>Gallery</Link></li>
                                <li><Link to={'/faq'}>FAQ</Link></li>
                            </ul>
                        </li>
                        {/* <li class="dropdown"><Link to={'/#'}>Pages</Link>
                            <ul>
                                <li><Link to={'/careers'}>Careers</Link></li>
                                <li><Link to={'/team'}>Team</Link></li>
                                <li><Link to={'/team-details'}>Team Details</Link></li>

                                <li class="dropdown"><Link to={'/#'}>Shop</Link>
                                    <ul>
                                        <li><Link to={'/shop'}>Products</Link></li>
                                        <li><Link to={'/product-details'}>Product Details</Link></li>
                                        <li><Link to={'/shopping-cart'}>Shopping Cart</Link></li>
                                        <li><Link to={'/checkout'}>Checkout</Link></li>
                                    </ul>
                                </li>
                                <li><Link to={'/faq'}>Faq's</Link></li>
                                <li><Link to={'/404'}>404</Link></li>
                            </ul>
                        </li> */}

                        <li><Link to={'/contact'}>Contact</Link></li>
                    </ul>
                </div>

            </>
        )
    }
}
export default Menu;