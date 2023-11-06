import './_skills.scss';
import {skills, technologies} from "../../db";
import Fade from "react-reveal/Fade";

function Skills(){
    return (<section className="skills" id="skills">
        <div className="container">
            <Fade bottom distance="40px" delay={500}>
            <header className="skills__head">
                <h5 className="title title--subtitle skills__subtitle">Skills</h5>
                <h2 className="title skills__title"><span>What I use in projects</span></h2>
            </header>
            </Fade>
            <div className="skills__body">
                <Fade cascade bottom distance='70px' delay={500}>
                <div className="skills-list">
                    {
                        technologies.map(tk => <div key={tk.id} className="skill">
                            <div className="skill__icon">
                                <img src={`icons/skills/${tk.iconName}`} alt={tk.title} className="icon" />
                            </div>
                            <h5 className="skill__title title--fz14">{tk.title}</h5>
                            <div className="skill__desc">
                                <p>{tk.desc}</p>
                            </div>
                        </div>)
                    }
                </div>
                </Fade>
            </div>
            <Fade cascade bottom distance='70px' delay={500}>
            <div className="skills-levels">
                {
                    skills.map(sk => <div key={sk.id} className="skill-level">
                        <h5 className="title title--fz14 title--subtitle">{sk.title}</h5>
                        <div className="skill-level__percent">{sk.percentage}</div>
                        <div className="skill-level__progressbar">
                            <div className="skill-level__progressbar-fill" style={{width: sk.percentage}}></div>
                        </div>
                    </div>)
                }
            </div>
            </Fade>
        </div>
    </section>);
}

export default Skills;