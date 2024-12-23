
import { useState } from "react"
// import { getImgUrl} from "../../utils.js"

import menuIcon from '/assets/nav/menuIcon.png';
import closeIcon from '/assets/nav/closeIcon.png';
import styles from './Navbar.module.css';

function Navbar(){
    const [menuOpen,setmenuOpen]=useState(false)
    return(
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">
        Portfolio
        </a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} src={
                menuOpen?closeIcon:menuIcon} alt="menu-btn"
                onClick={()=>{setmenuOpen(!menuOpen)}}
                />
            <ul className={`${styles.menuItem} ${menuOpen && styles.menuOpen}`}
                onClick={()=>setmenuOpen(false)}>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
)
}
export default Navbar