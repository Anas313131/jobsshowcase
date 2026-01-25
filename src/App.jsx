import React from 'react'
import Section1 from './assets/nent/Sec1/Section1'
import Section2 from './assets/nent/Sect2/Section2'


const App = () => {

  const prof = [
    {
      img: 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Interview Introduction (General): "Hello, my name is [Name]. I am a [Job Title] with over [Number] years of experience in [Industry]. Throughout my career, I ve focused on [Key Skill], including a recent project where I [Specific Accomplishment]. I am highly motivated to join this team because [Reason for interest]',
      tag: 'Satisfied',
    },

    {
      img: 'https://images.unsplash.com/photo-1507206130118-b5907f817163?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'New Employee/Email Intro: "Hi [Manager Name], I and Im excited to join the team as the new [Job Title]. Im looking forward to contributing to [Project/Goal] and collaborating with everyone',
      tag: 'Underserved'
    },

     {
      img: 'https://images.unsplash.com/photo-1620828771830-fb3fa87866b6?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Job Fair/Networking: "Hi, Im [Name], a [Major/Field] graduate with experience in [Skill]. I’ve followed [Company] for a while and am interested in how you [mention a company achievement]',
      tag: 'Underbanked'
    },

    {
      img: 'https://plus.unsplash.com/premium_photo-1682608389237-f4b698f5af82?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Job Fair/Networking: "Hi, Im [Name], a [Major/Field] graduate with experience in [Skill]. I’ve followed [Company] for a while and am interested in how you [mention a company achievement]',
      tag: 'IT Jobs'
    },

  ]
  
  return (
    <div>
      <Section1 prof={prof} />
      <Section2 />

    </div>
  )
}

export default App
