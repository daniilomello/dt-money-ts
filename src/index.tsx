import { render } from "react-dom";
import {createServer} from 'miragejs';
import App from "./App";

createServer({
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Desenvolvimento de Website',
          amount: 12000,
          type: 'deposit',
          category: 'Desenvolvimento',
          createdAt: new Date()
        }
      ]
    })
  }
})

const rootElement = document.getElementById("root");
render(<App />, rootElement);
