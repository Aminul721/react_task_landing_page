import teamimg1 from '../assets/images/team1.jpg';
import teamimg2 from '../assets/images/team2.png';
import teamimg3 from '../assets/images/team3.jpg';
import teamimg4 from '../assets/images/team4.jpeg';

import linkedinIcon from '../assets/images/linkedin.svg';
import fbIcon from '../assets/images/facebook.svg';
import twitterIcon from '../assets/images/twitter.svg';
import youtubeIcon from '../assets/images/youtube.svg';

const Team = () => {
    return (
        <>
            <div className="team-area">
                <div className="team-area__wrap center-content">
                    <div className="team-area__title">
                        <h2>Our Team</h2>
                        <p>scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="team-area__bx">
                        <div className="team-area__col">
                            <div className="team-area__img">
                                <a href="#"><img src={teamimg1} className="team-area__teamimg" alt="" /></a>
                                <div className="team-area__media">
                                <ul>
                                    <li><a href="#"><img src={linkedinIcon}/></a></li>
                                    <li><a href="#"><img src={fbIcon}/></a></li>
                                    <li><a href="#"><img src={twitterIcon}/></a></li>
                                    <li><a href="#"><img src={youtubeIcon}/></a></li>
                                </ul>
                                </div>
                            </div>
                            <div className="team-area__info">
                                <h4>jon de</h4>
                                <h6>front-end developer</h6>
                            </div>
                        </div>

                        <div className="team-area__col">
                            <div className="team-area__img">
                                <a href="#"><img src={teamimg2} className="team-area__teamimg" alt="" /></a>
                                <div className="team-area__media">
                                <ul>
                                    <li><a href="#"><img src={linkedinIcon}/></a></li>
                                    <li><a href="#"><img src={fbIcon}/></a></li>
                                    <li><a href="#"><img src={twitterIcon}/></a></li>
                                    <li><a href="#"><img src={youtubeIcon}/></a></li>
                                </ul>
                                </div>
                            </div>
                            <div className="team-area__info">
                                <h4>jon de</h4>
                                <h6>front-end developer</h6>
                            </div>
                        </div>

                        <div className="team-area__col">
                            <div className="team-area__img">
                                <a href="#"><img src={teamimg3} className="team-area__teamimg" alt="" /></a>
                                <div className="team-area__media">
                                <ul>
                                    <li><a href="#"><img src={linkedinIcon}/></a></li>
                                    <li><a href="#"><img src={fbIcon}/></a></li>
                                    <li><a href="#"><img src={twitterIcon}/></a></li>
                                    <li><a href="#"><img src={youtubeIcon}/></a></li>
                                </ul>
                                </div>
                            </div>
                            <div className="team-area__info">
                                <h4>jon de</h4>
                                <h6>front-end developer</h6>
                            </div>
                        </div>

                        <div className="team-area__col">
                            <div className="team-area__img">
                                <a href="#"><img src={teamimg4} className="team-area__teamimg" alt="" /></a>
                                <div className="team-area__media">
                                <ul>
                                    <li><a href="#"><img src={linkedinIcon}/></a></li>
                                    <li><a href="#"><img src={fbIcon}/></a></li>
                                    <li><a href="#"><img src={twitterIcon}/></a></li>
                                    <li><a href="#"><img src={youtubeIcon}/></a></li>
                                </ul>
                                </div>
                            </div>
                            <div className="team-area__info">
                                <h4>jon de</h4>
                                <h6>front-end developer</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Team;