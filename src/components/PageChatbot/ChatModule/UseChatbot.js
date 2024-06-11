import { useState, useRef, useEffect } from 'react';

function useChatbot() {
  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState([
    {
      position: 'left',
      type: 'text',
      title: 'Chatbot',
      text: 'Olá caro estudante, seja bem vindo ao Chatbot Educacional!',
    },
    {
      position: 'left',
      type: 'text',
      title: 'Chatbot',
      text: 'Selecione uma das seguintes opções abaixo: 1 - Buscar pdf do boleto do mês atual 2 - Consultar suas notas 3 - Datas das provas',
    },
  ]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (messageText.trim()) {
      const newMessages = [
        ...messages,
        {
          position: 'right',
          type: 'text',
          title: 'User',
          text: messageText,
        },
      ];
      setMessages(newMessages);
      setMessageText('');

      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            position: 'left',
            type: 'text',
            title: 'Chatbot',
            text: 'Essa é uma resposta do bot.',
          },
        ]);
      }, 300);
    }
  };

  return {
    messageText,
    setMessageText,
    messages,
    messagesEndRef,
    handleSendMessage,
  };
}

export default useChatbot;
