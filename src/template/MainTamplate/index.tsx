
import Conatainer from "../../components/Container/Container";
import Logo from "../../components/Logo";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";

type MainTemplateProps = {
    children: React.ReactNode
}

export default function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Conatainer>
        <Logo />
      </Conatainer>

      <Conatainer>
        <Menu />
      </Conatainer>

      {children}

      <Conatainer>
        <Footer />
      </Conatainer>
    </>
  );
}