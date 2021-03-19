import React, { useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import FormSignup from '../FormSignup';
import { TweenMax } from "gsap";

const Background = styled.div`
  
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;


 const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();
  const move=useRef()

  
  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      TweenMax.from(move.current, {duration: 1, y: 300, opacity: 0});
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
           
          <div ref={move} className=" p-16 space-x-8">
         
            <div showModal={showModal} className="">
             <FormSignup />
             
            </div>
            
          </div>
          
        </Background>
      ) : null}
      
    </>
  );
};

export default Modal