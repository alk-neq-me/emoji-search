import {useState, useCallback, useEffect} from 'react'
import {Container, IconButton} from '@chakra-ui/react'
import Header from './components/Header'
import Filter from './components/Filter'
import EmojiLists from './components/EmojiLists'
import TopIcon from './icons/TopIcon'
import emojies from "./emojies.json"
import {Emoji} from './types'

function App() {
  const [scrollPos, setScrollPos] = useState<number>(0)
  const [visible, setVisible] = useState<number>(5)
  const [filtedEmojis, setFiltedEmojis] = useState<{emojies: Emoji[], count: number}>({
    emojies,
    count: emojies.length
  })
  
  useEffect(() => {
    const handleScroll = () => {
      const pos = window.pageYOffset
      setScrollPos(pos)
    }
    window.addEventListener("scroll", handleScroll, {passive: true})
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  const handleAddVisible = useCallback(() => {
    setVisible((prev: number) => prev + 20)
  }, [])
  
  const filteEmoji = useCallback((data: {emojies: Emoji[], count: number}) => {
    setFiltedEmojis(data)
  }, [])
  
  const handleTopToScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Container maxW="md" p={5}>
      <Header />
      <Filter emojies={emojies} setEmojis={filteEmoji} />
      <EmojiLists visible={visible} emojies={filtedEmojis.emojies} addVisible={handleAddVisible} />
      {scrollPos > 500 &&
        <IconButton 
          aria-label="scroll to top button"
          isRound 
          icon={<TopIcon/>}
          pos="fixed"
          bottom={8}
          right={10}
          onClick={handleTopToScroll}
        >
          Top
        </IconButton>}
    </Container>
  )
}

export default App
