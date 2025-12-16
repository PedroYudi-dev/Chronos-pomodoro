import type { TaskStateModel } from "../../Models/TaskStateModel";
import { formartSecondsToMinutes } from "../../Utils/formtSecondsToMinutes";
import { getNextCycle } from "../../Utils/getNextCycle";
import { TaskActionType, type TaskActionModel } from "./taskActions";

export function taskReducer(state: TaskStateModel, action: TaskActionModel): TaskStateModel{
    // SEMPRE DEVE RETORNAR O ESTADO
    switch(action.type){
        case TaskActionType.START_TASK:{
          const newTask = action.payload
          const nextCycle = getNextCycle(state.currentCycle)
          const secondsRemaining = newTask.duration * 60
          const timeFormatted = formartSecondsToMinutes(secondsRemaining)

          return {
            ...state,
            config: { ...state.config },
            activeTask: newTask,
            currentCycle: nextCycle,
            secondsRemaining,
            formattedSecondsRemaining: timeFormatted,
            task: [...state.task, newTask],
          };
        }   

        case TaskActionType.INTERUPT_TASK:{
                return {
                    ...state,
                    activeTask: null,
                    secondsRemaining: 0,
                    formattedSecondsRemaining: "00:00",
                    task: state.task.map(tarefa =>{
                    if (state.activeTask && state.activeTask.id === tarefa.id) {
                        return { ...tarefa, interruptDate: Date.now() };
                    }
                    return tarefa
                })
            }
        }   
        case TaskActionType.RESET_TASK:{
            return state
        }   
     }

    return state
}