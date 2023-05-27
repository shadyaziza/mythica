import { useState } from 'react';
import { trpc } from './lib/trpc';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/react-query';
import { RandomCreature } from './Pages/RandomCreature';
import {
  ColorScheme,
  ColorSchemeProvider,
  Flex,
  MantineProvider,
} from '@mantine/core';
import { SwitchToggle } from './Components';

const BACKEND_URL = 'http://localhost:3000/mythica';

function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: BACKEND_URL,
        }),
      ],
    })
  );
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <trpc.Provider queryClient={queryClient} client={trpcClient}>
          <QueryClientProvider client={queryClient}>
            <Flex
              mih={50}
              my={-500}
              gap="lg"
              align="start"
              justify="space-between"
              direction="column"
              wrap="wrap"
              mb={100}
            >
              <SwitchToggle />
              <RandomCreature />
            </Flex>
          </QueryClientProvider>
        </trpc.Provider>
      </ColorSchemeProvider>
    </MantineProvider>
  );
}

export default App;
