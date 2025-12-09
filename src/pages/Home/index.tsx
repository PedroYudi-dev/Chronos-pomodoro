import Conatainer from "../../components/Container/Container";
import CountDown from "../../components/CountDown";
import MainForm from "../../components/MainForm";
// import type { TaskStateModel } from "../../Models/TaskStateModel";
import MainTemplate from "../../template/MainTamplate";

// export type HomeProps = {
//   state: TaskStateModel;
//   setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
// };

export  function Home() {

    // const {state, setState} = props
    // VAI FICAR ASSIM "...PROPS"
    
  return (
    <>
      <MainTemplate>
        <Conatainer>
          <CountDown />
        </Conatainer>

        <Conatainer>
          <MainForm/>
        </Conatainer>
      </MainTemplate>
    </>
  );
}
