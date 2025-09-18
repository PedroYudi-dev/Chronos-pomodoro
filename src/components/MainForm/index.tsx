import DefaultInput from "../DefaultInput";
import Cycles from "../Cycles";
import DefaultButton from "../DefaultButton";
import { PlayCircleIcon } from "lucide-react";
import type { HomeProps } from "../../pages/Home";

export default function MainForm({state}: HomeProps) {
  return (
    <form className="form">
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
        <p>Lorem ipsum dolor sit amet.</p>
        <p>{state.config.workTime}</p>
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
