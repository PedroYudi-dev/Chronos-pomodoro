import { useContext } from "react";
import { TaskContext } from "./taskContext";

// eslint-disable-next-line react-refresh/only-export-components
export function useTaskContext(){
    return useContext(TaskContext)
}
