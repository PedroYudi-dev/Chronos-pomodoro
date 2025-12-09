import DefaultInput from "../DefaultInput";
import Cycles from "../Cycles";
import DefaultButton from "../DefaultButton";
import { PlayCircleIcon } from "lucide-react";
import { useTaskContext } from "../../contexts/TaskContext";

export default function MainForm() {
  const {setState} = useTaskContext()

  const handleClick = () =>{
    setState(prevState => {
      return{
        ...prevState, formattedSecondsRemaining: "21:00"
      }
    })
  }
  return (
    <form className="form">
      <button type="button" onClick={handleClick}>
        Clicar
      </button>
      <div className="formRow">
        <DefaultInput
          labelText="task"
          id="meuInput"
          type="text"
          placeholder="Digite algo"
          // disabled
          // defaultValue = "Valor preenchido"
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
