import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Testimonial3_content = [
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



    },
]


class Testimonial3 extends Component {


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


                {/* <!-- Testimonial Section Two --> */}
                <section class="testimonial-section-two">
                    <div class="auto-container">
                        <div class="sec-title text-center">
                            <div class="sub-title">Testimonials</div>
                            <h2>What Beneficiaries Say</h2>
                        </div>
                        <div class="row justify-content-center">
                            <div className="col-lg-10">
                                <Slider {...settings} className="theme_carousel">
                                    {Testimonial3_content.map((item, id) => (
                                        <div class="slide-item" key={id}>
                                            {/* <!-- Testimonial-block Two --> */}
                                            <div class="testimonial-block-two">
                                                <div class="inner-box">
                                                    <div class="icon"><span class="fal fa-star"></span></div>
                                                    <div class="quote"><span class="fal fa-quote-left"></span></div>
                                                    <h2>{item.title}</h2>
                                                    <div class="text">{item.description}</div>
                                                </div>
                                                <div class="author-info">
                                                    <div class="thumb">
                                                        <img src={item.thumb} height={50} width={50} alt="" />
                                                    </div>
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
export default Testimonial3;