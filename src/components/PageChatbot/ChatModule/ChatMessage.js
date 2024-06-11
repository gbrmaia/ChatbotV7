import React from 'react';
import { Box, Flex, Avatar } from '@chakra-ui/react';
import { MessageBox } from 'react-chat-elements';
import 'react-chat-elements/dist/main.css';

const ChatMessage = ({ position, title, text, avatar, date }) => (
  <Flex
    justify={position === 'right' ? 'flex-end' : 'flex-start'}
    align="center"
    mb={10}
  >
    {position === 'left' && (
      <Avatar
        src={avatar}
        name={title}
        size="md"
        mr={1}
        mt={-50}
      />
    )}
    <Box position="relative">
      <MessageBox
        position={position}
        type="text"
        title={title}
        text={text}
        style={{
          backgroundColor: position === 'right' ? '#DCF8C6' : '#FFF',
          borderRadius: '10px',
        }}
      />
    </Box>
    {position === 'right' && (
      <Avatar
        src={avatar}
        name={title}
        size="md"
        ml={1}
        mt={-70}
      />
    )}
  </Flex>
);

export default ChatMessage;
