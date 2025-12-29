import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import { Home } from "../../pages/Home";
import AboutPromodoro from "../../pages/AboutPromodoro";
import NotFound from "../../pages/NotFound";
import { useEffect } from "react";
import { History } from "../../pages/History";

// vamos criar um componente filho para o "MAINROUTER"
// FUNÇÃO PARA PODER FAZER O SCROLL PARA O INICIO 
function ScrollTopTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }, [pathname])

    return null
}

export function MainRounter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History/>} />
          <Route path="/about-pomodoro" element={<AboutPromodoro />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ScrollTopTop />
      </BrowserRouter>
    </>
  );
}
