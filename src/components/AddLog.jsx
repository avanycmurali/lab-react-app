import axios from 'axios'
import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const AddLog = () => {
    const[input,changeInput]=useState(
        {
        name:"",
        dept:"",
        sem:"",
        course:"",
        systemNumber:"",
        loginTime:"",
        logoutTime:"",
        date:""
        }
    )
    const inputHandler=()=>{
        changeInput({...input,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(input)
        axios.post("http://localhost:3000/lab-entry",input).then(

            (response)=>{
                alert("lab login added")
            }
        ).catch(
            (error)=>{
                console.error("error adding login",error)
                alert("failed to add login")
            }
        )

    }
  return (
    <div>
<NavigationBar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row g-4">
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Name</label>
<input type="text" className="form-control"name="name"value={input.name}onChange={inputHandler} />

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Department</label>
<input type="text" className="form-control" name="dept"value={input.dept}onChange={inputHandler}/>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Semester</label>
<input type="text" className="form-control" name="sem"value={input.sem}onChange={inputHandler}/>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Course</label>
<input type="text" className="form-control" name="course"value={input.course}onChange={inputHandler}/>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">SystemNumber</label>
<input type="text" className="form-control" name="systemNumber"value={input.systemNumber}onChange={inputHandler}/>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">LoginTime</label>
<input type="text" className="form-control" name="loginTime"value={input.loginTime}onChange={inputHandler}/>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">LogoutTime</label>
<input type="text" className="form-control" name="logoutTime"value={input.logoutTime}onChange={inputHandler}/>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form-label">Date</label>
<input type="text" className="form-control"name="date"value={input.date}onChange={inputHandler} />

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<button className="btn btn-success"onClick={readValue}>ADD</button>

    </div>
</div>

        </div>
    </div>
</div>

    </div>
  )
}

export default AddLog