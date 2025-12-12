import { useEffect, useState } from "react";
import { TaskContext } from "./taskContext";
import { initiaTasklState } from "./initialTaskState";

  
type TaskContextProvaider = {
     children: React.ReactNode
}

export function TaskContextProvaider({ children }: TaskContextProvaider){

  const [state, setState] = useState(initiaTasklState);

  useEffect(() => {
    console.log(state);
  }, [state]);
  
    return (
      <>
        <TaskContext.Provider value={{ state, setState }}>
          {children}
        </TaskContext.Provider>
      </>
    );
}
