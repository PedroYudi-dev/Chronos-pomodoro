import Conatainer from "../../components/Container/Container";
import CountDown from "../../components/CountDown";
import MainForm from "../../components/MainForm";
import MainTemplate from "../../template/MainTamplate";

export default function Home() {
  return (
    <>
      <MainTemplate>
        
        <Conatainer>
          <CountDown />
        </Conatainer>

        <Conatainer>
          <MainForm />
        </Conatainer>

      </MainTemplate>
    </>
  );
}
