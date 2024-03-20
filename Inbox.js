import React from 'react'
import ViewTasks from '../../React8/ViewTasks'
import { useState } from 'react'
function Inbox() {
    let [comTasks,setComTasks]=useState([])


  return (
    <div className='w-100 m- rounded-3 p-3' style={{ backgroundImage: 'linear-gradient(to right, rgba(255, 150, 0, 0.5), rgba(0, 0, 0, 0.7))'}}>
        <ViewTasks comTasks={comTasks} setComTasks={setComTasks}></ViewTasks>
        </div>
  )
}

export default Inbox