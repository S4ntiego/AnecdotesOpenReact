import React, { useState } from 'react'

import Statistics from '../src/Components/Statistics'
import Button from '../src/Components/Button'
import Title from '../src/Components/Title'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [points, setPoints] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(all + 1)
    setPoints(points + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
    setPoints(points + 0)
  }
  
  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setPoints(points - 1)
  }

  return (
    <table>
      <Title name="give feedback"/>
      <Button handleClick={handleGoodClick} text="good"/>
      <Button handleClick={handleNeutralClick} text="neutral"/>
      <Button handleClick={handleBadClick} text="bad"/>
      <Title name="statistics"/>
      <Statistics good={good} neutral={neutral} bad={bad} points={points}/>
    </table>
  )
}

export default App