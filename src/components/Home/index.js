import { useEffect } from "react";
import axios from "axios";

function Home () {
    //const [data, setData] = useState(null)
    //const [loading, setLoading] = useState(true)

    useEffect(()=>{
        axios.get('"http://localhost:5000/cars"')
        .then(response => console.log(response))
        //setLoading(false)
    },[])


    return(
    <>
   
    
    </>
     )

}

export default Home;