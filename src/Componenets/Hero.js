import React,{useRef,useState,useEffect} from 'react'
import { TweenMax } from "gsap";
import Tsh from "../images/newTshirt.svg"
import Tsh2 from "../images/update.png"
import Tsh3 from "../images/HomeBack.png"




function Hero() {
    const move=useRef()
    const move2=useRef()
    const move3=useRef()
    const move4=useRef()
    const move5=useRef()
    const move6=useRef()

    

    useEffect(()=>{
       
      TweenMax.from(move.current, {duration: 2, opacity: 0, scale: 0.5});
       // TweenMax.to(move2.current,  {duration:10,rotation:"360",x:-800,y:50, ease:Linear.easeNone, repeat:-1});
    },[])

    return (

        <>
        <div style={{backgroundColor:"#FFFFFF"}} className=" h-screen  flex flex-col justify-end items-end md:items-start md:flex-row-reverse ">
       <div className="flex flex-wrap -mt-8 objext-conatin">
       <img ref={move} className="absolute z-40 h-64 -ml-12 md:ml-8 p-4 mt-4 md:h-96 items-end"  src={Tsh} alt="data"/>   
       
       <img className="h-screen mt-4 w-full md:h-screen "  src={Tsh2} alt="data"/>
       </div>
         
           {/* <img ref={move} className="h-48 mt-4 md:h-48 items-end"  src={Tsh} alt="data"/>
            <div  className="h-64 my-auto mx-auto flex justify-center items-center ">
    <h1 className="text-9
    xl  md:text-9xl uppercase font-white text-white">EXPLORE</h1>
</div> 
    */}
  
      </div>         
          

        
</>
       
    )
}

export default Hero



/*
<h1  className="lg:text-9xl animate-bounce md:text-7xl sm:text-5xl text-3xl font-black mb-14">
                    Company Name
                    <Card />
                </h1>
                 <Link 
                className="py-6 px-10 bg-yellow-500 rounded-full text-3xl hover:bg-yellow-300 transition duration-300 ease-in-out flex items-center animate-bounce">
    Order Now
            <svg 
                className="w-6 h-6 ml-4"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor">
                     <path 
                     d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>


</Link>
*/