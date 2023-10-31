import $ from 'jquery';
window.$ = $;
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import testimonialImg from '../assets/images/reactLogo.png';
const Testimonial = () => {
    return (
        <>
            <div className="testimonial-area">
                <div className="testimonial-area__wrap center-content">
                    <div className="testimonial-area__title">
                        <h2>Testimonial</h2>
                        <p>generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                    </div>
                    <div className="testimonial-area__bx">
                        <OwlCarousel className='owl-theme testimonial-area__owlcarousel'
                            loop={true} 
                            margin={10} 
                            nav={true}
                            dots={true}
                            items={1}
                            mouseDrag={true}
                            touchDrag={true}
                        >
                            <div className="testimonial-area__itemCol">
                                <div className="testimonial-area__innerbg">
                                    <div className="testimonial-area__photo">
                                        <img src={testimonialImg} alt="" />
                                    </div>
                                    <div className="testimonial-area__text">
                                        <p>Wait a second... you're telling me this testimonials slider is powered solely by CSS? That's some next-level web wizardry! I'm sold! Give me that mind-blowing slider to my website!</p>
                                    </div>
                                    <div className="testimonial-area__author">Henry Schwengle</div>
                                </div>
                            </div>

                            <div className="testimonial-area__itemCol">
                                <div className="testimonial-area__innerbg">
                                    <div className="testimonial-area__photo">
                                        <img src={testimonialImg} alt="" />
                                    </div>
                                    <div className="testimonial-area__text">
                                        <p>Wait a second... you're telling me this testimonials slider is powered solely by CSS? That's some next-level web wizardry! I'm sold! Give me that mind-blowing slider to my website!</p>
                                    </div>
                                    <div className="testimonial-area__author">JOHN "VROOM" CENA</div>
                                </div>
                            </div>

                            <div className="testimonial-area__itemCol">
                                <div className="testimonial-area__innerbg">
                                    <div className="testimonial-area__photo">
                                        <img src={testimonialImg} alt="" />
                                    </div>
                                    <div className="testimonial-area__text">
                                        <p>Wait a second... you're telling me this testimonials slider is powered solely by CSS? That's some next-level web wizardry! I'm sold! Give me that mind-blowing slider to my website!</p>
                                    </div>
                                    <div className="testimonial-area__author">HENRY SCHWENGLE</div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonial;