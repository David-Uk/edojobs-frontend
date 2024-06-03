import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const bgimg7 = require('./../../assets/images/background/image-7.jpg');

const Testimonial1_content = [
    {
        description:
            'Lorem ipsum dolor sit amet',
        title: 'Small beginnings are still a reality',
        thumb: require('../../assets/images/testimonial/treasure.png'),
        author: 'Treasure Oghosa Aghamwenyi',
        designation: '',
    },
    {
        description:
            'Lorem ipsum dolor sit amet',
        title: 'Its a dream come true for Paul!',
        thumb: require('../../assets/images/testimonial/paul.png'),
        author: 'Paul Igbinobaro',
        designation: '',
    },
    {
        description:
            'Lorem ipsum dolor sit amet',
        title: 'ASUU strike was a gainful time',
        thumb: require('../../assets/images/testimonial/precious.png'),
        author: 'Precious Ojehomon',
        designation: '',
    }
]


class Testimonial1 extends Component {


    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false
        };
        return (
            <>
                <section class="testimonial-section" style={{ backgroundImage: "url(" + bgimg7 + ")" }}>
                    <div class="auto-container">
                        <div class="sec-title">
                            <div class="sub-title">Testimonials</div>
                            <h2>Clients Feedback</h2>
                        </div>
                        <div class="row">
                            <div className="col-xl-12">
                                <Slider {...settings} className="theme_carousel">
                                    {Testimonial1_content.map((item, id) => (
                                        <div class="slide-item" key={id}>
                                            {/* <!-- Testimonial-block --> */}
                                            <div class="testimonial-block">
                                                <div class="inner-box">
                                                    <div class="icon"><span class="fal fa-star"></span></div>
                                                    <div class="quote"><span class="fal fa-quote-left"></span></div>
                                                    <h4>{item.title}</h4>
                                                    <div class="text">{item.description} </div>
                                                </div>
                                                <div class="author-info">
                                                    <div class="thumb"><img src={item.thumb} alt="" /></div>
                                                    <h4>{item.author}</h4>
                                                    <div class="designation">{item.designation}</div>
                                                </div>
                                            </div>
                                        </div>
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
export default Testimonial1;