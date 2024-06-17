import {
    FormControl,
    Input,
    InputGroup,
    InputRightElement,
    Tooltip,
    Avatar,
    VStack,
  } from '@chakra-ui/react';
  import { FaCheck } from 'react-icons/fa';
  
  export default function UserConfigActive() {
    return (
      <VStack spacing={4}>
        <Avatar size={'2xl'} />
        <FormControl>
          <InputGroup>
            <Input
              variant="flushed"
              type="email"
              isDisabled
              defaultValue="usuario" // Valor preenchido por padrão
              fontSize="lg" // Tamanho do texto
              pr="3rem" // Padding right para evitar sobreposição
            />
            <Tooltip
              hasArrow
              label="usuario cadastrado atualmente"
              placement="right"
            >
              <InputRightElement width="3rem">
                <FaCheck color="green" />
              </InputRightElement>
            </Tooltip>
          </InputGroup>
        </FormControl>
        <FormControl>
          <InputGroup>
            <Input
              variant="flushed"
              type="email"
              isDisabled
              defaultValue="email@dousuario.com" // Valor preenchido por padrão
              fontSize="lg" // Tamanho do texto
              pr="3rem" // Padding right para evitar sobreposição
            />
            <Tooltip
              hasArrow
              label="E-mail cadastrado atualmente"
              placement="right"
            >
              <InputRightElement width="3rem">
                <FaCheck color="green" />
              </InputRightElement>
            </Tooltip>
          </InputGroup>
        </FormControl>
      </VStack>
    );
  }
  