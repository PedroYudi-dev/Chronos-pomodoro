import { createContext } from "react";
import type { TaskStateModel } from "../../Models/TaskStateModel";
import { initiaTasklState } from "./initialTaskState";
import type { TaskActionModel } from "./taskActions";

type TaskContextProps ={
    state: TaskStateModel
    dispachTask: React.Dispatch<TaskActionModel>
}

const initialContextValue = {
  state: initiaTasklState,
  dispachTask: () => {},
};

// eslint-disable-next-line react-refresh/only-export-components
export const TaskContext = createContext<TaskContextProps>(initialContextValue);
 