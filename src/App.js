import React, { useState } from 'react'

import Button from '../src/Components/Button'
import Title from '../src/Components/Title'

const Winner = ({anecdotes, points}) => {
  const maxVotesCount = Math.max(...points)
  const indexOfMaxVotes = points.indexOf(maxVotesCount)

  if(maxVotesCount === 0){
    return <div>No votes yet</div>
  } else {
    return(
      <div>{anecdotes[indexOfMaxVotes]}</div>
    )
  }
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
  
  const [points, setPoints] = useState(Array(7).fill(0))
  const [selected, setSelected] = useState(0)

  const maxPoints = () => {
    const xD = Math.max.apply(Math, points)
    const indexx = points.indexOf(xD)
    return indexx
  }

  maxPoints()

  const handleAnecdotes = () => {
    setSelected(Math.floor(Math.random()*7))
  }

  const handlePoints = () => {
    const pointsCopy = [...points]
    setPoints(pointsCopy, pointsCopy[selected] += 1)
  }

  return (
    <div>
      <Title name="Anecdote of the day"/>
      {anecdotes[selected]}
      <br/>
      has {points[selected]} votes
      <br/>
      <Button handleClick={() => handlePoints()} text="vote"/>
      <Button handleClick={() => handleAnecdotes()} text="next anecdote"/>
      <Title name="Anecdote with most votes"/>
      <Winner anecdotes={anecdotes} points={points}/>
    </div>
  )
}

export default App