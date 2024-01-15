import * as React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
    return(
        <div className={styles.hero}>
            <div className={styles.heroText}>
                <p>Hola Mundo!</p>
                <h1>Soy Miguel Lorenzo</h1>
                <p>Full Stack Developer</p>
            </div>
        </div>
    )
}

export default Hero