import userIcon from '../assets/images/userIcon.svg';
import EmailIcon from '../assets/images/envelopeIcon.svg';
import TelIcon from '../assets/images/phoneIcon.svg';
const contact = () => {
    return (
        <>  
            <div className="contact-area">
                <div className="contact-area__wrap center-content">
                    <div className="contact-area__title">
                        <h2>Contact Us</h2>
                    </div>
                    <form action='#'>
                        <div className="contact-area__bx">
                            <div className="contact-area__frmrow">
                                <label><img src={userIcon} alt="" /></label>
                                <input type="text" className="contact-area__filed" placeholder="Name" />
                            </div>

                            <div className="contact-area__frmrow">
                                <label><img src={EmailIcon} alt="" /></label>
                                <input type="text" className="contact-area__filed" placeholder="E-mail" />
                            </div>

                            <div className="contact-area__frmrow">
                                <label><img src={TelIcon} alt="" /></label>
                                <input type="text" className="contact-area__filed" placeholder="Phone Number" />
                            </div>
                            <div className="contact-area__frmrow">
                                <textarea className="contact-area__filed message--field" rows="7" placeholder="Message"></textarea>
                            </div>
                        </div>

                        <div className="submit-btnwrap">
                            <button type="submit" className="submit-btn">Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default contact;

