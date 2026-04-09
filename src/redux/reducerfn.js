// import { createSlice } from "@reduxjs/toolkit";
// import initialState from "./initialstate";

// const jobSlice=  createSlice({
//     name:"jobs",
//     initialState:initialState,
//     reducers:{

//      register:(state, action)=>{
//         console.log(action);
        
//         if(action.payload.role== "employer"){
//              // page 
             
//              //local storage -> unless explicitly 
// localStorage.setItem("recruiters", JSON.stringify([...JSON.parse((localStorage.getItem("recruiters")|| [])), action.payload.data]))

//  return {
//         ...state,
//         recruiters:[...state.recruiters, action.payload.data]
//      }
//         }
//         else if(action.payload.role=="candidate"){
//         localStorage.setItem("users", JSON.stringify([...JSON.parse((localStorage.getItem("users"))|| []), action.payload.data]))    
//  return {
//         ...state,
//         users: [...state.users, action.payload.data]

//      }
//         }
    
//      },

//      login:(state, action)=>{

//      },
//      addJob:(state, action)=>{

//      },
//      applyJob:(state, action)=>{

//      },
//      saveJob:(state, action)=>{

//      },
//      deleteJob:(state, action)=>{

//      }
//     }
//  })

// export const {register,login,addJob,applyJob,saveJob,deleteJob}=  jobSlice.actions
//  export default jobSlice.reducer 





import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialstate";

const jobSlice = createSlice({
  name: "jobs",
  initialState: initialState,
  reducers: {

    register: (state, action) => {
      console.log(action);

      if (action.payload.role === "employer") {

        const existingRecruiters = JSON.parse(localStorage.getItem("recruiters")) || [];

        localStorage.setItem(
          "recruiters",
          JSON.stringify([...existingRecruiters, action.payload.data])
        );

        return {
          ...state,
          recruiters: [...state.recruiters, action.payload.data]
        };

      } else if (action.payload.role === "candidate") {

        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

        localStorage.setItem(
          "users",
          JSON.stringify([...existingUsers, action.payload.data])
        );

        return {
          ...state,
          users: [...state.users, action.payload.data]
        };
      }
    },

    login: (state, action) => {

    },

    addJob: (state, action) => {
      console.log(action.payload);
let id=1

              const existingJobs = JSON.parse(localStorage.getItem("jobs")) || [];
        localStorage.setItem(
          "jobs",
          JSON.stringify([...existingJobs, {...action.payload, id:id}])
        );
console.log(existingJobs);
id++
return {
  ...state,
  jobs:[...state.jobs, action.payload]
}
    },


    applyJob: (state, action) => {

    },

    saveJob: (state, action) => {

    },

    deleteJob: (state, action) => {

    }
  }
});

export const { register, login, addJob, applyJob, saveJob, deleteJob } = jobSlice.actions;
export default jobSlice.reducer;