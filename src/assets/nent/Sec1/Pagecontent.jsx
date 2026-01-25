import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'



const Pagecontent = (props) => {

  return (
    <div className= 'pb-16 pt-6 flex h-[90vh] items-center gap-10'>
        <Leftcontent/>
        <Rightcontent  prof={props.prof}/>
      
    </div>
  )
}

export default Pagecontent
