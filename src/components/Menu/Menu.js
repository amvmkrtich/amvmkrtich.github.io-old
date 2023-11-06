import './_menu.scss';
import Social from "../Social/Social";

function Menu({onToggleMenu}){
    return (<div className="menu">
        <div className="menu__block">
            <button className="menu__close" onClick={onToggleMenu}>
                <svg className="icon">
                    <use xlinkHref="img/sprite.svg#close"></use>
                </svg>
            </button>
            <nav>
                <ul className="menu-list">
                    <li className="menu-list__item"><a href="/">Home</a></li>
                    <li className="menu-list__item"><a href="#aboutMe">About me</a></li>
                    <li className="menu-list__item"><a href="#benefits">Benefits</a></li>
                    <li className="menu-list__item"><a href="#skills">Skills</a></li>
                    <li className="menu-list__item"><a href="#works">Works</a></li>
                    <li className="menu-list__item"><a href="#contacts">Contacts</a></li>
                </ul>
            </nav>

            <Social modificator="menu__social-links"/>
        </div>
        <div className="menu__overlay" onClick={onToggleMenu}></div>
    </div>);
}

export default Menu;