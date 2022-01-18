import React, { useState } from 'react'

const Button = ({label, handler}) => <button onClick={handler}>{label}</button>

const StatisticLine = ({name, value, unit}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{value}</td>
      <td>{unit}</td>
    </tr>
  )
}

const Statistics = ({statsArray: {good, neutral, bad, all, average, positive}}) => {   
  if (all > 0) {
    return (
      <table>  
        <tbody>
          <StatisticLine name = 'good' value = {good} unit = '' />
          <StatisticLine name = 'neutral' value = {neutral} unit = '' />
          <StatisticLine name = 'bad' value = {bad} unit = '' />
          <StatisticLine name = 'all' value = {all} unit = '' />
          <StatisticLine name = 'average' value = {average} unit = '' />
          <StatisticLine name = 'positive' value = {positive} unit = '%' />
        </tbody>
      </table>)
  }
  else {
    return (
      <p>    
        No feedback given
      </p>)
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const IncrementCounter = (func, val) => () => { 
    func(val + 1) 
  }

  const stats = {good: good,
                 neutral: neutral,
                 bad: bad,
                 all: good + neutral + bad,
                 average: (good * 1 + bad * -1) / (good + neutral + bad),
                 positive: (good * 100) / (good + neutral + bad)}

  return (
    <div>
      <h2>give feedback</h2>
      <Button label = 'good' handler = {IncrementCounter(setGood, good)} />
      <Button label = 'neutral' handler = {IncrementCounter(setNeutral, neutral)} />
      <Button label = 'bad' handler = {IncrementCounter(setBad, bad)} />
      <h2>statistics</h2>
      <Statistics statsArray = {stats} />
    </div>
  )
}

export default App