import type { HomeProps } from "../../pages/Home";
import styles from "./style.module.css";


export default function CountDown({state}: HomeProps) {
  return (
    <div className={styles.container}>
      {state.formattedSecondsRemaining}
    </div>
  );
}
