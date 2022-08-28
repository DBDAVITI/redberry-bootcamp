import {Link} from 'react-router-dom';
import React from 'react';
import axios from 'axios';



function ListPage () {

    React.useEffect(() => {
      async function fetchData () {
        await  axios.get("https://pcfy.redberryinternship.ge/api/laptops?token=538acf2d35cc95932ff06e179fb4aec9")
        .then((res)=> console.log(res))
      }
      fetchData()
    },[])

    return (
        <>
       <Link to='/'> <img className="btnimg" src="btn.png" alt="btn"/> </Link>

        <div className="container">
            

           
        </div>
        </>
    )
}
export default ListPage;