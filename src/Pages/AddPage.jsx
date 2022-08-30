import {Link} from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import PersForm from '../components/PersForm';


function AddPage () {
    const [teamsData , setTeamsData] = React.useState([]);
    const [positionData , setPositionData] = React.useState([]);
    const geo = /(?=.*[ა-ჰ])/;
    const redEmail ='redberry.ge';
    const formik = useFormik({
        initialValues: {
            name: "",
            surname: "",
            teams: "",
            position: "",
            phone_number:"",
            email:"",
        },
        onSubmit: (values)=>{
            console.log(values)
        },
        validationSchema: Yup.object({
            name: Yup.string('მინიმუმ 2 სიმბოლო, ქართული ასოეები')
                .min(2, 'მინიმუმ 2 სიმბოლო, ქართული ასოეები')
                .required('მინიმუმ 2 სიმბოლო, ქართული ასოეები')
                .matches(geo, 'მინიმუმ 2 სიმბოლო, ქართული ასოეები'),
            surname: Yup.string('მინიმუმ 2 სიმბოლო, ქართული ასოეები')
                .min(2, 'მინიმუმ 2 სიმბოლო, ქართული ასოეები')
                .required('მინიმუმ 2 სიმბოლო, ქართული ასოეები')
                .matches(geo, 'მინიმუმ 2 სიმბოლო, ქართული ასოეები'),
            teams: Yup.string().required(),
            position: Yup.string().required(),
            email: Yup.string()
                .required('უნდა მთავრდებოდეს @redberry.ge-ით')
                .email('უნდა მთავრდებოდეს @redberry.ge-ით')
                .matches(redEmail , 'უნდა მთავრდებოდეს @redberry.ge-ით'),
            phone_number: Yup.string()
            .required('უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს')
            .matches(/(\+9955)/ , 'უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს')
            .min(13,'უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს')
            .max(13,'უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს')
        }),

    });
  
    React.useEffect(() => {
     function fetchData () {
        axios.get("https://pcfy.redberryinternship.ge/api/teams").then((res) => setTeamsData(res.data.data))
        axios.get("https://pcfy.redberryinternship.ge/api/positions").then((res) => setPositionData(res.data.data))
      }
      fetchData()
    },[])

    return (
        <>
       <Link to='/'> <img className="btnimg" src="btn.png" alt="btn"/> </Link>

        <div className="container">
            <div className="header-top">
                <span>თანამშრომლის ინფო</span>
                <span>ლეპტოპის მახასითებლები</span><br></br>
                <img src="line.png" alt="line" />
            </div>

            <div className="content">
              <PersForm
                formik={formik}
                teamsData={teamsData}
                positionData={positionData}
              />
                <div className='red-logo' >
                <img src='redberry-logo.png' alt='redberry-logo'/>
                </div>
            </div>
        </div>
        </>
    )
}
export default AddPage;