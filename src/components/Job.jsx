import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Job() {
  const {id} =   useParams()
 const [jobss, setJobs]=useState( JSON.parse(localStorage.getItem("jobs"))|| [])



 const job= jobss.find((job)=>job.id==Number(id))
 console.log(job);
 
  return (
    <div>Job</div>
  )
}
