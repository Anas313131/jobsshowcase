import React from 'react'
import Navbar from './Navbar'
import Pagecontent from './Pagecontent'

const Section1 = (props) => {

  console.log(props);
  


  return (
    <div className='h-screen w-full'>
      <Navbar />
      <Pagecontent  prof={props.prof}/>  
    </div>
  )
}

export default Section1
