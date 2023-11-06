

function SocialLink({href, iconName}){
    return <li>
        <a rel="noreferrer" target="_blank" href={href}>
            <svg className="icon">
                <use xlinkHref={`img/sprite.svg#${iconName}`}></use>
            </svg>
        </a>
    </li>
}

export default SocialLink;