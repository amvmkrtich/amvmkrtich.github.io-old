import './_promo.scss';
import mainBg from '../../img/main_bg_.jpg';
import resume from './resourse/UI-developer_Resume-Mkrtich-Aleksanyan.pdf';
import Fade from 'react-reveal/Fade';

function Promo(){
    return (<>
        <section className="promo" style={{bacgroundImage: mainBg}}>
            <Fade bottom cascade distance='50px'>
                <div className="container">
                <h5 className="title title--subtitle">My Name is Mkrtich Aleksanyan</h5>
                <h2 className="title title--fz48 promo__title">I’m a UI Developer<br />
                    from Armenia</h2>
                <div className="promo__btns">
                    <a href={resume}
                       download="UI-developer_Resume-Mkrtich-Aleksanyan.pdf"
                       className="promo__link btn btn--primary"
                    >Download CV</a>
                    <a href="#aboutMe" className="promo__link">About me</a>
                </div>
            </div>
            </Fade>
        </section>
    </>);
}

export default Promo;