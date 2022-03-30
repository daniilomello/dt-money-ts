import Summary from "../summary/summary.component";
import TransactionsTable from '../transactions/transactions.component';
import { Container } from "./dashboard.styles";

const Dashboard = () => {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
};

export default Dashboard;
