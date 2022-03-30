import { useState } from 'react';
import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeModal from '../../assets/close.svg';
import {Container, TransactionTyperContainer, RadioBox} from './new-transaction-modal.styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const NewTransactionModal = ({isOpen, onRequestClose}:NewTransactionModalProps) => {
  const [type, setType] = useState('deposit');

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content">
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeModal} alt="Fechar modal icone" />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder="Título" />
        <input type="number" placeholder="Valor" />
        <TransactionTyperContainer>
          <RadioBox type="button" onClick={() => setType('deposit')} isActive={type === 'deposit'} activeColor="green">
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox type="button" onClick={() => setType('withdraw')} isActive={type === 'withdraw'} activeColor="red">
            <img src={outcomeImg} alt="Entrada" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTyperContainer>
        <input type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}

export default NewTransactionModal;
