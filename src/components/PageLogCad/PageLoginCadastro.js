import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginModal from './ModalLogin';
import CadastroModal from './ModalCadastro';
import themeColors from '../ThemeColors'; // Importe o arquivo de configuração de tema

export default function ModalGridLoginCadastro() {
  const [showCadastro, setShowCadastro] = useState(true);
  const navigate = useNavigate();

  const toggleModal = () => {
    setShowCadastro(!showCadastro);
  };

  const handleSobreNosClick = () => {
    navigate('/grid-bot');
  };

  return (
    <Container maxW={'7xl'} height="100vh">
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
        height="100%"
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: themeColors.primaryColor,
                zIndex: -1,
              }}
            >
              Ficamos felizes
            </Text>
            <br />
            <Text as={'span'} color={themeColors.primaryColor}>
              em ter você conosco.
            </Text>
          </Heading>
          <Text color={'gray.600'}>
            {showCadastro
              ? 'Caso já tenha uma conta, faça login abaixo.'
              : 'Caso ainda não tenha conta, cadastre-se abaixo.'}
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: 'column', sm: 'row' }}
          >
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              colorScheme={themeColors.primaryColorScheme}
              bg={themeColors.primaryColor}
              _hover={{ bg: themeColors.primaryHoverColor }}
              onClick={toggleModal}
            >
              {showCadastro ? (
                <Text as={'b'}>Fazer Login</Text>
              ) : (
                <Text as={'b'}>Cadastre-se</Text>
              )}
            </Button>
            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              onClick={handleSobreNosClick}
            >
              <Text as={'b'}>Sobre nós</Text>
            </Button>
          </Stack>
        </Stack>
        <Flex
          flex={1}
          justify={'center'}
          align={'center'}
          position={'relative'}
          w={'full'}
          height={'100vh'}
        >
          <Box
            position={'relative'}
            height={'100%'}
            rounded={'2xl'}
            boxShadow={'2xl'}
            width={'full'}
            overflow={'hidden'}
          >
            {showCadastro ? <CadastroModal /> : <LoginModal />}
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
