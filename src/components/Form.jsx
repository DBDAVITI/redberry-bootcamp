import {Formik } from 'formik';
import PersInfo from './PersInfo';
import * as Yup from 'yup';
import {useNavigate} from 'react-router-dom';



function Form ({positionData , teamsData ,setStep , step}) {
    const navigate = useNavigate();
    const geo = /(?=.*[ა-ჰ])/;
    const redEmail = "redberry.ge";
    const yupValidationSchema = Yup.object({
        name: Yup.string("მინიმუმ 2 სიმბოლო, ქართული ასოეები")
            .min(2, "მინიმუმ 2 სიმბოლო, ქართული ასოეები")
            .required("სავალდებულო")
            .matches(geo, "მინიმუმ 2 სიმბოლო, ქართული ასოეები"),
        surname: Yup.string("მინიმუმ 2 სიმბოლო, ქართული ასოეები")
            .min(2, "მინიმუმ 2 სიმბოლო, ქართული ასოეები")
            .required("სავალდებულო")
            .matches(geo, "მინიმუმ 2 სიმბოლო, ქართული ასოეები"),
        teams: Yup.string().required(),
        position: Yup.string().required(),
        email: Yup.string()
            .required("სავალდებულო")
            .email("უნდა მთავრდებოდეს @redberry.ge-ით")
            .matches(redEmail, "უნდა მთავრდებოდეს @redberry.ge-ით"),
        phone_number: Yup.string()
            .required("სავალდებულო")
            .matches(/(\+9955)/, "უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს")
            .min(13, "უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს")
            .max(13, "უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს"),
    });

const FIRST_FORM_VALUES = "firstFormValues";
const localValues = localStorage.getItem(FIRST_FORM_VALUES);


    return (
        <Formik
            initialValues={{
              name: localValues ? JSON.parse(localValues).name : "",
              surname: localValues ? JSON.parse(localValues).surname : "",
              teams: localValues ? JSON.parse(localValues).teams : "",
              position: localValues ? JSON.parse(localValues).position : "",
              phone_number: localValues
                ? JSON.parse(localValues).phone_number
                : "",
              email: localValues ? JSON.parse(localValues).email : "",
            }}
            validationSchema={yupValidationSchema}
            onSubmit={(values) => {
              setStep(false)
              navigate('lastpage')

            }}
          >
            {({ values, errors,touched, handleSubmit, handleChange, handleBlur}) => {
              localStorage.setItem(FIRST_FORM_VALUES, JSON.stringify(values));
              return (
                <PersInfo 
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleSubmit={handleSubmit}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  teamsData={teamsData}
                  positionData={positionData}
                  step={step}
             />
              );
            }}
          </Formik>
    )
}
export default Form;