import './_benefits.scss';
import {education, experience} from "../../db";
import Fade from "react-reveal/Fade";
import {useState} from "react";

function Benefits(){
    const [educationVisible, setEducationVisible] = useState(false);
    const [experineceVisible, setExperineceVisible] = useState(false);

    return (<section className="benefits" id="benefits">
        <div className="container">
            <Fade bottom distance='70px' cascade delay={1000} >
            <header className="benefits__head">
                <h5 className="title title--subtitle benefits__subtitle">Experience</h5>
                <h2 className="title benefits__title"><span>What I learned and did before</span></h2>
            </header>
            </Fade>
            <div className="benefits__body">
                <div className="benefits__col">
                    <Fade bottom cascade delay={1000} distance='70px'>
                    <div className={`line-list ${educationVisible ? 'is-visible' : ''}`}>
                        <h3 className="title title--fz20 line-list__title">Education</h3>
                        <Fade
                            bottom
                            cascade
                            delay={1000}
                            distance='70px'
                            onReveal={ () => setEducationVisible(true) }
                        >
                        <div className="line-list__items">
                            {
                                [...education].reverse().map(ed =>
                                    <div key={ed.id} className="line-list__item">
                                        <div className="line-box">
                                            <div className="line-box__head">
                                                <div className="line-box__icon">
                                                    <svg className="icon">
                                                        <use xlinkHref={`img/sprite.svg#${ed.iconName}`}></use>
                                                    </svg>
                                                </div>
                                                <div className="line-box__details">
                                                    <h4 className="title title--fz14">{`${ed.organization} ${ed.year}`}</h4>
                                                    <strong>{ed.name}</strong>
                                                </div>
                                            </div>
                                            <div className="line-box__desc">
                                                <p>{ed.desc} </p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        </Fade>
                    </div>
                    </Fade>
                </div>
                <div className="benefits__col">
                <Fade bottom cascade delay={1000} distance='70px'>
                    <div className={`line-list ${experineceVisible ? 'is-visible' : ''}`}>
                        <h3 className="title title--fz20 line-list__title">Experience</h3>
                        <Fade
                            bottom
                            cascade
                            delay={1000}
                            distance='70px'
                            onReveal={ () => setExperineceVisible(true) }
                        >
                            <div className="line-list__items">
                            {
                                [...experience].reverse().map(ex => <div key={ex.id} className="line-list__item">
                                    <div className="line-box">
                                        <div className="line-box__head">
                                            <div className="line-box__icon">
                                                <svg className="icon">
                                                    <use xlinkHref={`img/sprite.svg#${ex.iconName}`}></use>
                                                </svg>
                                            </div>
                                            <div className="line-box__details">
                                                <h4 className="title title--fz14">{`${ex.company} - ${ex.country} ${ex.year}`}</h4>
                                                <strong>{ex.role}</strong>
                                            </div>
                                        </div>
                                        <div className="line-box__desc">
                                            <p>{ex.desc}</p>
                                        </div>
                                    </div>
                                </div>)
                            }
                            </div>
                        </Fade>
                    </div>
                </Fade>
                </div>
            </div>
        </div>
    </section>);
}

export default Benefits;