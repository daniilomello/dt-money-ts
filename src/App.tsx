import { GlobalStyle } from "./styles/global.style";
import Header from "./components/header/header.component";
import Dashboard from "./components/dashboard/dashboard.component";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Dashboard />
    </>
  );
}
