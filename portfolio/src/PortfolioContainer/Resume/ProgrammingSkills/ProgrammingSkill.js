import React, { useState } from 'react'

import ProgList from './ProgList/ProgList'

export default function ProgrammingSkill() {
  const [skill, setSkill]=useState([
    {
      language:"Java",
      progress: 80
    },
    {
      language:"JavaScript",
      progress: 80
    },
    {
      language:"Node",
      progress: 70
    },
    {
      language:"css",
      progress: 80
    },
    {
      language:"Reactjs",
      progress: 80
    },
    {
      language:"HTML",
      progress: 90
    },
    {
      language:"Kotlin",
      progress: 60
    }
  ])
  return (
    <div>
      <ProgList skills={skill}/>
    </div>
  )
}
