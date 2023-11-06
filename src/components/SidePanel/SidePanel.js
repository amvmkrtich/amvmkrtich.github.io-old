import './_sidepanel.scss';
import Social from "../Social/Social";

function SidePanel (){
    return <aside className="sidepanel">
                <h5 className="sidepanel__title">Social networks</h5>
                <Social modificator='sidepanel__links'/>
            </aside>
}

export default SidePanel;