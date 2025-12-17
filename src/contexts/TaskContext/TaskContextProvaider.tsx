import { useEffect, useReducer } from "react";
import { TaskContext } from "./taskContext";
import { initiaTasklState } from "./initialTaskState";
import { taskReducer } from "./taskReducer";
import { TimerWorkeManager } from "../../workers/TimerWokerManager";

type TaskContextProvaider = {
  children: React.ReactNode;
};

export function TaskContextProvaider({ children }: TaskContextProvaider) {
  const [state, dispachTask] = useReducer(taskReducer, initiaTasklState);

  // AQUI NÓS COSEGUIMOS UTILIZAR O TEMPO SEM ELE PERDER O TEMPO DELE, POR EXEMPLO SE EU ESTOU EM OUTRA TELA SEM SER A DO CONTADORR
  // Ela vai constinuar contando assim ele não fica criando uma nova e sim pausando e voltando no ciclo que esta sendo realizado
  const worker = TimerWorkeManager.getInstance();

  worker.onmessage((e) => {
    const countDouwnSeconds = e.data
    console.log(countDouwnSeconds);
    if(countDouwnSeconds <= 0){
      console.log("Worker Finalizado")
      worker.terminate()
    }
  });

  useEffect(() => {
    if (!state.activeTask) {
      console.log("Worker terminado por falta de tarefa");
      worker.terminate();
    }
    worker.postMessage(state);
  }, [worker, state]);

  return (
    <>
      <TaskContext.Provider value={{ state, dispachTask }}>
        {children}
      </TaskContext.Provider>
    </>
  );
}
