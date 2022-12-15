import {useColorModeValue} from '@chakra-ui/react'

const TopIcon = () => {
	return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="18"><rect width="24" height="24" fill="none" transform="rotate(90 12 12)"/><path fill={useColorModeValue("black", "white")} d="M9.28,14.16a.75.75,0,0,1-1.06,0,.76.76,0,0,1,0-1.07l3.25-3.25a.75.75,0,0,1,1.06,0l3.25,3.25a.77.77,0,0,1,0,1.07.75.75,0,0,1-1.06,0L12,11.44Z"/></g></svg>
}

export default TopIcon
