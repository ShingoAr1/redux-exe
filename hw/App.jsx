import React from 'react'
import { Cat} from 'react-kawaii'
import { useSelector, useDispatch } from 'react-redux'
import { updateMood, MOODS } from './mood'

function App() {
  const currentMood = useSelector((state) => state.mood)
  const dispatch = useDispatch()

  const handleMoodUpdate = (event) => {
    const mood = event.target.dataset.type
    dispatch(updateMood(mood))
  }

  return (
    <div className='App'>
      <Cat size={320} mood={currentMood} color='#ffffff' />
      <section>
        {Object.values(MOODS).map((mood) => (
          <button key={mood} data-type={mood} onClick={handleMoodUpdate}>
            {mood}
          </button>
        ))}
      </section>
    </div>
  )
}

export default App