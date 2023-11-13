import './Header.css'
import { ChakraProvider, Text, Box } from '@chakra-ui/react'

export const Header =  () => {
    return(
        <ChakraProvider>
            <div className='header'>
                <Box pl={2}>
                    <Text fontSize='lg' as='b'>Logging Service</Text>
                </Box>
            </div>
        </ChakraProvider>
    )
}