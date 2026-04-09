import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../redux/reducerfn'

export default function Register() {
const recruiters=  JSON.parse(localStorage.getItem("recruiters"))
 const users=JSON.parse(localStorage.getItem("users"))
console.log(recruiters);


const [designation , setDesignation] =   useState(null)
const dispatch=  useDispatch()
const [formData, setFormData] = useState({
fullName:"",
companyName:"",
location:"",
password:""
})
const [formData1, setFormData1] = useState({
  fullName:"",
  role:"",
  skillset:"",
  password:""
})

function handleChange(e){
const {name, value} = e.target 
setFormData({
  ...formData,
  [name] : value
})
}

function handleChange1(e){
  const {name, value} = e.target 
setFormData1({
  ...formData1,
  [name] : value
})
}
function employerForm(e){

  
  e.preventDefault()
 dispatch(register({
 
    role:"employer",
    data:formData
  
 }))
}

function candidateForm(e){

  
  e.preventDefault()
 dispatch(register({
 
    role:"candidate",
    data:formData1
  
 }))
}
  return (
    <div>
        <button onClick={()=>setDesignation("employer")}>register as employer</button> 
        <button onClick={()=>setDesignation("candidate")}> register as candidate</button>
{
    designation== "employer" ?
<form>
    <label >full name-:</label>
<input type="text" onChange={handleChange} name='fullName'/>
  <label >company name-:</label>
<input type="text" onChange={handleChange} name='companyName'/>
  <label >company location-:</label>
<input type="text" onChange={handleChange} name='location'/>
<input type="text" onChange={handleChange} name='password'/>
<button onClick={employerForm}>submit</button>
</form>

    :  <form>
  <label >full name-:</label>
<input type="text" onChange={handleChange1} name='fullName'/>
  <label >role -:</label>
<input type="text" onChange={handleChange1} name='role'/>
  <label >skillset -:</label>
<textarea  id="" onChange={handleChange1 } name="skillset"></textarea>
<input type="text" onChange={handleChange1} name='password'/>
<button onClick={candidateForm}> submit </button>
    </form>
}
    </div>
  )
}
