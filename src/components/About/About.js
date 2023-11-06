import './_about.scss';
import mainPhoto from "../../img/main_photo.jpg";
import mainPhotoWebp from "../../img/main_photo.webp";
import {topSkills} from '../../db';
import Fade from 'react-reveal/Fade';

function About(props){
    const clazz = `about ${props.modificatorClass}`;


    return(<section className={clazz} id="aboutMe">
        <div className="container">
            <div className="about__row">
                <Fade left distance='30px' delay={1000}>
                <div className="about__media">
                    <picture>
                        <source type="image/webp" srcSet={mainPhotoWebp} />
                        <img src={mainPhoto} alt="main" />
                    </picture>
                </div>
                </Fade>
                <Fade bottom cascade distance='30px' delay={1000}>
                <div className="about__text">
                    <h5 className="title title--subtitle">About me</h5>
                    <h2 className="title about__title"><span>My name is Mkrtich</span></h2>
                    <p>I graduated from Yerevan State University faculty of physics. After university I started to
                        undertake a web developer training at gConverter and I learned programming languages and
                        improved my skills in different programming companies. I've started to work since 2016.</p>
                </div>
                </Fade>
                <Fade bottom cascade distance='50px' delay={1000}>
                <div className="about__skills main-skills-list">
                    {
                        topSkills.map(sk => {
                            const icon = "img/sprite.svg#"+sk.iconName;
                            return <div key={sk.id} className="main-skills-list__item">
                                <div className="main-skill">
                                    <div className="main-skill__icon">
                                        <svg className="icon">
                                            <use xlinkHref={icon}></use>
                                        </svg>
                                    </div>
                                    <div className="main-skill__info">
                                        <h5 className="main-skill__name title--fz14">{sk.title}</h5>
                                        <p>{sk.desc}</p>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
                </Fade>
            </div>
        </div>
    </section>);
}

export default About;