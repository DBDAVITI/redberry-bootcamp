import {Link} from 'react-router-dom';
import React from 'react';
import axios from 'axios';



function AddPage () {
    const [teamsData , setTeamsData] = React.useState([]);
    const [positionData , setPositionData] = React.useState([]);
    const [teamValue , setTeamValue] = React.useState('');
    const [positionValue , setPositionValue] = React.useState('');
    const [name , setName] = React.useState('');
    const [surname , setSurname] = React.useState('');
    const [number , setNumber] = React.useState('')
    const [mail , setMail] = React.useState('')

    const info = [{
        name: name,
        surname: surname,
        team: teamValue,
        position: positionValue, 
        mail: mail,
        number: number,
    }]


    React.useEffect(() => {
      async function fetchData () {
        await  axios.get("https://pcfy.redberryinternship.ge/api/teams").then((res) => setTeamsData(res.data.data))
        await  axios.get("https://pcfy.redberryinternship.ge/api/positions").then((res) => setPositionData(res.data.data))
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
                <div className='content-container'>
                    <div className='info'>
                     <div>
                     <p>სახელი</p>
                     <input onChange={(e)=> setName(e.target.value)} type='text' />
                     <p className='lab'>მინიმუმ 2 სიმბოლო, ქართული ასოეები</p>
                     </div>
                     <div>
                     <p>გვარი</p>
                     <input onChange={(e)=> setSurname(e.target.value)}  type='text' />
                     <p className='lab'>მინიმუმ 2 სიმბოლო, ქართული ასოეები</p>
                     </div>
                    </div>

                    <div className='select-info'>
                     <select onChange={(e)=> setTeamValue(e.target.value)}>
                        <option disabled selected>ტიმი</option>
                        {teamsData.map((teams ) => (<option key={teams.id}>{teams.name}</option>))}
                     </select>
                    </div>
                    <div className='select-info'>
                     <select onChange={(e)=> setPositionValue(e.target.value)}>
                        {positionData.map((position) => (<option key={position.id}>{position.name}</option>))}
                     </select>
                    </div>
                    <div className='l-info'>
                        <div>
                            <label>მეილი</label>
                            <input  onChange={(e)=> setMail(e.target.value)} type='text'/>
                            <p>უნდა მთავრდებოდეს @redberry.ge-ით</p>
                        </div>
                        <div>
                            <label>ტელეფონის ნომერი</label>
                            <input  onChange={(e)=> setNumber(e.target.value)} type='text'/>
                            <p>უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს</p>
                        </div>
                    </div>
                    <button onClick={() => console.log(info) } >შემდეგი</button>

                </div>
                <div className='red-logo' >
                <img src='redberry-logo.png' alt='redberry-logo'/>
                </div>
            </div>
        </div>
        </>
    )
}
export default AddPage;