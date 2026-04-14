import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function User() {
 const [jobs,setJobs] =useState(JSON.parse(localStorage.getItem("jobs"))||[])

const navigate= useNavigate()
 console.log(jobs);
 function handle(job){
  navigate(`/job/${job.id}`)
 }
  return (
    <div>
      {
        jobs.length>0 ?
        jobs.map((job)=>{
          return (
<div>
  <h1>{job.role}</h1> 
 <span> {job.companyName}</span> <span> ({job.employmentType})</span>
 <button onClick={()=>handle(job)}>view more </button>
  </div>
          )

        })
        
        : <p> no jobs on this  portal</p>
      }
    </div>
  )
}
