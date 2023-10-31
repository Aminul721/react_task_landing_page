import '../Components/Custom.js';
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import Skill from "../Components/Skill";
import Testimonial from "../Components/Testimonial";
import Contact from '../Components/Contact';
import Team from "../Components/Team";


const HomePage = () => {
    return (
        <>
            <Hero/>
            <Services/>
            <Testimonial/>
            <Skill/>
            <Team/>
            <Contact/>
        </>
    );
};

export default HomePage;