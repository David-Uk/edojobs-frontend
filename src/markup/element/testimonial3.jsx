import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial3_content = [
    {
        description:
            "Treasure's idle and jobless days got over with a swift transformation.She is now an entrepreneur, employer of labour, and manpower developer who trains other youth amassing good fortune for her enterprise.",
        title: 'Small beginnings are still a reality',
        thumb: require('../../assets/images/testimonial/treasure.png'),
        author: 'Treasure Oghosa Aghamwenyi',
        designation: '',
    },
    {
        description:
            'He recounts that his first three interviews were not successful and he was almost at the brink of giving up. He could scarcely believe it when he received a phone call for a job interview. Paul went for the interview and behold, he immediately got the job!...the kind of job he has been dreaming of!',
        title: 'Its a dream come true for Paul!',
        thumb: require('../../assets/images/testimonial/paul.png'),
        author: 'Paul Igbinobaro',
        designation: '',
    },
    {
        description:
            'Precious Ojehomon came in contact with Edojobs in 2019 through her mother who is also a beneficiary of a previous programme (Cosmetology Training) organised by Edojobs. She continued with the practice of her skill, and perfected the art of painting and paint production, and she can boast of having a long list of clientele and a mouthwatering patronage.',
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
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
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