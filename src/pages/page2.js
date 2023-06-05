import { useState } from 'react'
import { useBreakpointValue } from '@chakra-ui/react'

import { 
  Box,
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
  CardHeader,
  Divider,
  ButtonGroup
} from '@chakra-ui/react'; 

import Sidebar from '../components/Sidebar/index.js'
import Header from '../components/Header/index.js'
import Footer from '../components/Footer/index.js'

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
			    <Card overflow="hidden" variant="outline" direction={{base:'column',sm:'row'}}>
			        <Image alt="Caffe Latte" src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib" objectFit="cover" maxW={{base:'100%',sm:'200px'}}>
			        </Image>
			        <Stack>
			            <CardBody>
			                <Heading size="md">
			                    The perfect latte
			                </Heading>
			                <Text py="2">
			                    Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.
			                </Text>
			            </CardBody>
			            <CardFooter>
			                <Button type="button" variant="solid" colorScheme="blue">
			                    Buy Latte
			                </Button>
			            </CardFooter>
			        </Stack>
			    </Card>
			    <Card>
			        <CardHeader>
			            <Heading size="md">
			                Client Report
			            </Heading>
			        </CardHeader>
			        <CardBody>
			            <Stack spacing="4">
			                <Box>
			                    <Heading size="xs" texttransform="uppercase">
			                        Summary
			                    </Heading>
			                    <Text pt="2" fontSize="sm">
			                        View a summary of all your clients over the last month.
			                    </Text>
			                </Box>
			                <Divider aria-orientation="horizontal" orientation="horizontal">
			                </Divider>
			                <Box>
			                    <Heading size="xs" texttransform="uppercase">
			                        Overview
			                    </Heading>
			                    <Text pt="2" fontSize="sm">
			                        Check out the overview of your clients.
			                    </Text>
			                </Box>
			                <Divider aria-orientation="horizontal" orientation="horizontal">
			                </Divider>
			                <Box>
			                    <Heading size="xs" texttransform="uppercase">
			                        Analysis
			                    </Heading>
			                    <Text pt="2" fontSize="sm">
			                        See a detailed analysis of all your business clients.
			                    </Text>
			                </Box>
			            </Stack>
			        </CardBody>
			    </Card>
			    <Card maxW="sm">
			        <CardBody>
			            <Image alt="Green double couch with wooden legs" src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib" borderradius="lg">
			            </Image>
			            <Stack mt="6" spacing="3">
			                <Heading size="md">
			                    Living room Sofa
			                </Heading>
			                <Text>
			                    This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned spaces and for people who love a chic design with a sprinkle of vintage design.
			                </Text>
			                <Text color="blue.600" fontSize="2xl">
			                    $450
			                </Text>
			            </Stack>
			        </CardBody>
			        <CardFooter>
			            <ButtonGroup data-orientation="horizontal" spacing="2">
			                <Button type="button" variant="solid" colorScheme="blue">
			                    Buy now
			                </Button>
			            </ButtonGroup>
			        </CardFooter>
			    </Card>
			</Box>
		 <Footer></Footer> 
	 </Box> 
		 </> 
 	 ) 
}
 
