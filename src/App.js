import React, { useCallback, useState } from 'react'

import './App.css'
import Button from './components/UI/Button/Button'
import DemoOutput from './components/Demo/DemoOutput'

function App () {
  console.log('App running')
  const [showP, setShowP] = useState(false)
  const [allow, setAllow] = useState(false)

  const toggleParagraphHandler = useCallback(() => {
    if (allow)
      setShowP(prevState => !prevState)
  }, [allow])

  const allowToggleHandler = () => {
    setAllow(true)
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showP} />
      <Button onClick={allowToggleHandler}>Allow toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  )
}

export default App
