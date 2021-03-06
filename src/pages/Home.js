import React ,{useState,useEffect,useRef}from 'react'
import { Link } from 'react-router-dom'
import Content from '../Componenets/Content'
import Hero from '../Componenets/Hero'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


function Home() {
  gsap.registerPlugin(ScrollTrigger);

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
      setShowModal(prev => !prev);
    };
  const first=useRef();
  const second=useRef();
  
    useEffect(()=>{
      gsap.fromTo(
        second.current,
        {
          opacity: 0,
          scale: 0.2,
    
        },
        {
          opacity: 1,
          scale: 0.60,
          
          ease: "none",
          scrollTrigger: {
            trigger: first.current,
            start: "top 200px ", 
            end: "bottom 400px",
            scrub: true,
            markers:true
          }
        }
      );
  openModal()
    },[])
    
    return (
       <>
        <div ref={first} style={{backgroundColor:"#050B21"}}className="conatiner sm:w-full" >
        <Hero />
        <figure class=" md:flex bg-white rounded-xl p-8 md:p-0 mb-4">
        <div className="bg-white p-4 border-2 border-gray-200 rounded-lg mx-auto">
        <article ref={second} class="  overflow-hidden rounded-lg ">
        <img  class="object-contain  h-auto w-full md:object-scale-down" 
  src="https://images.unsplash.com/photo-1610902254423-0b0de350ddaa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=401&q=80" alt="" width="384" height="512" />

    </article>
  
        </div>
        <div className="flex flex-col justify-center items-center px-4 py-4">
        <blockquote>
      <p class="text-xl font-semibold">
        checkout today's deals with amazing offfers.avail the offers because its only for you.
      </p>
    </blockquote>
    
          <button style={{backgroundColor:"#050B21"}} className="h-12  w-auto text-white rounded-lg">
            <Link className="hover:text-white text-3xl"  to="/Cart">avail the offers by clicking here</Link>
          </button>
        </div>
  
</figure>
            <Content /> 
        </div>
       
           </>
       
    )
}

export default Home

