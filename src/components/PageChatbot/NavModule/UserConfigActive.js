import {
    FormControl,
    Input,
    InputGroup,
    InputRightElement,
    Tooltip,
    Avatar,
    VStack,
    Heading,
  } from '@chakra-ui/react';
  import { FaCheck } from 'react-icons/fa';
  
  export default function UserConfigActive() {
    return (
      <VStack spacing={4}>
        <Avatar size={'2xl'} />
        <Heading size={'lg'}>Nome usuario</Heading>
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
  