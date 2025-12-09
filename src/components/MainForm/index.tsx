import DefaultInput from "../DefaultInput";
import Cycles from "../Cycles";
import DefaultButton from "../DefaultButton";
import { PlayCircleIcon } from "lucide-react";
import { useRef, useState } from "react";

export default function MainForm() {
  const [taskName, setTaskName] = useState("");
  const taskNameInput = useRef<HTMLInputElement>(null)
  
  
  const handleStartNewTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("deu certo");
  };


  
  return (
    <form onSubmit={handleStartNewTask} className="form">
      <div className="formRow">
        <DefaultInput
          labelText="task"
          id="meuInput"
          type="text"
          placeholder="Digite algo"
          value={taskName}
          onChange={e => setTaskName(e.target.value)}
          ref={taskNameInput}
        />
      </div>

      <div className="formRow">
        <p>Próximo intervalo é de 25min</p>
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
