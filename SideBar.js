import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom'
function SideBar() {
  return (
    <div className='vh-100 rounded-3 ' style={{ backgroundImage: `url("https://img.freepik.com/premium-vector/seamless-pattern-with-hand-drawn-magic-tools-concept-witchcraft-witchcraft-magic-background-witches-wizards_531380-643.jpg?size=626&ext=jpg&ga=GA1.1.1468178034.1699697060&semt=ais")`}}>
      <div>
        <ul className='text-warning list-unstyled px-3 text-center fs-5 '>
          <li className='nav-item my-3'><NavLink className='nav-link' to='addtask'>Add Task</NavLink></li>
          <li className='nav-item my-3'><NavLink className='nav-link' to='inbox'>Inbox</NavLink></li>
          <li className='nav-item my-3'><NavLink className='nav-link' to='today'>Today</NavLink></li>
          <li className='nav-item my-3'><NavLink className='nav-link' to='Acheivements'>Achievements</NavLink></li>
          <li className='nav-item my-3'><NavLink className='nav-link' to='calendar'>Calendar</NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar