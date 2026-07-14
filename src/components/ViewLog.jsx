import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewLog = () => {
    const[data,changeData]=useState([])
    const fetchData = () =>{
        axios.get("http://localhost:3000/view-logs").then(

(response)=>{
    changeData(response.data)
}

        ).catch(

(error)=>{
    console.log(error)
}
)
    }
    useEffect(
        ()=>{
            fetchData()
        }
    )
  return (
    <div>

<table class="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Department</th>
                    <th scope="col">Semester</th>
                    <th scope="col">deestination</th>
                    <th scope="col">Course</th>
                    <th scope="col">SystemNumber</th>
                    <th scope="col">LoginTime</th>
                    <th scope="col">LogoutTime</th>
                    <th scope="col">Date</th>
                    
                </tr>
            </thead>
            <tbody>
                {data.map(
                    (value,index)=>{
                        return(
                             <tr>
                                
                                <td>{value.name}</td>
                                <td>{value.dept}</td>
                                <td>{value.sem}</td>
                                <td>{value.course}</td>
                                <td>{value.systemNumber}</td>
                                <td>{value.loginTime}</td>
                                <td>{value.logoutTime}</td>
                                <td>{value.date}</td>

                            </tr>
                        )
                    }
                    )}
            </tbody>
        </table>
    </div>
  )
}

export default ViewLog