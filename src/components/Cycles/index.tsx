import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../Utils/getNextCycle";
import { getNextCycleType } from "../../Utils/getNextCycleType";
import styles from "./styles.module.css"

export default function Cycles(){

  const {state} = useTaskContext()

  const arrayCycles = Array.from({length: state.currentCycle})

  const cycleDescripitionMap = {
    workTime: "Foco",
    shortBreakTime: "descanso curto",
    longBreakTime: "descanso longo"  
  }

    return (
      <div className={styles.cycles}>
        <span>Ciclos:</span>

        <div className={styles.cyclesDots}>
          {arrayCycles.map((value, index) =>{
            const nextCycle = getNextCycle(index)
            const nextCycleType = getNextCycleType(nextCycle);
            return (
              <span
                key={`_${nextCycle}`}
                className={`${styles.cyclesDot} ${styles[nextCycleType]}`}
                arial-label={`Indicador de ciclos de ${cycleDescripitionMap[nextCycleType]}`}
                title={`Indicador de ciclos de ${cycleDescripitionMap[nextCycleType]} `}
              ></span>
            );
          })}
          
        </div>
      </div>
    );
}