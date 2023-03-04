import Card from '@mui/material/Card';
import './index.css'
const Child = (props) => {
    const {prop} = props
   
    return(
       
        prop.map((each) => {
            console.log(each,"each")
            return(
                <div >
                    <ul>
                        <li className='bg'>
                            <Card className='card'>
                            <p>{each.id}</p>
                    <h1>{each.name}</h1>
                    <img src={each.team_image_url} alt="team_image_url"/>

                            </Card>
                        
                        </li>
                    </ul>
                   
                </div>
            )
        })

    )
}
export default Child