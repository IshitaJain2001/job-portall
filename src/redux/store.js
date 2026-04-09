import { configureStore } from "@reduxjs/toolkit";
import jobs from "./reducerfn"
const store= configureStore({
    reducer:{
jobs: jobs
    }
})


export default store;