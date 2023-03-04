import {TextField} from '@mui/material'
import { useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const Register = () => {
    let [name, setName] = useState("")
    let [password,setPassword] = useState("")
    let [email, setEmail] = useState("")
    let navigate = useNavigate();
     
    useEffect ( () => {
    },[])

    setName = (e)  => {
    name = e.target.value
    }

setPassword = (e) => {
    password = e.target.value
   
}
    const formData = async (event) => {
        event.preventDefault()
        let form=event.target
        const data = {};
        for (let i=0; i < form.elements.length; i++) {
            const elem = form.elements[i];
            data[elem.name] = elem.value
        }
        console.log(data)
        console.log('calling api');
        let res = await axios.post("http://localhost:3000/users/user",data);
        console.log('res',res);
        if (res.statusText === "Created"){
            navigate("/login")
        }
    }
    return(
        <div>
                 <form onSubmit={formData}>
              <TextField id="name" label="Filled" type="text" name='name' variant="filled"  onChange={setName}/>
                 <br/>
                <TextField id="password" label="Filled" type="password" name='password' variant="filled"  onChange={setPassword}/>
                   <br/>
                   <TextField id="email" label="Filled" type="email" name='email' variant="filled"  onChange={setEmail}/>
                <br/>
              <button type='submit'>
                Submit
               </button>
                 </form>
              </div>
    )
}
export default Register