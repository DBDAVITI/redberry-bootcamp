import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";
import * as Yup from "yup";
import Form from "../components/Form";
import LastPage from './LastPage/LastPage';
import {useNavigate} from 'react-router-dom';





function AddPage() {
  const [teamsData, setTeamsData] = React.useState([]);
  const [positionData, setPositionData] = React.useState([]);
  const [step , setStep]= React.useState(true)

  const navigate = useNavigate();

  React.useEffect(() => {
    function fetchData() {
      axios
        .get("https://pcfy.redberryinternship.ge/api/teams")
        .then((res) => setTeamsData(res.data.data));
      axios
        .get("https://pcfy.redberryinternship.ge/api/positions")
        .then((res) => setPositionData(res.data.data));
    }
    fetchData();
  }, []);

  return (
    <>
    
      <Link to="/">
        {" "}
        <img className="btnimg" src="btn.png" alt="btn" />{" "}
      </Link>

      <div className="container">
        <div className="header-top">
          <span>თანამშრომლის ინფო</span>
          <span>ლეპტოპის მახასითებლები</span>
          <br></br>
          <img src="line.png" alt="line" />
        </div>

        <div className="content">
         <Form
            teamsData={teamsData}
            positionData={positionData}
            setStep={setStep}
            step={step}
          />
          <div className="red-logo">
            <img src="redberry-logo.png" alt="redberry-logo" />
          </div>
        </div>
      </div>
    </>
  );
}
export default AddPage;