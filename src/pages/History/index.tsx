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
import { sortTasks, type SortTasksOptions } from "../../Utils/sortTasks";
import { useState } from "react";

export  function History() {

  const {state} = useTaskContext()
  // const sortedTaks = sortTasks({ tasks: state.task });
  const [sortTasksOptions, setSortTasksOptions] = useState<SortTasksOptions>( () =>{
    return{
      tasks: sortTasks({ tasks: state.task }),
      field: 'startDate',
      direction: 'desc',
    }
  })
    
  const handleSortTasks = ({field}: Omit<SortTasksOptions, 'tasks' | 'direction' >) => {
    const newDireciton = sortTasksOptions.direction === 'desc' ? 'asc' : 'desc';
    
    setSortTasksOptions({
      tasks: sortTasks({
          tasks: sortTasksOptions.tasks,
          direction: newDireciton,
          field,})
    })
  }
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
                  <th
                    className={styles.thSort}
                    onClick={() => handleSortTasks({ field: "name" })}
                  >
                    Tarefa ↕️
                  </th>
                  <th
                    className={styles.thSort}
                    onClick={() => handleSortTasks({ field: "duration" })}
                  >
                    Duração ↕️
                  </th>
                  <th
                    className={styles.thSort}
                    onClick={() => handleSortTasks({ field: "startDate" })}
                  >
                    Data ↕️
                  </th>
                  <th className={styles.thSort}>Status ↕️</th>
                  <th className={styles.thSort}>Tipo ↕️</th>
                </tr>
              </thead>

              <tbody>
                {sortTasksOptions.tasks.map((task) => {
                  const taskTypeDictionary = {
                    workTime: "Foco",
                    shortBreakTime: "Pausa Curta",
                    longBreakTime: "Pausa Longa",
                  };

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
