import React from 'react'
import {HStack, Text, useToast} from '@chakra-ui/react'

interface Props {
	emoji: string;
	label: string
}

const EmojiList: React.FC<Props> = (props) => {
	const {emoji, label} = props
	const toast = useToast()
	
	return (
		<HStack 
			spacing={5} 
			p={2} 
			cursor="pointer" 
			borderRadius="md" 
			alignItems="center" 
			border={1} 
			borderStyle="solid" 
			w="full" 
			borderColor="gray.500"
			onClick={() => {
				navigator.clipboard.writeText(emoji)
				toast({
					title: `Copyed  ${emoji}`,
					description: "We've copied your emoji for you.",
					status: "success",
					duration: 9000,
					isClosable: true,
				})
			}}
		>
			<Text>{emoji}</Text>
			<Text>{label}</Text>
		</HStack>
	)
}

export default EmojiList
