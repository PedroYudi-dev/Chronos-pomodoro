import { Timer } from "lucide-react";
import styles from "./style.module.css";
import { RouterLink } from "../RouterLink";


export default function Logo() {
  return(
    <div className={styles.logo}>
    <RouterLink className={styles.logoLink} href="/">
      <Timer/>
      <span>Chronos</span>
    </RouterLink>
    </div>
  ) 
}
