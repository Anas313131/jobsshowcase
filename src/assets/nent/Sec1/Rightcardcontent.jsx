import React from 'react'

const Rightcardcontent = (props) => {

  console.log(props.tag);
  
  return (
  
    <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between'>

       <h2 className='bg-white rounded-full w-10 h-10 items-center flex justify-center font-bold text-2xl'>{props.id+1}</h2>

       <div className='text-lg text-white mt-60'>
        <p>{props.intro}</p>
       </div>

       <div className='flex flex-row justify-between items-center'>
        <button className='bg-blue-600 text-white px-7 py-3 rounded-2xl font-semibold'>{props.tag}</button>
        <button className='bg-blue-600 text-white px-4 py-3 rounded-2xl font-semibold'><i class="ri-arrow-right-line"></i></button>
       </div>
     
     
     
     </div>
  )
}

export default Rightcardcontent
