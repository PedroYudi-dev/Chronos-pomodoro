import { useEffect, useReducer, useRef } from "react";
import { TaskContext } from "./taskContext";
import { initiaTasklState } from "./initialTaskState";
import { taskReducer } from "./taskReducer";
import { TimerWorkeManager } from "../../workers/TimerWokerManager";
import { TaskActionType } from "./taskActions";
import { loadBeep } from "../../Utils/loadBeep";

type TaskContextProvaider = {
  children: React.ReactNode;
};

export function TaskContextProvaider({ children }: TaskContextProvaider) {
  const [state, dispachTask] = useReducer(taskReducer, initiaTasklState);
  const playBeepRef = useRef<() => void | null>(null)

  // AQUI NÓS COSEGUIMOS UTILIZAR O TEMPO SEM ELE PERDER O TEMPO DELE, POR EXEMPLO SE EU ESTOU EM OUTRA TELA SEM SER A DO CONTADORR
  // Ela vai constinuar contando assim ele não fica criando uma nova e sim pausando e voltando no ciclo que esta sendo realizado
  const worker = TimerWorkeManager.getInstance();

  worker.onmessage((e) => {
    const countDouwnSeconds = e.data
    if(countDouwnSeconds <= 0){
      if(playBeepRef.current){
        playBeepRef.current()
      }
      dispachTask({
        type: TaskActionType.COMPLETE_TASK,
      });
      worker.terminate()
    }else{
      dispachTask({
        type: TaskActionType.COUNT_DOWN,
        payload: { secondsRemaining: countDouwnSeconds },
      });
    }
  });

  // AQUI O ESTADO TODO MUDA 
  useEffect(() => {
    if (!state.activeTask) {
      // console.log("Worker terminado por falta de tarefa");
      worker.terminate();
    }
    worker.postMessage(state);
  }, [worker, state]);

  useEffect(() =>{
    if(state.activeTask && playBeepRef.current === null){
      playBeepRef.current = loadBeep()
    }else{
        playBeepRef.current = null;
    }
  }, [state.activeTask])

  return (
    <>
      <TaskContext.Provider value={{ state, dispachTask }}>
        {children}
      </TaskContext.Provider>
    </>
  );
}
