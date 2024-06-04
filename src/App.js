import { AnimatePresence } from 'framer-motion'
import './App.css'
import MenusButton from './menus_button/MenusButton'

function App() {
  return (
    <AnimatePresence mode={'wait'}>
      <div className='App'>
        <MenusButton />
      </div>
    </AnimatePresence>
  )
}

export default App
