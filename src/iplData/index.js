import { useEffect, useState } from "react"
import axios from "axios"
import Child from "../child"
const IplData = () => {
    let [ipl, setIpl] = useState([])
    useEffect(() => {
        async function getData(){
            let res =await axios.get("https://apis.ccbp.in/ipl")
            console.log(res,"d1")
           let data = res.data.teams
            // let data = res.data.teams.map(e => ({
            //     id:e.id,
            //     name:e.name,
            //     teamImageUrl:e.team_image_url

            // }))
            // eslint-disable-next-line react-hooks/exhaustive-deps
            setIpl(ipl = data)
            console.log(data,"res11111")
            console.log(ipl)
        }
        getData()

    },[])
 
    return(
        <Child prop={ipl}/>
       
    )
}
export default IplData