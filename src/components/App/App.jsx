import * as React from "react";

import SideBar from "../SideBar/SideBar"
import Hero from "../Hero/Hero";
import About from "../About/About";

import styles from "./App.module.css"

function App() {
  return (
    <div id="root" className={styles.root}>
      <SideBar/>
      <div className={styles.myInfo}>
        <Hero/>
        <About/>
      </div>
    </div>
  )
}

export default App
