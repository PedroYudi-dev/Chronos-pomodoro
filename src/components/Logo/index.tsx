import { Timer } from "lucide-react";
import styles from "./style.module.css";


export default function Logo() {
  return(
    <div className={styles.logo}>
    <a className={styles.logoLink} href="#">
      <Timer/>
      <span>Chronos</span>
    </a>
    </div>
  ) 
}
