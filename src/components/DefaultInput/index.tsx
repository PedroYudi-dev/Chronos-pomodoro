import styles from "./styles.module.css";
import type React from "react";

type DefaultInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<"input">


export default function DefaultInput({ labelText, id, type, ...rest }: DefaultInputProps) {
  return (
    <>
      {/* {labelText ? <label htmlFor={id}>{labelText}</label> : "" } */}
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input className={styles.input} type={type} id={id} {...rest} />
    </>
  );
}