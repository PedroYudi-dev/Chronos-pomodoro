import Conatainer from "../../components/Container/Container";
import CountDown from "../../components/CountDown";
import MainForm from "../../components/MainForm";
import type { TaskStateModel } from "../../Models/TaskStateModel";
import MainTemplate from "../../template/MainTamplate";

export type HomeProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export  function Home(props: HomeProps) {

    // const {state, setState} = props
    // VAI FICAR ASSIM "...PROPS"
    
  return (
    <>
      <MainTemplate>
        <Conatainer>
          <CountDown {...props}/>
        </Conatainer>

        <Conatainer>
          <MainForm {...props}/>
        </Conatainer>
      </MainTemplate>
    </>
  );
}
