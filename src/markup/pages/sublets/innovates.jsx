import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../../layout/header'
import Footer from '../../layout/footer'

const aboutbg = require('./../../../assets/images/background/image-11.jpg');
const addbg = require('./../../../assets/images/background/image-15.jpg');



const EdoInnovates = () => {
    return (
        <>
            <Header />

            {/* Page Banner Section */}
            <section class="page-banner">
                <div className="page-banner-bg" style={{ backgroundImage: "url(" + aboutbg + ")" }}></div>
                <div class="bottom-rotten-curve alternate"></div>

                <div class="auto-container">
                    <h1>Edo Innovates</h1>
                    <ul class="bread-crumb clearfix">
                        <li><Link to={'/'}>Home</Link></li>
                        <li class="active">Edo Innovates</li>
                    </ul>
                </div>
            </section>


            <Footer />
        </>
    )
}

export default EdoInnovates