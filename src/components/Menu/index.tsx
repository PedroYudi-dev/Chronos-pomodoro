import { SettingsIcon, SunIcon, HistoryIcon, HouseIcon } from "lucide-react";
import styles from "./style.module.css";


export default function Menu() {
  return(
    <div className={styles.menu}>
    <a className={styles.menuLink} href="#">
      <HouseIcon/>
    </a>
    <a className={styles.menuLink} href="#">
      <HistoryIcon/>
    </a>
    <a className={styles.menuLink} href="#">
      <SettingsIcon/>
    </a>
    <a className={styles.menuLink} href="#">
      <SunIcon/>
    </a>
    </div>
  ) 
}
