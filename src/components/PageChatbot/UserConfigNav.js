import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  Button,
  Avatar,
  AvatarBadge,
  VStack,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { MdEdit } from 'react-icons/md';
import themeColors from '../ThemeColors'; // Importe o arquivo de configuração de tema
import { FaCheck, FaLock, FaLockOpen } from 'react-icons/fa';

export default function ModalUserConfig({ isOpen, onClose }) {
  const [isDisabled, setIsDisabled] = useState(true); // habilita ou desabilita o campo e-mail quando o botão de edição é precissonado
  const [email, setEmail] = useState('usuario@exemplo.com'); // Email do usuário

  const toggleDisabled = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      size={'xl'}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader pb={0} textAlign={'center'}>
          Meu perfil
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={3} display="flex" justifyContent="center">
          <VStack p={5}>
            <Avatar size={'xl'}>
              <AvatarBadge
                as={Button}
                onClick={toggleDisabled}
                colorScheme={themeColors.primaryColorScheme}
                boxSize="2.5em"
                borderRadius="full"
                alignItems="center"
                justifyContent="center"
                display="flex"
                p={0}
              >
                <MdEdit size="1.5em" />
              </AvatarBadge>
            </Avatar>
            <Heading pt={3} as="h4" size="md">
              Nome do usuario
            </Heading>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
              >
                {isDisabled ? (
                  <FaLock />
                ) : (
                    <FaLockOpen />
                )}
              </InputLeftElement>
              <Input value={email} isDisabled={isDisabled}  onChange={(e) => setEmail(e.target.value)} />
              <InputRightElement>
                {isDisabled ? (
                  <FaCheck color="green" />
                ) : (
                  <Text as={'b'} color={'red'}>
                    X
                  </Text>
                )}
              </InputRightElement>
            </InputGroup>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme={themeColors.primaryColorScheme} mr={3}>
            Salvar
          </Button>
          <Button
            _hover={{ color: 'white', background: 'red.500' }}
            onClick={onClose}
          >
            Cancelar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
