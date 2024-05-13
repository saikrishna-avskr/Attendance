import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import hasloggedin from "../helper/hasloggedin";

function Professors() {

    const prof = JSON.parse(sessionStorage.getItem("prof"))
    const navigate = useNavigate()
    useEffect(() => {
        if (!hasloggedin) navigate('/professorlogin');
        // console.log(prof)
    }, [navigate])
    
    


    return (
        <div>
            <h1>{prof[0].hod}</h1>
        </div>
    )
}

export default Professors;