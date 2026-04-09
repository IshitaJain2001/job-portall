import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {addJob} from "../redux/reducerfn.js"
export default function Recrruiter() {
    const [formData, setFormData]= useState({
        companyName:"",
        employmentType:"",
        role:"",
        jobDescription:""
    })
const dispatch= useDispatch()
// const [jobs, setJobs] = useState(JSON.parse(localStorage.getItem("jobs")))

    function submitHandler(e){
e.preventDefault()
dispatch(addJob(formData))
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
</form>
    </div>
  )
}


// [name] :value