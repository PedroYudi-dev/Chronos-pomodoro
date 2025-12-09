import { createContext } from "react";
import type { TaskStateModel } from "../../Models/TaskStateModel";
import { initiaTasklState } from "./initialTaskState";

type TaskContextProps ={
    state: TaskStateModel
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>
}

const initialContextValue = {
  state: initiaTasklState,
  setState: () => {},
};

// eslint-disable-next-line react-refresh/only-export-components
export const TaskContext = createContext<TaskContextProps>(initialContextValue);
 