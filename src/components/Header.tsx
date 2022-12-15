import React from 'react'
import GitHubButton from 'react-github-btn'
import {useColorMode} from '@chakra-ui/react'
import {Center, VStack, Text, FormControl, FormLabel, Switch} from '@chakra-ui/react'

const Header: React.FC = () => {
  const {colorMode, toggleColorMode} = useColorMode()
  
  return (
    <Center>
      <VStack>
        <Text fontSize="3xl">🦄 Emoji Search 🙀</Text>
        <Text fontSize="lg" color="gray.500">A Simple emoji search tool made with React.</Text>
        <GitHubButton 
          href="https://github.com/buttons/github-buttons" 
          data-icon="octicon-star" 
          aria-label="Star buttons/github-buttons on GitHub"
        >
          Star
        </GitHubButton>
        <Center>
          <FormControl display="flex" gap={2}>
            <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
            <FormLabel>Dark Mode</FormLabel>
          </FormControl>
        </Center>
      </VStack>
    </Center>
  )
}

export default Header
