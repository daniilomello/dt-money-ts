import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./header.styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

const Header = ({onOpenNewTransactionModal}: HeaderProps) => {

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="DT Money Logo" />
        <button onClick={onOpenNewTransactionModal}>Nova transação</button>
      </Content>
    </Container>
  );
};

export default Header;
