import React, { useRef, useEffect } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import ChatMessage from './ChatMessage'; // Importe o componente ChatMessage

function BoxMessagesChat({ messages }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Flex h="99%" w="100%" direction="column" >
      <Box flex="1" overflowY="auto" p={4} >
        {messages.map((msg, index) => (
          <ChatMessage
            key={index}
            position={msg.position}
            title={msg.title}
            text={msg.text}
            avatar={
              msg.position === 'left'
                ? 'https://avataaars.io/?avatarStyle=Circle&topType=WinterHat1&accessoriesType=Blank&hatColor=Red&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
                : 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
            }
          />
        ))}
        <div ref={messagesEndRef} />
      </Box>
    </Flex>
  );
}

export default BoxMessagesChat;