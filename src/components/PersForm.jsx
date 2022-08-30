
function PersForm ({ formik , positionData ,teamsData }) {
    return (
        <form className='content-container' onSubmit={formik.handleSubmit}>
        <div className='info'>
         <div>
         <p className={formik.errors.name ? 'errorname' : null} >სახელი</p>
         <input
            className={formik.errors.name ? 'errorinp' : 'inpnorm'} 
            name='name' 
            onChange={formik.handleChange} 
            value={formik.values.name} 
            type='text' />
         {formik.errors.name ? <p className='errorname'>{formik.errors.name}</p> : <p className='lab'>მინიმუმ 2 სიმბოლო, ქართული ასოეები</p>}
         </div>
         <div>
         <p className={formik.errors.surname ? 'errorname' : null}>გვარი</p>
         <input 
            className={formik.errors.surname ? 'errorinp' : 'inpnorm'} 
            type='text'
            name='surname'
            onChange={formik.handleChange}
            value={formik.values.surname} />
         {formik.errors.surname ? <p className='errorname'>{formik.errors.surname}</p> : <p className='lab'>მინიმუმ 2 სიმბოლო, ქართული ასოეები</p>}
         </div>
        </div>

        <div className='select-info'>
         <select className={formik.errors.teams ? 'error-select' : 'select'} name='teams' value={formik.values.teams} onChange={formik.handleChange}>
            {teamsData.map((teams ) => (<option key={teams.id}>{teams.name}</option>))}
         </select>
        </div>
        <div className='select-info'>
         <select className={formik.errors.position ? 'error-select' : 'select'} name='position' value={formik.values.position} onChange={formik.handleChange} >
            {positionData.map((position) => (<option key={position.id}>{position.name}</option>))}
         </select>
        </div>
        <div className='l-info'>
            <div>
                <label className={formik.errors.email ? 'errorname' : null} >მეილი</label>
                <input 
                    className={formik.errors.email ? 'error-inp-email' : 'inpemail'} 
                    type='text'
                    name='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                {formik.errors.email ? <p className='error-em-ph'>{formik.errors.email}</p> : <p>უნდა მთავრდებოდეს @redberry.ge-ით</p>}
            </div>
            <div>
                <label className={formik.errors.phone_number ? 'errorname' : null}>ტელეფონის ნომერი</label>
                <input   
                    className={formik.errors.phone_number ? 'error-inp-email' : 'inpemail'} 
                    type='text'
                    name='phone_number'
                    onChange={formik.handleChange}
                    value={formik.values.phone_number}/>
                    {formik.errors.phone_number ? <p className='error-em-ph'>{formik.errors.phone_number}</p> : <p>უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს</p>}
            </div>
        </div>
        <button type='submit' >შემდეგი</button>

    </form>
    )
};
export default PersForm;