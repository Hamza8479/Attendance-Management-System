import React from 'react'
import './Registration.css'
import {useHistory} from 'react-router-dom';


const Registration = () => {
    const history=useHistory();
    return (
        <div className='register'>
            <form action="">
        <h1>Registration</h1>
        <input
          className="inp"
          type="text"
          name=""
          id=""
          placeholder="Name"
        />{" "}
        <br />
        <input
          className="inp"
          type="text"
          name=""
          id=""
          placeholder="Email"
        />{" "}
        <br />
        <input
          className="inp"
          type="text"
          name=""
          id=""
          placeholder="Password"
        />{" "}
        <br /> <br />
        <button onClick={()=> history.push("/")}>Login</button>
        <button onClick={()=> history.push("/registration")}>Register</button>
       
      </form>
        </div>
    )
}

export default Registration

