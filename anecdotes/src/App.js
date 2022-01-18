import React, { useState } from 'react'

const Button = ({label, handler}) => <button onClick={handler}>{label}</button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const getNextAnecdote = (current) => {      
    let candidate = Math.floor(Math.random() * 7)
    while (current == candidate) {
      console.log('current is ', current, 'candidate is ', candidate, 'picking the next anecdote')
      candidate = Math.floor(Math.random() * 7)
    }
    return candidate
  }

  const voteForAnecdote = (anecdoteIndex) => {
    const newVotes = [...votes]
    newVotes[anecdoteIndex]++
    setVotes(newVotes)
  }

  const getMostVotedAnecdote = () => {
    let anecdoteIndex = 0
    let maxAnecdoteVotes = 0

    for (let i = 0; i < votes.length; ++i) {
      if (votes[i] > maxAnecdoteVotes) {
        maxAnecdoteVotes = votes[i]
        anecdoteIndex = i
      }
    }

    return anecdotes[anecdoteIndex]
  }
   
  const [selected, setSelected] = useState(getNextAnecdote(NaN))
  const [votes, setVotes] = useState(new Uint32Array(7))

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <Button label='Next' handler={() => setSelected(getNextAnecdote)}/>
      <Button label='Vote' handler={() => voteForAnecdote(selected)}/>
      <h2>Anecdote with most votes</h2>
      <p>{getMostVotedAnecdote()}</p>
    </div>
  )
}

export default App