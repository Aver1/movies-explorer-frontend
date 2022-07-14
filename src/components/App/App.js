import React from 'react';
import logo from '../../images/logo.svg';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';

function App() {
  const [isSideBarOpen, setSideBarState] = React.useState(false);
  function openSideBarPopup() {
    setSideBarState(true);
  }

  function closeSideBarPopup() {
    setSideBarState(false);
  }

  return (
    <>
      <Header onSideBarClick={openSideBarPopup}/>
      <Main isSideBarOpen={isSideBarOpen} onClose={closeSideBarPopup}/>
    </>
  );
}

export default App;
