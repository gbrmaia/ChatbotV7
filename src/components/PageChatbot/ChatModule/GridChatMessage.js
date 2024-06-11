import 'react-chat-elements/dist/main.css';
import { IoMdSend } from 'react-icons/io';
import {
  Box,
  Center,
  Flex,
  InputRightElement,
  InputGroup,
  Input,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import useChatbot from './UseChatbot';
import BoxMessagesChat from './BoxMessages'; // Importe o componente BoxMessagesChat
import themeColors from '../../ThemeColors'; // Importe o tema de cores

export default function ModalMessageChat() {
  const {
    messageText,
    setMessageText,
    messages,
    messagesEndRef,
    handleSendMessage,
  } = useChatbot();

  return (
    <Center w="100%" h="100%">
      <Box w={{ base: '100%', lg: '70%' }} h="100%" pt={'20px'}>
        <Flex h="100%" direction="column">
          <Box flex="1" p={2} overflowY="auto" bg="#F7FAFC">
            <BoxMessagesChat messages={messages} />
            <div ref={messagesEndRef} />
          </Box>
          <Box p={4} bg="#F7FAFC">
            <InputGroup>
              <Input
                placeholder="Digite sua mensagem..."
                size="md"
                value={messageText}
                onChange={e => setMessageText(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    handleSendMessage();
                  }
                }}
              />
              <InputRightElement>
                <Button
                  _hover={{
                    bg: 'gray.200',
                  }}
                  size="md"
                  onClick={handleSendMessage}
                  bg="none"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  p={0}
                >
                  <IoMdSend
                    className="send-icon"
                    size="25px"
                    color={themeColors.primaryColorScheme}
                  />
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
        </Flex>
      </Box>
    </Center>
  );
}
