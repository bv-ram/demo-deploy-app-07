// import React, { useState , useEffect} from 'react';
// import {TextField} from '@mui/material'
// import axios from 'axios';
// import Cookies from 'js-cookie'
// function Counter() {
// let [count, setCount] = useState(0)
// let [name, setName] = useState("")
// let [password,setPassword] = useState("")
// useEffect(() => {
//    const res = axios.get("https://apis.ccbp.in/ipl")
//    console.log(res)
   
// },[])

// setName = (e)  => {
//     name = e.target.value
    
// }
// setPassword = (e) => {
//     password = e.target.value
// }
// const formData = (e) => {
//     e.preventDefault()
//     let form=e.target
//     const data = {};
//     for (let i=0; i < form.elements.length; i++) {
//         const elem = form.elements[i];
//         data[elem.name] = elem.value
//     }
//    console.log(data)
// }
//     return (
//      <div>
//         <p>clicked {count} me</p>
//         <button onClick={() => setCount(count + 1)}>
//             Click me!
//         </button>
//         <div>
//           <form onSubmit={formData}>
//             <TextField id="filled-basic" label="Filled" type="text" name='name' variant="filled"  onChange={setName}/>
//             <br/>
//             <TextField id="filled-basic" label="Filled" type="password" name='password' variant="filled"  onChange={setPassword}/>
//             <br/>
//             <button type='submit'>Submit</button>
//             </form>
//         </div>
//      </div>
//     )
// }
// export default Counter