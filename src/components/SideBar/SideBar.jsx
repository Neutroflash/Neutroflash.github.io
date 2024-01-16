import * as React from "react";
import styles from "./SideBar.module.css";

import data from "../../../data.json";
import * as IoIcons from "react-icons/io";
import { RxSwitch } from "react-icons/rx";




const style = { color: "#4831D4", fontSize: "1.2em" }

const SideBar = () => {
  const [initial, setInitial] = React.useState(true);
  
  const toggleSideBar = () => {
    console.log("click en el boton")
    setInitial(!initial)
  }

  return (
    <div className={`${styles.sideBar} ${initial ? styles.open : ""}`}>
      {initial &&(
        <ul>
          {data.map((item) => (
            <li key={item.id} className={styles.sideBar_item}>
              {item.id === 0 ? (
                <img src={item.image} alt={item.id} className={styles.myPhoto} />
              ) : (
                item.id === 7 ? <button className={styles.sideBar_switch} onClick={toggleSideBar}><RxSwitch/></button> : React.createElement(IoIcons[item.icon],{ style: style,  className: styles.sideBar_link})
              )}
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SideBar;
