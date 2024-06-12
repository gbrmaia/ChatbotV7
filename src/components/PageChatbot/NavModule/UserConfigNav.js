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
  VStack,
  Tooltip,
} from '@chakra-ui/react';
import { FaEdit } from 'react-icons/fa';
import UserConfigActive from './UserConfigActive';
import UserConfigEdit from './UserConfigEdit';
import themeColors from '../../ThemeColors'; // Importe o arquivo de configuração de tema

export default function ModalUserConfig({ isOpen, onClose }) {
  const [isEditing, setIsEditing] = useState(false);

  const handleToggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader pb={0} textAlign={'center'}>
          Meu perfil
          <Tooltip
            hasArrow
            label={isEditing ? 'Editando perfil' : 'Editar perfil'}
            placement="right"
          >
            <Button
              ml={3}
              size={'24px'}
              color={isEditing ? 'red.500' : themeColors.primaryColor}
              bg={'none'}
              _hover={{
                background: 'none',
                color: isEditing ? 'red.700' : themeColors.primaryHoverColor,
              }}
              onClick={handleToggleEdit}
            >
              <FaEdit fontSize="1em" verticalAlign="middle" />
            </Button>
          </Tooltip>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={3} display="flex" justifyContent="center">
          <VStack p={4}>
            {isEditing ? <UserConfigEdit /> : <UserConfigActive />}
          </VStack>
        </ModalBody>
        <ModalFooter>
          {isEditing && (
            <Button
              colorScheme={themeColors.primaryColorScheme}
              mr={3}
              onClick={handleToggleEdit}
            >
              Salvar
            </Button>
          )}
          <Button
            _hover={{ color: 'white', background: 'red.500' }}
            onClick={onClose}
          >
            {isEditing ? 'Cancelar' : 'Fechar'}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
