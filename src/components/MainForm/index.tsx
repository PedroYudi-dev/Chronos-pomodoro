import DefaultInput from "../DefaultInput";
import Cycles from "../Cycles";
import DefaultButton from "../DefaultButton";
import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { useRef, useState } from "react";
import type { TaskModel } from "../../Models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../Utils/getNextCycle";
import { getNextCycleType } from "../../Utils/getNextCycleType";
import { TaskActionType } from "../../contexts/TaskContext/taskActions";
import { Tips } from "../Tips";
import { showMessage } from "../../adapters/shoMessage";

export default function MainForm() {
  const { state, dispachTask } = useTaskContext();
  const [taskName, setTaskName] = useState("");
  const taskNameInput = useRef<HTMLInputElement>(null)
  const lastTaskName = state.task[state.task.length - 1]?.name || ""
 

  const nextCycle = getNextCycle(state.currentCycle)
  const nextCycleType = getNextCycleType(nextCycle);
  
  
  const handleStartNewTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    showMessage.dismiss()
    if(!taskNameInput.current || taskNameInput.current === null ) return

    const taskNameValue = taskNameInput.current.value.trim();

    if (!taskNameValue) {
      showMessage.warn("Por favor, insira um nome para a tarefa.");
      return;
    }
     //else{
    //     setSnackMessage("Sua tarefa foi adcionada!.");
    //     setSnackSeverity("success");
    //     setOpenSnack(true);
    //     return;
      
    // }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskNameValue,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };
    dispachTask({type: TaskActionType.START_TASK, payload: newTask})
    showMessage.sucess("Tarefa iniciada");
  };

  const handleInterruptTask = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
    e.preventDefault();
    showMessage.dismiss()
    dispachTask({ type: TaskActionType.INTERUPT_TASK });
    showMessage.error("Tarefa  interrompida");

  }
  
  return (
    <form onSubmit={handleStartNewTask} className="form">
      <div className="formRow">
        <DefaultInput
          labelText="task"
          id="meuInput"
          type="text"
          placeholder="Digite algo"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          ref={taskNameInput}
          disabled={!!state.activeTask}
          defaultValue={lastTaskName}
        />
      </div>

      <div className="formRow">
        <Tips/>
      </div>

      {state.currentCycle > 0 && (
        <div className="formRow">
          <Cycles />
        </div>
      )}

      <div className="formRow">
        {!state.activeTask ? (
          <DefaultButton
            arial-label="Iniciar nova tarefa"
            title="Iniciar"
            type="submit"
            icon={<PlayCircleIcon />}
            // key="startTask"
          />
        ) : (
          <DefaultButton
            arial-label="Interromper tarefa em andamento"
            title="andamento"
            type="button"
            color="red"
            icon={<StopCircleIcon />}
            onClick={handleInterruptTask}
            // key="stopTask"
          />
        )}
      </div>
    </form>
  );
}
