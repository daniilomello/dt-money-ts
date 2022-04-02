import { useContext } from 'react';
import { TransactionsContext } from '../../contexts/transactions.context';
import { Container } from "./summary.styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

const Summary = () => {
  const { transactions } = useContext(TransactionsContext);

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Icone de entrada" />
        </header>
        <strong>R$ 1.000,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Icone de saída" />
        </header>
        <strong>-R$ 500,00</strong>
      </div>

      <div className="hightlight-background">
        <header>
          <p>Entradas</p>
          <img src={totalImg} alt="Icone do total" />
        </header>
        <strong>R$ 10.000,00</strong>
      </div>
    </Container>
  );
};

export default Summary;
