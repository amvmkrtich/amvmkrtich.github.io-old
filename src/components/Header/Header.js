import './_header.scss';
import Menu from "../Menu/Menu";
import {useEffect, useState} from "react";

function Header(){
    const [menuVisible, setMenuVisible] = useState(false);

    useEffect(() => {
        menuVisible ? document.body.classList.add("menu-visible") : document.body.classList.remove("menu-visible");
    }, [menuVisible]);

    useEffect(() => {
        window.addEventListener('scroll', () => setMenuVisible(false));
    }, []);


    return(<>
        <Menu onToggleMenu={() => setMenuVisible(!menuVisible)}/>
        <div className="header header--fix">
            <div className="header__top">
                <button className="hamburger" data-toggle-menu onClick={() => setMenuVisible(true)}>
                    <span className="hamburger__body"></span>
                </button>
            </div>
        </div>
    </>);
}

export default Header;