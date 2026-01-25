import React from 'react'
import Rightcardcontent from './Rightcardcontent'

const Rightcard = (props) => {
  return (
  <div className='h-full shrink-0 overflow-hidden relative w-80 rounded-2xl bg-red-500'>
        <img className='h-full w-full object-cover' src={props.img} alt="" />

     <Rightcardcontent id={props.id} tag={props.tag} intro={props.intro}/>
      
  </div> 
  )
}

export default Rightcard
