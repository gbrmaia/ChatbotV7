import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Icon,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from 'react';
import themeColors from '../ThemeColors';  // Importa o arquivo de configuração de tema

export default function LoginModal() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Faça login aqui</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            para aproveitar o nosso <Link color={themeColors.primaryColor}>chatbot</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
          width={{ base: '100%', md: '450px' }} // Define a largura do Box
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>E-mail</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
            <FormLabel>Sua senha</FormLabel>
            <InputGroup>
              <Input type={showPassword ? 'text' : 'password'} />
              <InputRightElement h={'full'}>
                <Button
                  variant={'ghost'}
                  onClick={() =>
                    setShowPassword(showPassword => !showPassword)
                  }
                >
                  {showPassword ? <Icon as={FaEyeSlash} boxSize={5} /> : 
                  <Icon as={FaEye} boxSize={5} />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Link fontSize={'14px'} color={themeColors.primaryColor}>Esqueceu sua senha?</Link>
              </Stack>
              <Button
                bg={themeColors.primaryColor}
                color={'white'}
                _hover={{
                  bg: themeColors.primaryHoverColor,
                }}>
                Logar
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
