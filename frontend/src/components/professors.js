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
          <h3>Professor detils:</h3>
        <div class="table-responsive">
          <table class="table table-striped table-bordered">
            <tr>
              <th scope="col" >Prof code</th>
              <th scope="col" >Name</th>
              <th scope="col" >Class Teacher</th>
              <th scope="col" >Subjects</th>
              <th scope="col" >Attendence</th>
            </tr>
            { for x in prof }
            <tr>
              <th scope="row">{{ x.prof_code }}</th>
              <td>{{ x.prof_name }}</td>
              <td>{{ x.generic_name }}</td>
              <td>{{x.isClass_teacher}}</td>
              <td>{}</td>
              { if x.isHOD }
              <td><a href="#" class="btn btn-warning ">Remove Profile</a></td>
              {else}
              <td><a href="#" class="btn btn-warning disabled">Remove Profile</a></td>
              {endif}
            </tr>
            { endfor }
          </table>
        </div>
      
        </div>
    )
}

export default Professors;
