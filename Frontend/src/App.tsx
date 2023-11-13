import { Layout } from "./components/Layout";
import styled from "styled-components";
import { 
  ChakraProvider,
  Tabs, 
  TabList,
  TabPanels,
  Tab, 
  TabPanel,
  Input
} from '@chakra-ui/react'


const Box = styled.div`
  background-color: #0A5C36;
  padding-top: 5px;
  margin-top: 5px;
  color: white;
`

function App() {
  return (
    <ChakraProvider>
      <Layout>
          <div>
            <Tabs size='md' variant='enclosed' colorScheme='white'>
              <Box>
                  <TabList>
                    <Tab as='b'>Faça o Login</Tab>
                    <Tab as='b'>Logs</Tab>
                  </TabList>
              </Box>
              <TabPanels>
                  <TabPanel>
                    <p>one!</p>
                  </TabPanel>
                  <TabPanel>
                    <p>two!</p>
                  </TabPanel>
              </TabPanels>
            </Tabs>

            <Input placeholder="email" />
            <Input placeholder="password" />

            <button>
              Entrar
            </button>
          </div>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
