import { useState } from 'react';
import Modal from 'react-modal';
import { GlobalStyle } from "./styles/global.style";
import Header from "./components/header/header.component";
import Dashboard from "./components/dashboard/dashboard.component";

Modal.setAppElement('#root');

export default function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <Modal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}>
        <h2>Cadastrar transação</h2>
      </Modal>
    </>
  );
}
