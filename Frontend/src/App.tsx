import { useState } from "react";
import { Layout } from "./components/Layout";
import styled from "styled-components";
import { 
  ChakraProvider,
  Tabs, 
  TabList,
  TabPanels,
  Tab, 
  TabPanel,
  Input,
  Text,
  Box,
  Button,
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter
} from '@chakra-ui/react'
import { login } from "./services/login";


const Boxes = styled.div`
  background-color: #0A5C36;
  padding-top: 5px;
  margin-top: 5px;
  color: white;
`

function App() {
  const [ email, setEmail ] =  useState('');
  console.log("🚀 ~ file: App.tsx:32 ~ App ~ email:", email)


  const logar = () => {
    alert(email)
  }

  
  return (
    <ChakraProvider>
      <Layout>
          <div>
            <Tabs size='md' variant='enclosed' colorScheme='white'>
              <Boxes>
                  <TabList>
                    <Tab as='b'>Faça o Login</Tab>
                    <Tab as='b'>Logs</Tab>
                  </TabList>
              </Boxes>
              <TabPanels>
                  <TabPanel>
                    <Box minHeight='80vh'>
                      <Box boxShadow='lg' padding='6' margin='6' rounded='md' bg='white'>
                        <Input placeholder="email" value={ email } onChange={ (event) => setEmail(event.target.value) } />
                        <Input mt='2' placeholder="password" />

                        <Button
                          colorScheme='teal'
                          variant='outline'
                          mt='6'
                          onClick={ () => login(email) }
                        >
                          Entrar
                        </Button>
                      </Box>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <Box minHeight='80vh'>
                      <Box boxShadow='lg' padding='6' margin='6' rounded='md' bg='white'>
                        <Card
                          direction={{ base: 'column', sm: 'row' }}
                          overflow='hidden'
                          variant='outline'
                        >
                            <CardBody>
                              <CardHeader>The perfect latte</CardHeader>

                              <Text py='2'>
                                Caffè latte is a coffee beverage of Italian origin made with espresso
                                and steamed milk.
                              </Text>
                            </CardBody>

                            <CardFooter>
                              <Button variant='solid' colorScheme='blue'>
                                Buy Latte
                              </Button>
                            </CardFooter>
                        </Card>
                      </Box>
                    </Box>
                  </TabPanel>
              </TabPanels>
            </Tabs>



          </div>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
