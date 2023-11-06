import './_works.scss';
import {worksList} from "../../db";
import {useState} from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import Fade from "react-reveal/Fade";


function Works(){
    const [worksCount, setWorksCount] = useState(6);
    return <section className="works" id="works">
        <div className="container">
            <Fade cascade bottom distance='40px' delay={500}>
            <header className="works__head">
                <h5 className="title title--subtitle works__subtitle">Portfolio</h5>
                <h2 className="title works__title"><span>Projects I've worked with</span></h2>
            </header>
            </Fade>
            <Fade cascade bottom distance='70px' delay={500}>
                <TransitionGroup component='div' className="works__body kkk">
                {
                    worksList.slice(0, worksCount).map(w => <CSSTransition
                        key={w.id}
                        timeout={1200}
                        className="work"
                    >
                        <a rel="noreferrer" target="_blank" href={w.url} className="">
                            <picture>
                                <source type="image/webp" srcSet={`img/works/${w.imgWebp}`} />
                                <img src={`img/works/${w.img}`} alt={w.img} />
                            </picture>
                            <div className="work__info">
                                <h2 className="work__title">{w.title}</h2>
                                <p className="work__role"><i>({w.role ? w.role : 'UI developer'})</i></p>
                            </div>
                        </a>
                    </CSSTransition>)
                }
                </TransitionGroup>
            </Fade>
            <Fade cascade bottom distance='40px' delay={500}>
            {
                (worksCount < worksList.length) ? <footer className="works__footer">
                <button
                    className="btn btn--primary"
                    onClick={() => {
                        setWorksCount(worksCount + 4)
                    }}
                >Load more works</button>
            </footer> : ''
            }
            </Fade>
        </div>
    </section>
}

export default Works;

