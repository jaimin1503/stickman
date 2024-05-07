import { useState } from 'react'
import StickMan from './components/StickMan'

function App() {
  const [position, setPosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 })

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setPosition({ x: event.clientX, y: event.clientY })
  }
  return (
    <div className='App bg-blue-100 h-screen w-screen' onMouseMove={handleMouseMove}>
      <StickMan position={position} />
    </div>
  )
}

export default App
