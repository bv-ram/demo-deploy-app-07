import axios from "axios"
import { TextField } from "@mui/material"
import { useState } from "react"
import { useNavigate} from "react-router-dom";
const Login = () => {
    let [name,setName] = useState("")
    let [password,setPassword] = useState("")
    let navigate = useNavigate();
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
        let newData={"username":data.name,"password":data.password}
        console.log(newData)
        console.log('calling api');
        let res = await axios.post("http://localhost:3000/users/login",newData);
        console.log(res)
       
        
        if (res.data.ok=== true){
            navigate("/ipldata")
        }
        else {
            navigate("/register")
        }
    }
    return(
        <div>
        <form onSubmit={formData}>
     <TextField id="name" label="Filled" type="text" name='name' variant="filled"  onChange={setName}/>
        <br/>
       <TextField id="password" label="Filled" type="password" name='password' variant="filled"  onChange={setPassword}/>
          <br/>
        

     <button type='submit'>
       Submit
      </button>
        </form>
     </div>
    )
}
export default Login