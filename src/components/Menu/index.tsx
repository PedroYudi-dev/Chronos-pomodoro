import { SettingsIcon, SunIcon, HistoryIcon, HouseIcon, MoonIcon } from "lucide-react";
import styles from "./style.module.css";
import { useEffect, useState } from "react";

type AvailableTheme = "dark" | "light"

export default function Menu() {

  const [theme, setTheme] = useState<AvailableTheme>(() =>{
    // estamos comparando pelo valor que o localStorage esta trazendo 
    const storangeTheme = (localStorage.getItem("theme") as AvailableTheme )
    return storangeTheme
  });

  // Aqui basicamente fica uma condição mais limpa
  const nextThemeIcon = {
    dark: <SunIcon />, 
    light: <MoonIcon/> 
  } 

  const handleThemeChange = (e) =>{
    e.preventDefault();
    console.log("esta sendo ilustrado", Date.now())

    // estamos pegando o valor antigo e atualizando o novo valor 
    setTheme(prevTheme=>{
      const nextTheme = prevTheme === "dark" ? "light": "dark" 
      return nextTheme
    })
  }

  useEffect(() =>{
    console.log("mudou", theme)
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme)
  }, [theme])
  return (
    <div className={styles.menu}>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ir para Home"
        title="Ir para Home"
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ver Histórico"
        title="Ver Histórico"
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Configurações"
        title="Configurações"
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Mudar Tema"
        title="Mudar Tema"
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </div>
  ); 
}
