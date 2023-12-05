import * as React from "react";
import data from "../../../data.json";
import styles from "./SideBar.module.css";

const SideBar = () => {
  const [initial, setInitial] = React.useState(true);

  return (
    <div className={styles.sideBar}>
      <ul>
        {data.map((item, index) => (
          <li key={item.id} className={styles.sideBar_item}>
            {index === 0 ? (
              <img src={item.image} alt={item.id} className={styles.myPhoto} />
            ) : (
              <img src={item.image} alt={item.id} />
            )}
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
