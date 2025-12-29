import { TrashIcon } from "lucide-react";
import Conatainer from "../../components/Container/Container";
import DefaultButton from "../../components/DefaultButton";
import Heading from "../../components/Heading/Heading";
// import type { TaskStateModel } from "../../Models/TaskStateModel";
import MainTemplate from "../../template/MainTamplate";
import styles from"./styles.module.css"
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { formatDate } from "../../Utils/formatDate";
import { getTaskStatus } from "../../Utils/getTaskStatus";

export  function History() {

  const {state} = useTaskContext()

    
  return (
    <>
      <MainTemplate>
        <Conatainer>
          <Heading>
            <span>History</span>
            <span className={styles.buttonContainer}>
              <DefaultButton
                icon={<TrashIcon />}
                color="red"
                arial-label="Apagar Histórico"
                title="Apagar Histórico"
              />
            </span>
          </Heading>
        </Conatainer>

        <Conatainer>
          <div className={styles.resposiveTable}>
            <table>
              <thead>
                <tr>
                  {/* Th É O TITULO DO CABEÇALHO */}
                  <th>Tarefa</th>
                  <th>Duração</th>
                  <th>Data</th>
                  <th>Status</th>
                  <th>Tipo</th>
                </tr>
              </thead>

              <tbody>
                {state.task.map((task ) =>{
                  const taskTypeDictionary = {
                    workTime: "Foco",
                    shortBreakTime: "Pausa Curta",
                    longBreakTime: "Pausa Longa", 
                  }

                  return (
                    <tr key={task.id}>
                      {/* TD É O CORPO DO CABEÇALHO */}
                      <td>{task.name}</td>
                      <td>{task.duration}</td>
                      <td>{formatDate(task.startDate)}</td>
                      <td>{getTaskStatus(task, state.activeTask)}</td>
                      <td>{taskTypeDictionary[task.type]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Conatainer>
      </MainTemplate>
    </>
  );
}
