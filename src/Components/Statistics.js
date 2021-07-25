import React from 'react'
import Statistic from '../Components/Statistic'

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad  
  const average = props.points / total
  const positive = (props.good / total) * 100 + '%'
    

    if(total===0){
      return(
        <div>
          No feedback given
        </div>
      )
    }
    return (
    <div>
      <Statistic value={props.good} text="good"/>
      <Statistic value={props.neutral} text="neutral"/>
      <Statistic value={props.bad} text="bad"/>
      <Statistic value={total} text="total"/>
      <Statistic value={props.points} text="points"/>
      <Statistic value={average} text="average"/>
      <Statistic value={positive} text="positive"/>
    </div>
    )
  }

export default Statistics