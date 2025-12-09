import "./styles/global.css"
import "./styles/theme.css"
import { Home } from "./pages/Home";
import { TaskContextProvaider } from "./contexts/TaskContext";


export default function App(){

    return (
      <>
      {/* ELE VAI TER O PAPEL DE PASSAR OS ESTADOS */}
        <TaskContextProvaider >
          <Home/>  
        </TaskContextProvaider>
      </>
    );
}