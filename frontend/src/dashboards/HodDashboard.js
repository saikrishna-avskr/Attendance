import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import hasloggedin from "../helper/hasloggedin";

function HodDashboard() {

    const navigate = useNavigate()
    useEffect(() => {
        if (!hasloggedin) navigate('/professorlogin');
    }, [navigate])

    const handleClick = () =>{
        navigate('/professorDetails')
    }

    return (
        <button onClick={handleClick}>View professor</button>
    )
}

export default HodDashboard;
