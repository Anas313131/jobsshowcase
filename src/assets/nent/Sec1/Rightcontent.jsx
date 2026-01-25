import React from 'react'
import Rightcard from './Rightcard'

const Rightcontent = (props) => {

  // console.log(props.prof);
  
  return (
    <div id='right' className='h-full w-2/3 p-5 flex felx-nowrap overflow-x-auto gap-10 rounded-3xl'>
     {props.prof.map(function(elem,idx){
      return <Rightcard img={elem.img} key={idx} id={idx} intro={elem.intro} tag={elem.tag}/>
     })}     
    </div>
  )
}

export default Rightcontent
