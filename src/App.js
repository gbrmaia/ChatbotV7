import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ModalGridLoginCadastro from './components/PageLogCad/PageLoginCadastro';
import ModalGridBot from './components/PageChatbot/GridBot';
import HistoricChat from './components/HistoricChat'; // Importe o componente HistoricChat aqui

function App() {
  return (
    <ChakraProvider>
      <Router basename="/ChatbotV7">
        <Routes>
          <Route path="/grid-bot" element={<ModalGridBot />} />
          <Route path="/historic-chat" element={<HistoricChat />} /> {/* Rota para HistoricChat */}
          <Route path="/" element={<ModalGridLoginCadastro />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
