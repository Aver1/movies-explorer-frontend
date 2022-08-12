import SidebarPopup from "../SidebarPopup/SidebarPopup";
import Promo from "../Promo/Promo"
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Teches/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";

function Main (props) {
  
  return (
    <main className="main">
      <Promo/>
      <AboutProject/>
      <Techs></Techs>
      <AboutMe></AboutMe>
      <Portfolio></Portfolio>
    </main> 
  );
}

export default Main;