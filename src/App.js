import './styles/style.scss';

import SidePanel from "./components/SidePanel/SidePanel";
import Header from "./components/Header/Header";
import Promo from "./components/Promo/Promo";
import About from "./components/About/About";
import Benefits from "./components/Benefits/Benefits";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";

function App() {

  return (<div className="wrapper">

    <SidePanel/>
    <Header />
    <main className="">
      <Promo />
      <About modificatorClass='' />
      <Benefits />
      <Skills />
      <Works />
      <Contact />
    </main>
  </div>);
}

export default App;
