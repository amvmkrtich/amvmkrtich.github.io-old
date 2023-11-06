import '../About/_about.scss';
import plans from '../../img/works/plans.jpg';
import plansWebp from '../../img/works/plans.webp';
import Social from "../Social/Social";
import Form from "../Form/Form";
import Fade from "react-reveal/Fade";

function Contact(){
    return (<section className="about about--contacts" id="contacts">
        <div className="container">
            <div className="about__row">
                <div className="about__media">
                <Fade cascade left distance='60px' delay={500}>
                    <picture>
                        <source type="image/webp" srcSet={plans} />
                        <img src={plansWebp} alt="plans" />
                    </picture>
                </Fade>
                </div>
                <Fade cascade right distance='50px' delay={500}>
                <div className="">
                    <h5 className="title title--subtitle">Contacts</h5>
                    <h2 className="title about__title"><span>Fill free to contact me</span></h2>
                    <p><strong>Using the best way for you</strong></p>
                    <Fade delay={1000}>
                    <Social modificator="about__social-links"/>
                    </Fade>
                    <p><strong>Or leave your contacts and I will contact with you</strong></p>
                    <Form />
                </div>
                </Fade>
            </div>
        </div>
    </section>);
}

export default Contact;