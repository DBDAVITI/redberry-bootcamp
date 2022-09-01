import styles from './LastsPage.module.scss';
import {Link} from 'react-router-dom';
import axios from 'axios';
import React from 'react';

function LastPage () {
    const [brands , setBrands] = React.useState([])
    const [file, setFile]= React.useState(null)
    React.useEffect(()=>{
        axios.get('https://pcfy.redberryinternship.ge/api/brands').then((res)=> setBrands(res.data.data))
    },[])
    console.log(file)
    

    return(
        <div className={styles.main}>
            <Link to='/addpage'>
            <img className={styles.arrow} src='/btn.png' alt='btn' />
            </Link>
            <div className={styles.header}>
                <span className={styles.sp1}>თანამშრომლის ინფო</span>
                <span>ლეპტოპის მახასითებლები</span><br></br>
                <img src="line.png" alt="line" />
            </div>
            <div className={styles.content}>
                <div className={styles.container}>
                    <form className={styles.form}>
                        <div className={styles.file}>
                        {file ? null : <><p>ჩააგდე ან ატვირთე <br></br>ლეპტოპის ფოტო</p>
                        <input type='file' onChange={(e)=>setFile(e.target.files[0])} name='file' id='file' placeholder='#'></input>
                        <label for='file'>ატვირთე</label></>}
                        </div>
                        <div className={styles.lname}>
                            <label>ლეპტოპის სახელი</label>
                            <div>
                                <input className={styles.inp1} placeholder='HP' type='text'/>
                                <select className={styles.sel}>
                                    {brands.map((brand)=>(
                                        <option>{brand.name}</option>
                                    ))}
                                </select>
                            </div>
                            <p>ლათინური ასოები, ციფრები, !@#$%^&*()_+=</p>
                        </div>
                        <div>
                            <p >hello</p>
                        </div>
                    </form>
                </div>
            </div>
            <img src='redberry-logo.png' alt='redberry logo'/>
        </div>
    )
};

export default LastPage;