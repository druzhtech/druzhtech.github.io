import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Heading,
  VStack, List, ListIcon, ListItem,
  Code, Icon,
  Grid, StackDivider,
  theme
} from "@chakra-ui/react"
import {customtheme} from '../customtheme'
import { AiFillGithub } from 'react-icons/ai'
import { FaTelegram, FaConnectdevelop } from 'react-icons/fa'
import { MdEmail, MdSecurity, MdSettings, MdCheckCircle, MdSchool } from 'react-icons/md'
import { Image } from '@chakra-ui/react'

import { AtSignIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'

import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import { Container } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Oko } from "./Oko"

export const App = () => (
  <ChakraProvider theme={theme}>

    <Container>
      <VStack
        // divider={<StackDivider borderColor='gray.200' />}
        align='center'
      >
        <Box>
          <br />
          <Oko />
        </Box>
       
        <Box>
          <Logo />
        </Box>
        <Box>
          <Container>
            <Heading as='h5' size='sm'>R&D Agency</Heading>
          </Container>
        </Box>
        <Box>
          <Container>
            <Heading as='h3' size='lg'>
              Druzhinin
            </Heading>
          </Container>
        </Box>
        {/* <Box>
          <Container>
            
          </Container>
        </Box> */}
        <Box>
          <Container>
            High quality by default
          </Container>
        </Box>
        <Box >
          <center><Container>

            <List spacing={3}>
              <ListItem>
                <ListIcon as={FaConnectdevelop} color='green.500' />
                web3 development
              </ListItem>
              <ListItem>
                <ListIcon as={MdSchool} color='green.500' />
                web3 education
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color='green.500' />
                web3 research
              </ListItem>

              <ListItem>
                <ListIcon as={MdSecurity} color='green.500' />
                web3 audits
              </ListItem>

              {/* You can also use custom icons from react-icons */}

            </List>
          </Container>
          </center>
        </Box>
        {/* <Box>
          <Container>partners</Container>

        </Box>
        <Box>
          <Container>projects</Container>

        </Box> */}
        <Box>
          <a href="mailto:druzhtech@yandex.com"><Icon as={MdEmail} /></a>
          <a href="https://t.me/didexbot"> <Icon as={FaTelegram} /></a>
          <a href="https://github.com/druzhtech"> <Icon as={AiFillGithub} /></a>

        </Box>
        {/* <Box>
          <Container>
            Swiss
          </Container>
        </Box> */}
        <Box>
          2023
        </Box>
        <Box>
        <Oko transform={"rotate(180deg)"} />
        </Box>
      </VStack>


    </Container>
  </ChakraProvider>
)
