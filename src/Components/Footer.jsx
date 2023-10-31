
import linkedinIcon from '../assets/images/linkedin.svg';
import fbIcon from '../assets/images/facebook.svg';
import twitterIcon from '../assets/images/twitter.svg';
import youtubeIcon from '../assets/images/youtube.svg';

const Footer = () => {
    return (
        <>
            <footer className="footer-area">
                <div className="footer-area__wrap center-content">
                    <div className="footer-area__bx">
                        <div className="footer-area__col address--col">
                            <h6>Address</h6>
                            <ol>
                                <li>Dolon chapa building, khilkhet, Dhaka-1229</li>
                                <li><a href="tel:0000000" className='tel--icon'>000000000</a></li>
                                <li><a href="mailto:xxx@gmail.com" className='email--icon'>xxx@gmail.com</a></li>
                            </ol>
                        </div>
                        <div className="footer-area__col social--col">
                            <h6>Flowing</h6>
                            <ul>
                                <li><a href="#"><img src={linkedinIcon} /></a></li>
                                <li><a href="#"><img src={fbIcon} /></a></li>
                                <li><a href="#"><img src={twitterIcon} /></a></li>
                                <li><a href="#"><img src={youtubeIcon} /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;