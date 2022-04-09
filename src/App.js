import React, { useState } from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Aside from './components/Aside';
import Inputs from './components/Inputs';
import Content from './components/Content';
import MiniSidebar from './components/MiniSidebar';

function App() {
  const [sideBarWidth, setSideBarWidth] = useState(true)
  const [miniSideBar, setMiniSideBar] = useState(false)


  return (
    <div className="d-flex myApp overflow-hidden">
      <Aside sideBarWidth={sideBarWidth} setSideBarWidth={setSideBarWidth} setMiniSideBar={setMiniSideBar} miniSideBar={miniSideBar} />
      <section className="d-flex w-100">
        <MiniSidebar miniSideBar={miniSideBar} setMiniSideBar={setMiniSideBar} />
        <Inputs />
        <Content />
      </section>
    </div>
  );
}

export default App;
