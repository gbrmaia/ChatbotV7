import React from 'react';
import { Box, Heading, Text, List, ListItem, Button, Grid, GridItem, Badge, Center } from '@chakra-ui/react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import NavBot from './PageChatbot/NavModule/NavBot';
import themeColors from './ThemeColors';

const ModalGridBot = () => {
  const chatHistory = [
    { id: 1, text: 'Sessão 1' },
    { id: 2, text: 'Sessão 2' },
    { id: 3, text: 'Sessão 3' },
    { id: 4, text: 'Sessão 4' },
    { id: 5, text: 'Sessão 5' },
    { id: 6, text: 'Sessão 6' },
    { id: 7, text: 'Sessão 7' },
    { id: 8, text: 'Sessão 8' },
    { id: 9, text: 'Sessão 9' },
    { id: 10, text: 'Sessão 10' },
  ];

  return (
    <Grid
      templateAreas={{
        base: `"nav main"`,
        md: `"nav main"`,
        lg: `"nav main"
              "nav footer"`,
      }}
      gridTemplateRows={{ base: '1fr', md: '1fr', lg: '1fr 30px' }}
      gridTemplateColumns={{
        base: '60px 1fr',
        md: '60px 1fr',
        lg: '70px 1fr',
      }}
      h="100vh"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
      overflow="hidden"
      bg="#EDF2F7"
    >
      <GridItem bg="#F7FAFC" area={'nav'}>
        <NavBot />
      </GridItem>
      <GridItem pl="2" bg="#F7FAFC" area={'footer'} display={{ base: 'none', md: 'none', lg: 'block' }}>
        <Center>
          <Badge variant="outline" colorScheme={themeColors.primaryColorScheme}>Todos os direitos reservados a @EQP7</Badge>
        </Center>
      </GridItem>
      <GridItem bg="transparent" area={'main'} p={6} borderRadius="md" mx="auto" mt={8} w="100%" overflow="hidden">
        <Center>
          <Box maxW="800px" w="100%" overflow="hidden">
            <Heading as="h2" size="xl" mb={4} color="teal.500" textAlign="center">
              Histórico de Chats
            </Heading>
            <List spacing={3} styleType="none">
              {chatHistory.map(message => (
                <ListItem key={message.id}>
                  <Link to={`/session/${message.id}`} style={{ textDecoration: 'none' }}>
                    <Box
                      bg="white"
                      p={4}
                      borderRadius="md"
                      boxShadow="sm"
                      borderWidth="1px"
                      borderColor="#E2E8F0"
                      cursor="pointer"
                      _hover={{ bg: 'teal.100', borderColor: 'teal.500' }}
                      transition="all 0.3s ease"
                    >
                      <Text fontSize="lg" color="teal.500">{message.text}</Text>
                    </Box>
                  </Link>
                </ListItem>
              ))}
            </List>
            <Box mt={6} textAlign="center">
              <Link to="/grid-bot">
                <Button
                  leftIcon={<FiArrowLeft />}
                  colorScheme="teal"
                  variant="outline"
                  size="md"
                  _hover={{ bg: 'teal.100' }}
                >
                  Voltar
                </Button>
              </Link>
            </Box>
          </Box>
        </Center>
      </GridItem>
    </Grid>
  );
};

export default ModalGridBot;
