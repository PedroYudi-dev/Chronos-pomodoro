import { useEffect, useReducer } from "react";
import { TaskContext } from "./taskContext";
import { initiaTasklState } from "./initialTaskState";
import { taskReducer } from "./taskReducer";

  
type TaskContextProvaider = {
     children: React.ReactNode
}

export function TaskContextProvaider({ children }: TaskContextProvaider){

  const [state, dispachTask] = useReducer(taskReducer, initiaTasklState);

  useEffect(() => {
    console.log(state);
  }, [state]);
  
    return (
      <>
        <TaskContext.Provider value={{ state, dispachTask }}>
          {children}
        </TaskContext.Provider>
      </>
    );
}
