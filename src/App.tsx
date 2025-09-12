import "./styles/global.css"
import "./styles/theme.css"
import Conatainer from "./components/Container/Container";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import CountDown from "./components/CountDown";
import DefaultInput from "./components/DefaultInput";
import Cycles from "./components/Cycles";
import DefaultButton from "./components/DefaultButton";
import { PlayCircleIcon } from "lucide-react";
import Footer from "./components/Footer";

export default function App(){
    return (
      <>
        <Conatainer>
          <Logo />
        </Conatainer>

        <Conatainer>
          <Menu />
        </Conatainer>

        <Conatainer>
          <CountDown />
        </Conatainer>

        <Conatainer>
          <form className="form">
            <div className="formRow">
              <DefaultInput
                labelText="task"
                id="meuInput"
                type="text"
                placeholder="Digite algo"
                // disabled
                // defaultValue = "Valor preenchido"
              />
            </div>

            <div className="formRow">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className="formRow">
              <Cycles />
            </div>

            <div className="formRow">
              <DefaultButton icon={<PlayCircleIcon />} />
            </div>
          </form>
        </Conatainer>

        <Conatainer>
          <Footer/>
        </Conatainer>
      </>
    );
}