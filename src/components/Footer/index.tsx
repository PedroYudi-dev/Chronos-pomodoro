import styles from "./styles.module.css"

export default function Footer() {
  return (
    <footer className={styles.final}>
      <a href="/about-pomodoro">Entenda como funciona a técnica pomodoro</a>
      <a href="">
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito Pelo Pedro
        Yudi
      </a>
    </footer>
  );
}
