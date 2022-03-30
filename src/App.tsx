import { GlobalStyle } from "./styles/global.style";
import Header from "./components/header/header.component";
import Dashboard from "./components/dashboard/dashboard.component";
import TransactionsTable from "./components/transactions/transactions.component";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Dashboard />
    </>
  );
}
