import React, { createContext, useContext } from "react";
import type { TaskStateModel } from "../../Models/TaskStateModel";


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

type TaskContextProps ={
    state: TaskStateModel
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
}

const initialContextValue = {
  state: initialState,
  setState: () => {},
};

// eslint-disable-next-line react-refresh/only-export-components
export const TaskContext = createContext<TaskContextProps>(initialContextValue);
    
    type TaskContextProvaider = {
        children: React.ReactNode
    }

export function TaskContextProvaider({ children }: TaskContextProvaider){
    return (
      <>
        <TaskContext.Provider value={{ ...initialContextValue }}>
          {children}
        </TaskContext.Provider>
      </>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTaskContext(){
    return useContext(TaskContext)
}
