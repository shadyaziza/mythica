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
  useMantineColorScheme,
} from '@mantine/core';
import { SwitchToggle } from './Components';
<<<<<<< Updated upstream
// 1. npm i server --workspace=client
// create lib/trpc.ts
// 2. npm i @trpc/server @trpc/client @trpc/react-query @tanstack/react-query --workspace=client
// 3. handle app.ts
=======
import { Provider } from 'overmind-react';
import { appState } from './state';
import { GameResult } from './Components/GameResult';
>>>>>>> Stashed changes

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
    <Provider value={appState}>
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
<<<<<<< Updated upstream
        <trpc.Provider queryClient={queryClient} client={trpcClient}>
          <QueryClientProvider client={queryClient}>
            <Flex
              mih={50}
              my={-500}
              // bg="rgba(0, 0, 0, .3)"
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
=======
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
                <GameResult />
              </Flex>
            </QueryClientProvider>
          </trpc.Provider>
        </ColorSchemeProvider>
      </MantineProvider>
    </Provider>
>>>>>>> Stashed changes
  );
}

export default App;
