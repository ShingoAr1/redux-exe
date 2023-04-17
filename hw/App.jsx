import React from 'react'
import { Cat} from 'react-kawaii'
import { useSelector, useDispatch } from 'react-redux'
import { MOODS,sizeMakeSmall,updateCatMood,updateColor,sizeMakeBig } from './mood'
import './App.css'


function App() {
  const currentMood = useSelector((state) => state.mood)
  const dispatch = useDispatch()
  const sizeCurrent = useSelector((state) => state.size)
  const colorCurrent = useSelector((state) => state.color)

  const handleMoodUpdate = (event) => {
    const mood = event.target.dataset.type
    dispatch(updateCatMood(mood))
  }

  const handleColorUpdate = (event) => {
    const color = event.target.value
    dispatch(updateColor(color))  
  }



  return (
    <div className='App'>
      <Cat size={sizeCurrent} mood={currentMood} color={colorCurrent} />
      <section>
        {Object.values(MOODS).map((mood) => (
          <button key={mood} data-type={mood} onClick={handleMoodUpdate}>
            {mood}
          </button>
        ))}
        <div>
        <button onClick={()=>dispatch(sizeMakeSmall())}>-</button>
        <button onClick={()=>dispatch(sizeMakeBig())}>+</button>
        </div>
        <input type="color" onChange={handleColorUpdate}/>
      </section>
    </div>
  )
}


export default App