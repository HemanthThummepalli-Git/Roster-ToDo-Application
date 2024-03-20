import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import SideBar from './SideBar'
import Footer1 from './Footer1'
function RootLay() {
  return (
    <div style={{ backgroundImage: `url("https://img.freepik.com/free-vector/education-pattern-background-doodle-style_53876-115365.jpg?w=826&t=st=1708263766~exp=1708264366~hmac=4e000cc62b160d131687d7e03ffc4bdc4faba64e49b972e709be265e174cc51b")`}}>
        <NavBar></NavBar>
        <div className="d-flex mt-1 gap-1">
            <SideBar></SideBar>
            
            <Outlet></Outlet>
            
        </div>
    </div>
  )
}

export default RootLay