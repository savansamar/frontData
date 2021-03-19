import React ,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import NavLink from './NavLink'
import { loadCart } from '../Cart/CartHelper';


const NavBar=({toggle})=>{
      const [count,setCount]=useState([])

      useEffect(()=>{
            setCount(loadCart())
      },[count])

    
    return (
        <>
        <nav  style={{backgroundColor:"#050B21"}} className="flex justify-between  items-center h-16  text-black relative shadow-sm font-mono"
        role='navigation'
        >
        <div style={{backgroundColor:"#d1d1d1"}} className="px-4 current-ponter rounded-lg md:hidden" onClick={toggle}>
        
        <svg className="w-6 h-6 z-40" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </div>

        <div className="flex flex-row ">
            <Link to="/Bag" className="">
                <svg width="40" height="30" viewBox="0 0 200 218" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.91995 38.0266C20.6592 89.9835 26.5693 96.8874 46.8181 209.045L157.676 209.594L191.215 38.9254M9.91995 38.0266C64.9087 12.1203 103.141 -13.4148 191.215 38.9254M9.91995 38.0266L101.073 91.4905L191.215 38.9254" stroke="white" stroke-width="15"/>
                </svg>
            </Link>
            {!count.length?(<h1 className="mr-8 text-white">0</h1>) :(<div className=" bg-white h-4 rounded -ml-2 w-4"><h1 style={{color:"#050B21"}} >{count.length}</h1></div>)}

        </div>

        <div className="pr-8 md:block hidden">
       <NavLink />
       </div>
        </nav>
               
            </>
    )
}

export default NavBar
