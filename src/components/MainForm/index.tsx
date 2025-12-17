import DefaultInput from "../DefaultInput";
import Cycles from "../Cycles";
import DefaultButton from "../DefaultButton";
import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { useRef, useState } from "react";
import { Snackbar, type AlertColor } from "@mui/material";
import { Alert } from "../Alert";
import type { TaskModel } from "../../Models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../Utils/getNextCycle";
import { getNextCycleType } from "../../Utils/getNextCycleType";
import { TaskActionType } from "../../contexts/TaskContext/taskActions";
import { Tips } from "../Tips";

export default function MainForm() {
  const { state, dispachTask } = useTaskContext();
  const [taskName, setTaskName] = useState("");
  const taskNameInput = useRef<HTMLInputElement>(null)
  const [openSnack, setOpenSnack] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [snackSeverity, setSnackSeverity] = useState<AlertColor>("success");

  const nextCycle = getNextCycle(state.currentCycle)
  const nextCycleType = getNextCycleType(nextCycle);
  
  
  const handleStartNewTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!taskNameInput.current || taskNameInput.current === null ) return

    const taskNameValue = taskNameInput.current.value.trim();

    if (!taskNameValue) {
      setSnackMessage("Por favor, insira um nome para a tarefa.");
      setSnackSeverity("error");
      setOpenSnack(true);
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
  };

  const handleCloseSnack = (event: unknown, reason: string) => {
    if (reason === "clickaway") return;
    setOpenSnack(false);
  };

  const handleInterruptTask = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
    e.preventDefault();
    dispachTask({ type: TaskActionType.INTERUPT_TASK });

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
      <Snackbar
        open={openSnack}
        autoHideDuration={6000}
        onClose={handleCloseSnack}
      >
        <Alert
          onClose={() => setOpenSnack(false)}
          severity={snackSeverity}
          sx={{ width: "100%" }}
        >
          <p style={{ color: "#fff" }}>{snackMessage}</p>
        </Alert>
      </Snackbar>
    </form>
  );
}
