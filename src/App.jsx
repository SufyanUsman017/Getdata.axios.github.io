import React, { useState } from 'react'
import axios from 'axios';
import { Route, Routes, useNavigate } from 'react-router-dom';


function App() {

const [inputName,setInputName] = useState('')
const [inputid,setInputId] = useState('')

const navigate = useNavigate()
const login = ()=>  {
  axios.get('https://api.github.com/users')
  .then(function (res) {
    // handle success
    console.log(res.data);
    

      const Found =  res.data.find((items)=>{ return items.inputName === inputName  && items.inputid === inputid  })

    if(Found){
      alert("User Login")
      navigate("page")
    }
    else(
      alert('user not registered')
    )

    
    

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}
  return (
    <div>
      
      <div className="input">
        <input type="text" onChange={(e)=>{setInputName(e.target.value)}  } placeholder='enter your name'  />
        <input type="password" onChange={(e)=>{setInputId(e.target.value)}  } placeholder='enter your password'/>
        <button onClick={login} >login</button>
      </div>
    </div>
  )
}

export default App
