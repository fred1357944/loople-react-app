import { useState } from 'react'
import { useBreakpointValue } from '@chakra-ui/react'

import { 
  Box,
  Grid,
  GridItem,
  Card,
  CardBody,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Image,
  Stack,
  Heading,
  Text,
  Badge,
  CardFooter,
  Button,
  Flex,
  Divider,
  UnorderedList,
  ListItem
} from '@chakra-ui/react'; 

import Sidebar from './components/Sidebar/index.js'
import Header from './components/Header/index.js'
import Footer from './components/Footer/index.js'

const smVariant = { navigation: 'drawer', navigationButton: true }
const mdVariant = { navigation: 'sidebar', navigationButton: false }

export default function App() { 

const [isSidebarOpen, setSidebarOpen] = useState(false) 
const variants = useBreakpointValue({ base: smVariant, md: mdVariant }) 

const toggleSidebar = () => setSidebarOpen(!isSidebarOpen) 

	return ( 
 		<> 
		 <Sidebar 
 			 variant={variants.navigation} 
 			 isOpen={isSidebarOpen} 
 			 onClose={toggleSidebar} 
 		 /> 
 		 <Box ml={!variants?.navigationButton && 240}> 
 			 <Header 
 				 showSidebarButton={variants?.navigationButton} 
 				 onShowSidebar={toggleSidebar} 
 		 /> 
			<Box p="5">
			    <Grid templateColumns="repeat(4, 1fr)" gap={6} mb="6">
			        <GridItem>
			            <Card overflow="hidden" variant="outline" bg="blackAlpha.900">
			                <CardBody>
			                    <Stat>
			                        <StatLabel color="white">
			                            Visits
			                        </StatLabel>
			                        <StatNumber color="white">
			                            345,670
			                        </StatNumber>
			                        <StatHelpText color="white">
			                            <StatArrow focusable="false" aria-hidden="true" type="increase">
			                            </StatArrow>
			                            23.36%
			                        </StatHelpText>
			                    </Stat>
			                </CardBody>
			            </Card>
			        </GridItem>
			        <GridItem>
			            <Card overflow="hidden" variant="outline" bg="blackAlpha.900">
			                <CardBody>
			                    <Stat>
			                        <StatLabel color="white">
			                            Users
			                        </StatLabel>
			                        <StatNumber color="white">
			                            16,890
			                        </StatNumber>
			                        <StatHelpText color="white">
			                            <StatArrow focusable="false" aria-hidden="true" type="increase">
			                            </StatArrow>
			                            14.85%
			                        </StatHelpText>
			                    </Stat>
			                </CardBody>
			            </Card>
			        </GridItem>
			        <GridItem>
			            <Card overflow="hidden" variant="outline" bg="blackAlpha.900">
			                <CardBody>
			                    <Stat>
			                        <StatLabel color="white">
			                            Revenue
			                        </StatLabel>
			                        <StatNumber color="white">
			                            $1,230,670
			                        </StatNumber>
			                        <StatHelpText color="white">
			                            <StatArrow focusable="false" aria-hidden="true" type="decrease">
			                            </StatArrow>
			                            1.12%
			                        </StatHelpText>
			                    </Stat>
			                </CardBody>
			            </Card>
			        </GridItem>
			        <GridItem>
			            <Card overflow="hidden" variant="outline" bg="blackAlpha.900">
			                <CardBody>
			                    <Stat>
			                        <StatLabel color="white">
			                            Expenses
			                        </StatLabel>
			                        <StatNumber color="white">
			                            $480,783
			                        </StatNumber>
			                        <StatHelpText color="white">
			                            <StatArrow focusable="false" aria-hidden="true" type="increase">
			                            </StatArrow>
			                            5.12%
			                        </StatHelpText>
			                    </Stat>
			                </CardBody>
			            </Card>
			        </GridItem>
			    </Grid>
			    <Grid gap={6} templateColumns={{base:'repeat(1,1fr)',lg:'repeat(2,1fr)'}}>
			        <GridItem>
			            <TableContainer>
			                <Table size="md">
			                    <Thead>
			                        <Tr>
			                            <Th>
			                                Page
			                            </Th>
			                            <Th>
			                                Bounce Rate
			                            </Th>
			                            <Th>
			                                Duration
			                            </Th>
			                            <Th>
			                                Conversion Rate
			                            </Th>
			                        </Tr>
			                    </Thead>
			                    <Tbody>
			                        <Tr>
			                            <Td>
			                                /loopple
			                            </Td>
			                            <Td>
			                                45%
			                            </Td>
			                            <Td>
			                                00:00:30
			                            </Td>
			                            <Td>
			                                1.23%
			                            </Td>
			                        </Tr>
			                        <Tr>
			                            <Td>
			                                /loopple/react
			                            </Td>
			                            <Td>
			                                21%
			                            </Td>
			                            <Td>
			                                00:04:24
			                            </Td>
			                            <Td>
			                                2.14%
			                            </Td>
			                        </Tr>
			                        <Tr>
			                            <Td>
			                                /loopple/chakra-ui
			                            </Td>
			                            <Td>
			                                38%
			                            </Td>
			                            <Td>
			                                00:03:58
			                            </Td>
			                            <Td>
			                                1.85%
			                            </Td>
			                        </Tr>
			                    </Tbody>
			                    <Tfoot>
			                        <Tr>
			                            <Td>
			                                /loopple/bootstrap
			                            </Td>
			                            <Td>
			                                55%
			                            </Td>
			                            <Td>
			                                00:01:40
			                            </Td>
			                            <Td>
			                                1.08%
			                            </Td>
			                        </Tr>
			                    </Tfoot>
			                </Table>
			            </TableContainer>
			        </GridItem>
			        <GridItem>
			            <TableContainer>
			                <Table size="md">
			                    <Thead>
			                        <Tr>
			                            <Th>
			                                Language
			                            </Th>
			                            <Th>
			                                Users
			                            </Th>
			                            <Th>
			                                Users(%)
			                            </Th>
			                        </Tr>
			                    </Thead>
			                    <Tbody>
			                        <Tr>
			                            <Td>
			                                en-us
			                            </Td>
			                            <Td>
			                                458
			                            </Td>
			                            <Td>
			                                52.52%
			                            </Td>
			                        </Tr>
			                        <Tr>
			                            <Td>
			                                en-gb
			                            </Td>
			                            <Td>
			                                112
			                            </Td>
			                            <Td>
			                                12.84%
			                            </Td>
			                        </Tr>
			                        <Tr>
			                            <Td>
			                                fr-fr
			                            </Td>
			                            <Td>
			                                33
			                            </Td>
			                            <Td>
			                                3.78%
			                            </Td>
			                        </Tr>
			                        <Tr>
			                            <Td>
			                                de-de
			                            </Td>
			                            <Td>
			                                22
			                            </Td>
			                            <Td>
			                                2.52%
			                            </Td>
			                        </Tr>
			                    </Tbody>
			                </Table>
			            </TableContainer>
			        </GridItem>
			    </Grid>
			    <Grid templateColumns="repeat(12,1fr)" gap={6}>
			        <GridItem colSpan={{base:12,lg:4}}>
			            <Card overflow="hidden" variant="outline">
			                <Image alt="Work" src="https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?ixlib" objectFit="cover" maxW="100%">
			                </Image>
			                <Stack>
			                    <CardBody>
			                        <Heading size="md">
			                            Slack
			                        </Heading>
			                        <Text py="2">
			                            This project is about integrating a new chat system to slack platform.
			                        </Text>
			                        <Stack direction="row" mt="3">
			                            <Badge colorScheme="green">
			                                IOS App
			                            </Badge>
			                            <Badge colorScheme="red">
			                                Desktop App
			                            </Badge>
			                        </Stack>
			                    </CardBody>
			                    <CardFooter>
			                        <Button type="button" variant="solid" size="sm">
			                            Attach File
			                        </Button>
			                    </CardFooter>
			                </Stack>
			            </Card>
			        </GridItem>
			        <GridItem colSpan={{base:12,lg:8}}>
			            <Card overflow="hidden" variant="outline">
			                <Stack>
			                    <CardBody>
			                        <Heading size="md" mb="4">
			                            Activites
			                        </Heading>
			                        <Flex flex="1" gap="4" alignitems="center" flexwrap="wrap">
			                            <Box>
			                                <Text fontSize="md">
			                                    Vanessa Tucker added 2 new files in Loopple
			                                </Text>
			                                <Text fontSize="xs">
			                                    Today 7:51 PM
			                                </Text>
			                            </Box>
			                        </Flex>
			                        <Divider aria-orientation="horizontal" my="3">
			                        </Divider>
			                        <Flex flex="1" gap="4" alignitems="center" flexwrap="wrap">
			                            <Box>
			                                <Text fontSize="md">
			                                    Charles Hall pushed 2 commits into Chakra UI Builder
			                                </Text>
			                                <Text fontSize="xs" mb="2">
			                                    Today 8:15 PM
			                                </Text>
			                                <Box border="1px" borderColor="gray.200" p="2">
			                                    <Text fontSize="xs">
			                                        Hi guys, I have a problem when I try to push into the main branch. Do you have any time today to take a look?
			                                    </Text>
			                                </Box>
			                            </Box>
			                        </Flex>
			                        <Divider aria-orientation="horizontal" my="3">
			                        </Divider>
			                        <Flex flex="1" gap="4" alignitems="center" flexwrap="wrap">
			                            <Box>
			                                <Text fontSize="md">
			                                    Marko finished tasks
			                                </Text>
			                                <Text fontSize="xs">
			                                    Today 8:54 PM
			                                </Text>
			                            </Box>
			                        </Flex>
			                        <Divider aria-orientation="horizontal" my="3">
			                        </Divider>
			                        <Flex flex="1" gap="4" alignitems="center" flexwrap="wrap">
			                            <Box>
			                                <Text fontSize="md">
			                                    Leonard completed the list for today's meeting
			                                </Text>
			                                <Text fontSize="xs" mb="2">
			                                    Today 9:14 PM
			                                </Text>
			                                <UnorderedList>
			                                    <ListItem>
			                                        Add tasks into Jira
			                                    </ListItem>
			                                    <ListItem>
			                                        Discuss about new content on our blog
			                                    </ListItem>
			                                </UnorderedList>
			                            </Box>
			                        </Flex>
			                    </CardBody>
			                    <CardFooter>
			                        <Button type="button" variant="solid" size="sm">
			                            See more
			                        </Button>
			                    </CardFooter>
			                </Stack>
			            </Card>
			        </GridItem>
			    </Grid>
			</Box>
		 <Footer></Footer> 
	 </Box> 
		 </> 
 	 ) 
}
 
