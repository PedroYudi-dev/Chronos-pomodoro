import "./styles/global.css"
import "./styles/theme.css"
import { TaskContextProvaider } from "./contexts/TaskContext/TaskContextProvaider";
import { MassageContainer } from "./components/MessagesContainer";
import { MainRounter } from "./Routers/MainRounter";


export default function App(){

    return (
      <>
        {/* ELE VAI TER O PAPEL DE PASSAR OS ESTADOS */}
        <TaskContextProvaider>
          <MassageContainer>
            <MainRounter/>
          </MassageContainer>
        </TaskContextProvaider>
      </>
    );
}