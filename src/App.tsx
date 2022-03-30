import { useState } from 'react';
import { GlobalStyle } from "./styles/global.style";
import Modal from 'react-modal';
import Header from "./components/header/header.component";
import Dashboard from "./components/dashboard/dashboard.component";
import NewTransactionModal from './components/new-transaction-modal/new-transaction-modal.component';

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
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </>
  );
}
