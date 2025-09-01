import "./styles/global.css"
import "./styles/theme.css"
import Conatainer from "./components/Container/Container";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import CountDown from "./components/CountDown";

export default function App(){
    return (
      <>
        <Conatainer>
          <Logo/>
        </Conatainer>

        <Conatainer>    
          <Menu/>
        </Conatainer>
        
        <Conatainer>    
          <CountDown/>
        </Conatainer>


      </>
    );
}