import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { applyJob } from '../redux/reducerfn'

export default function Job() {
  const {id} =   useParams()
 const [jobss, setJobs]=useState( JSON.parse(localStorage.getItem("jobs"))|| [])
const dispatch= useDispatch()

function applyHandler(job){
dispatch(applyJob(job))
}

 const job= jobss.find((job)=>job.id==Number(id))
 console.log(job);
 
  return (
    <div>
        {
            job != null ?
            <div>
              <p>  {job.companyName} </p>
              <p>  {job.role} </p>
              <h3>job description</h3>
              <p>{job.jobDescription}</p>
              <button onClick={()=>applyHandler(job)}>apply</button>
                </div>
            : <p> job is not available at the moment... </p>
        }
    </div>
  )
}
