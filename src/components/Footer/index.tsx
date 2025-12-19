import { RouterLink } from "../RouterLink";
import styles from "./styles.module.css"

export default function Footer() {
  return (
    <footer className={styles.final}>
      <RouterLink href="/about-pomodoro">Entenda como funciona a técnica pomodoro</RouterLink>
      <RouterLink href="/">
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito Pelo Pedro
        Yudi
      </RouterLink>
    </footer>
  );
}
