import { useState } from "react";
import type { TaskStateModel } from "./Models/TaskStateModel";
import "./styles/global.css"
import "./styles/theme.css"
import { Home } from "./pages/Home";
import { TaskContextProvaider } from "./contexts/TaskContext";

const initialState: TaskStateModel = {
    task: [],
    secondsRemaining: 0,
    formattedSecondsRemaining: "00:00",
    activeTask: null,
    currentCycle: 0,
    config:{
       workTime: 25,
       shortBreakTime: 5,
       longBreakTime: 15
    }
} 


export default function App(){
  const [state, setState] = useState(initialState)

    return (
      <>
        <TaskContextProvaider >
          <Home/>  
        </TaskContextProvaider>
      </>
    );
}