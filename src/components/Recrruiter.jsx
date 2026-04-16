import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {addJob} from "../redux/reducerfn.js"
export default function Recrruiter() {
  let user= JSON.parse(localStorage.getItem("loggedinUser"))

    const [formData, setFormData]= useState({
        companyName:"",
        employmentType:"",
        role:"",
        jobDescription:"",
        applications:[]
    })
const dispatch= useDispatch()
const [jobss, setJobss] = useState(JSON.parse(localStorage.getItem("jobs")))
const jobb= jobss.filter((job)=>job.postedBy== user.name)
console.log("----",jobb);

    function submitHandler(e){
     
      
e.preventDefault()
dispatch(addJob({...formData, postedBy: user.name}))
    }

    function changeHandler(e){
 
let {name, value} = e.target


setFormData({
  ...formData,
  [name]: value
})
}


  return (
    <div>
      <form action="">
<input type="text" name="companyName" id="" placeholder='companyName' onChange={(e)=>changeHandler(e)}/>
<input type="text" name="employmentType" id="" placeholder='employmentType' onChange={(e)=>changeHandler(e)}/>
<input type="text" name="role" id="" placeholder='role' onChange={e=>changeHandler(e)}/>
<textarea name="jobDescription" id="" placeholder='jobDescription' onChange={e=>changeHandler(e)}></textarea>

<button onClick={submitHandler}>submit</button>
<div>
  <h1>jobs posted by me -:</h1>
  <div>{
    jobb.length>0 ?
    jobb.map((job, index )=>{
      return (<div>

        <h1>role {index+1}-: {job.role}</h1>
<h2 >applications -:</h2>
{
  
  
   job.applications.length>0 ?
  job.applications.map((application, index)=>{
    return(

      <p>{index+1} {application}</p>
    )
  })
  : <p> no applications yet...</p>
}
</div>
      )
    })
    : <p> start posting </p>
    }

  </div>
</div>
</form>
    </div>
  )
}


// [name] :value