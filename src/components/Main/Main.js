import SidebarPopup from "../SidebarPopup/SidebarPopup";

function Main (props) {
  
  return (
    <main className="main">
      <SidebarPopup onClose={props.onClose} isSideBarOpen={props.isSideBarOpen}/>
    </main> 
  );
}

export default Main;