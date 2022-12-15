import React from 'react'
import {Box, Input} from '@chakra-ui/react'
import {Emoji} from '../types'

interface Props {
	setEmojis: (data: {
		emojies: Emoji[],
		count: number
	}) => void,
	emojies: Emoji[]
}

const Filter: React.FC<Props> = (props) => {
	const {emojies, setEmojis} = props
	
	const handleChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
		const key = event.target.value.toLowerCase().trim()
		const filted = emojies.filter((emoji: Emoji) => {
			if (emoji.keywords.includes(key)) return true
			return false
		})
		setEmojis({emojies: filted, count: filted.length})
	}
	
	return (
		<Box my={10}>
			<Input 
				type="text" 
				placeholder="Search emoji" 
				onChange={handleChangeFilter}
			/>
		</Box>
	)
}

export default Filter
