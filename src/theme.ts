import {extendTheme} from '@chakra-ui/react'

const config = {
	initialColorMode: 'light',
	useSystemColorMode: true
}

const styles = {
	global: (_: any) => ({
		body: {
			transition: ".1s"
		}
	})
}

// const colors = {
// }

const theme = extendTheme({config,styles})

export default theme;
