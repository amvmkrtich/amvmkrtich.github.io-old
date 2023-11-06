import './_social-links.scss';
import SocialLink from "./SocialLink";

function Social({modificator=''}){
    return <ul className={`social-links ${modificator}`}>
                <SocialLink href="tel:+37477727246" iconName="phone"/>
                <SocialLink href="https://github.com/amvmkrtich" iconName="github"/>
                <SocialLink href="https://www.linkedin.com/in/mkrtich-aleksanyan-4a54b3209/" iconName="linkedin"/>
                <SocialLink href="https://www.facebook.com/mkrtich.alexanyan" iconName="facebook"/>
            </ul>
}

export default Social;