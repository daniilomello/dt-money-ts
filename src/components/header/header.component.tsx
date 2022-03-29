import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./header.styles";

const Header = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="DT Money Logo" />
        <button>Nova transação</button>
      </Content>
    </Container>
  );
};

export default Header;
