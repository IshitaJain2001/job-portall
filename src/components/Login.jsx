import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Recrruiter from "./Recrruiter";
import User from "./User";

export default function Login() {
  const recruiters = JSON.parse(localStorage.getItem("recruiters"));
  const users = JSON.parse(localStorage.getItem("users"));

  console.log(users);
  
  const navigate = useNavigate();
  const [loggedInuser, setLoggedInuser] = useState(
    JSON.parse(localStorage.getItem("loggedinUser")) || "guest",
  );
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  function logoutHandler() {
    localStorage.removeItem("loggedinUser");
    console.log(JSON.parse(localStorage.getItem("loggedinUser")));
    
    setLoggedInuser("guest");
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.role == "employer") {
      const isverfied = recruiters.filter((employer) => {
        return (
          employer.fullName == formData.name &&
          employer.password == formData.password
        );
      });

      if (isverfied.length > 0) {
        alert("loggedin successfully ");
        localStorage.setItem("loggedinUser", JSON.stringify(formData));
        setLoggedInuser(JSON.parse(localStorage.getItem("loggedinUser")));
        navigate("/Recruiter");
      } else {
        alert("invalid credentials ");
      }
    } else {
      const isverfied = users.filter((employer) => {
        return (
          employer.fullName == formData.name &&
          employer.password == formData.password
        );
      });
      if (isverfied.length > 0) {
        alert("loggedin successfully ");
        localStorage.setItem("loggedinUser", JSON.stringify(formData));
        setLoggedInuser(JSON.parse(localStorage.getItem("loggedinUser")));
        navigate("/user");
      } else {
        alert("invalid credentials ");
      }
    }
  }
  return (
    <div>
   
      {loggedInuser != "guest" ? (
        <div>{loggedInuser.role == "employer" ? 
       <div>
           welcome , {loggedInuser.name || loggedInuser}
      {
        loggedInuser.name &&
    <button onClick={logoutHandler}>logout</button>
      }
  
 <Recrruiter />
        </div>
          :
          <div>
               welcome , {loggedInuser.name || loggedInuser}
      {
        loggedInuser.name &&
    <button onClick={logoutHandler}>logout</button>
      }
  
<User />
            </div>
          }</div>
      ) : (
        <form>
          <input
            type="text"
            name="name"
            id=""
            placeholder="name..."
            onChange={handleChange}
          />
          <input
            type="text"
            name="password"
            id=""
            placeholder="password.."
            onChange={handleChange}
          />
          <input
            type="text"
            name="role"
            id=""
            placeholder="role..."
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>submit</button>
        </form>
      )}
    </div>
  );
}

//32
