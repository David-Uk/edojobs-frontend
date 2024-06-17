import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Brand1_content = [
    {
        thumb: require('../../assets/images/partners/1.png'),

    },
    {
        thumb: require('../../assets/images/partners/2.png'),

    },
    {
        thumb: require('../../assets/images/partners/3.png'),

    },
    {
        thumb: require('../../assets/images/partners/4.png'),

    },
    {
        thumb: require('../../assets/images/partners/5.png'),

    },
    {
        thumb: require('../../assets/images/partners/6.png'),

    },
    {
        thumb: require('../../assets/images/partners/7.png'),

    },
    {
        thumb: require('../../assets/images/partners/8.png'),

    },
    {
        thumb: require('../../assets/images/partners/9.png'),

    },
    {
        thumb: require('../../assets/images/partners/10.png'),

    },
    {
        thumb: require('../../assets/images/partners/11.png'),

    },
    {
        thumb: require('../../assets/images/partners/12.png'),

    },
    {
        thumb: require('../../assets/images/partners/13.png'),

    },
    {
        thumb: require('../../assets/images/partners/14.png'),

    },
    {
        thumb: require('../../assets/images/partners/15.png'),

    },
    {
        thumb: require('../../assets/images/partners/16.png'),

    },
]


class Brand1 extends Component {


    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5,
            autoplay: true
        };
        return (
            <>


                {/* <!-- Sponsors Section --> */}
                <section class="sponsors-section pt-0">
                    <div class="container-fluid">
                        {/* <!--Sponsors Carousel--> */}
                        <div className="row">
                            <div className="col-lg-12">
                                <Slider {...settings} className="theme_carousel">
                                    {Brand1_content.map((item, id) => (
                                        <div class="slide-item" key={id}><figure class="image-box"><Link to={'/#'}><img src={item.thumb} alt="" /></Link></figure></div>
                                    ))}
                                </Slider>

                            </div>
                        </div>
                    </div>
                </section>

            </>
        )
    }
}
export default Brand1;