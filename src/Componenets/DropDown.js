import React,{useState,useEffect,useRef} from 'react'
import { Link } from 'react-router-dom'
import NavLink from './NavLink'
import styled from 'styled-components';
import { TweenMax } from "gsap";
import { MdClose } from 'react-icons/md';


function DropDown({isOpen,toggle}) {
    const Drop=styled.div`
    position:fixed;
    z-index:2;
    height: 100vh;
  `;
  
const CloseModalButton = styled(MdClose)`
cursor: pointer;
position: absolute;
top: 20px;
right: 20px;
width: 32px;
height: 32px;
padding: 0;

`;
  const move=useRef()
  const back=useRef()

useEffect(()=>{
    TweenMax.from(move.current, {duration:1,y:-500});
    TweenMax.from(back.current, {duration:1,x:-500});

    

})
  
    return (
        <Drop ref={move} id="char" style={{backgroundColor:"#050B21"}} className={isOpen ? "visible overflow-hidden md:hidden  grid grid-rows-4 text-center w-full  items-center ":'hidden'} onClick={toggle}>
           
           <CloseModalButton ref={back}
              style={{background:"white"}}
      className=" mb-16"
                aria-label='Close modal'
               onClick={toggle}
              /> 
            
            <NavLink />
        </Drop>
    )
}

export default DropDown
/*
<div  className=" px-4 current-ponter rounded-lg md:hidden" onClick={toggle}>
        <svg className="w-6 h-6 rounded" style={{backgroundColor:"#d1d1d1"}} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </div>
*/
/*
 <div className={isOpen ? "visible md:hidden ":'hidden'} onClick={toggle}>
            <header>
            <div className="container">
            <div className="wrapper">
            <div className="inner-header">
            <div className="logo">
                <Link  to="/">Savan</Link>
            </div>
            <div className="menu">
                <button  to="/">Savan</button>
            </div>
            
            </div>
            </div>
            </div>
            <Hamburger />
            </header>
        </div>
*/