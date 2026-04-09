import React, { useState } from 'react'

export default function User() {
 const [jobs,setJobs] =useState(JSON.parse(localStorage.getItem("jobs"))||[])
 console.log(jobs);
 function handle(){
  
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
 <button onClick={handle}>view more </button>
  </div>
          )

        })
        
        : <p> no jobs on this  portal</p>
      }
    </div>
  )
}
