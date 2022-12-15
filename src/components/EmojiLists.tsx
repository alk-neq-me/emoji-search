import React from 'react'
import {VStack, Button, Text} from '@chakra-ui/react'
import EmojiList from './EmojiList'
import {Emoji} from '../types'

interface Props {
	visible: number;
	addVisible: () => void;
	emojies: Emoji[];
}

const EmojiLists: React.FC<Props> = (props) => {
	const {emojies, visible, addVisible} = props
	
	return (
		<VStack alignItems="start" fontSize="2xl">
			<Text>Total emojis: {(visible >= emojies.length) ? emojies.length : visible} of {emojies.length}</Text>
			{emojies.slice(0, visible).map(({symbol, title}: Emoji, index: number) => (
				<EmojiList key={index} emoji={symbol} label={title} />
			))}
			{(emojies.length >= visible) && <Button w="full" variant="ghost" onClick={addVisible}>load more</Button>}
		</VStack>
	)
}

export default EmojiLists
