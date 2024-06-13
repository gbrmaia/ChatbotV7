import { Grid, GridItem, Badge, Center } from '@chakra-ui/react';
import NavBot from './NavModule/NavBot';
import themeColors from '../ThemeColors'; 
import ModalMessageChat from './ChatModule/GridChatMessage';

export default function ModalGridBot() {
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
      <GridItem
        bg="#F7FAFC"
        area={'main'}
        display="flex"
        minWidth={0} // Prevent overflow
        overflow="hidden" // Add this line to prevent overflow
      >
        <ModalMessageChat />
      </GridItem>
      <GridItem
        pl="2"
        bg="#F7FAFC"
        area={'footer'}
        display={{ base: 'none', md: 'none', lg: 'flex' }}
        alignItems={'center'}
        justifyContent={'center'}
      >
          <Badge variant="outline" colorScheme={themeColors.primaryColorScheme}>Todos os direitos reservados a @EQP7</Badge>
      </GridItem>
    </Grid>
  );
}
