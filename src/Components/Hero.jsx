import heroImg from '../assets/images/reactjs_banner.jpg';
const Hero = () => {
    return (
        <>
            <div className="hero-area">
                <div className="hero-area__wrap">
                <div className="hero-area__img"> <img src={heroImg} alt="" /></div>
                    <div className="hero-area__info">
                        <div className="hero-area__inner">
                        <h1>What is Lorem Ipsum? banner info</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sed, ex ratione dolorem amet quidem modi ipsum. Reiciendis doloremque saepe animi veritatis suscipit, eius, natus fugiat odit hic et dolorem?</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;