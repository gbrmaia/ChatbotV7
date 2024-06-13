import React from 'react';
import {
  Button,
  VStack,
  Icon,
  Tooltip,
  Divider,
  useDisclosure,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import {
  FaRegClipboard,
  FaRegUser,
  FaRobot,
} from 'react-icons/fa';
import { MdExitToApp } from 'react-icons/md';
import themeColors from '../../ThemeColors'; // Importe o arquivo de configuração de tema
import ModalUserConfig from './UserConfigNav'; // Certifique-se de que o caminho está correto

export default function NavBot() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSair = () => {
    navigate('/');
  };

  const handleHistoricChat = () => {
    navigate('/historic-chat');
  };

  const handleChatbot = () => {
    navigate('/grid-bot');
  };

  return (
    <VStack mt={'2vh'} spacing="2vh" h="100vh">
      <Tooltip
        hasArrow
        label="Chatbot"
        placement="right"
        bg={themeColors.primaryColor}
      >
        <Button
          onClick={handleChatbot}
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="transparent"
          color={themeColors.primaryColor}
          _hover={{
            bg: 'transparent',
            color: themeColors.primaryHoverColor,
          }}
          p={0}
        >
          <Icon as={FaRobot} boxSize={6} />
        </Button>
      </Tooltip>
      <Divider />
      <Tooltip
        hasArrow
        label="Meu perfil"
        placement="right"
        bg={themeColors.primaryColor}
      >
        <Button
          onClick={onOpen} // Abre o modal ao clicar
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="transparent"
          color={themeColors.primaryHoverColor}
          _hover={{
            bg: 'transparent',
            color: themeColors.primaryHoverColor,
          }}
          p={0}
        >
          <Icon as={FaRegUser} boxSize={5} />
        </Button>
      </Tooltip>
      <Divider />
      <Tooltip
        hasArrow
        label="Meu histórico de conversas"
        placement="right"
        bg={themeColors.primaryColor}
      >
        <Button
          onClick={handleHistoricChat}
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="transparent"
          color={themeColors.primaryColor}
          _hover={{
            bg: 'transparent',
            color: themeColors.primaryHoverColor,
          }}
          p={0}
        >
          <Icon as={FaRegClipboard} boxSize={5} />
        </Button>
      </Tooltip>
      <Divider />
      <Tooltip
        hasArrow
        label="Sair"
        placement="right"
        bg={themeColors.primaryColor}
      >
        <Button
          onClick={handleSair}
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="transparent"
          color={themeColors.primaryColor}
          _hover={{
            bg: 'transparent',
            color: themeColors.primaryHoverColor,
          }}
          p={0}
        >
          <Icon as={MdExitToApp} boxSize={6} />
        </Button>
      </Tooltip>
      <ModalUserConfig isOpen={isOpen} onClose={onClose} />
    </VStack>
  );
}
