import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../Utils/getNextCycle";
import { getNextCycleType } from "../../Utils/getNextCycleType";

export function Tips() {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);
  const typsForWhenActiveTask = {
    workTime: (
      <span>
        Foque por <b>{state.config.workTime}min</b>{" "}
      </span>
    ),
    shortBreakTime: (
      <span>
        Descanse por <b>{state.config.shortBreakTime}min</b>{" "}
      </span>
    ),
    longBreakTime: <span>Descanso Longo</span>,
  };

  const typsForNoActiveTask = {
    workTime: (
      <span>
        Próximo ciclo será de <b>{state.config.workTime}min</b>{" "}
      </span>
    ),
    shortBreakTime: (
      <span>
        Próximo decanso será de <b>{state.config.shortBreakTime}min</b>{" "}
      </span>
    ),
    longBreakTime: <span>Próximo decanso será Longo</span>,
  };

  return (
    <>
      {!!state.activeTask && typsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && typsForNoActiveTask[nextCycleType]}
    </>
  );
}
