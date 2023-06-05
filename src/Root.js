import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.js'

import Page2 from './pages/page2.js'
import PageNotFound from './pages/pagenotfound.js' 

const Root = () => (
	<ChakraProvider>
	<BrowserRouter>
		<Routes>
			<Route path="/">
				<Route index element={<App />} />
				<Route path="page2" element={<Page2/>} />
				<Route path="*" element={<PageNotFound />} />
			</Route>
		</Routes>
	</BrowserRouter>
	</ChakraProvider>
)

export default Root