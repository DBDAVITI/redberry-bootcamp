


function PersInfo ({values,touched ,errors ,handleBlur , handleSubmit ,handleChange, positionData, teamsData ,step}){
    

  return (
        <form className="content-container" onSubmit={handleSubmit}>
        <div className="info">
          <div>
            <p className={touched.name && errors.name ? "errorname" : null}>სახელი</p>
            <input
              className={touched.name && errors.name ? "errorinp" : "inpnorm"}
              name="name"
              onChange={handleChange}
              value={values.name}
              type="text"
              onBlur={handleBlur}
            />
            {touched.name && errors.name ? (
              <p className="errorname">{errors.name}</p>
            ) : (
              <p className="lab">
                მინიმუმ 2 სიმბოლო, ქართული ასოეები
              </p>
            )}
          </div>
          <div>
            <p className={touched.surname && errors.surname ? "errorname" : null}>
              გვარი
            </p>
            <input
              className={touched.surname && errors.surname ? "errorinp" : "inpnorm"}
              type="text"
              name="surname"
              onChange={handleChange}
              value={values.surname}
              onBlur={handleBlur}
            />
            {touched.surname && errors.surname ? (
              <p className="errorname">{errors.surname}</p>
            ) : (
              <p className="lab">
                მინიმუმ 2 სიმბოლო, ქართული ასოეები
              </p>
            )}
          </div>
        </div>

        <div className="select-info">
          <select
            className={touched.teams && errors.teams ? "error-select" : "select"}
            name="teams"
            value={values.teams}
            onChange={handleChange}
            onBlur={handleBlur}
          >
               <option value='' disabled selected hidden>თიმი</option>
            {teamsData.map((teams) => (
              <option key={teams.id}>{teams.name}</option>
            ))}
          </select>
        </div>
        <div className="select-info">
          <select 
            disabled={!values.teams}
            className={touched.position && errors.position ? "error-select" : "select"}
            name="position"
            value={values.position}
            onChange={handleChange}
            onBlur={handleBlur}
          >
               <option value='' disabled selected hidden>პოზიცია</option>
            {positionData.map((position) => (
              <option key={position.id}>{position.name}</option>
            ))}
          </select>
        </div>
        <div className="l-info">
          <div>
            <label className={touched.email && errors.email ? "errorname" : null}>
              მეილი
            </label>
            <input
              className={touched.email && 
                errors.email ? "error-inp-email" : "inpemail"
              }
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email ? (
              <p className="error-em-ph">{errors.email}</p>
            ) : (
              <p>უნდა მთავრდებოდეს @redberry.ge-ით</p>
            )}
          </div>
          <div>
            <label
              className={touched.phone_number && errors.phone_number ? "errorname" : null}
            >
              ტელეფონის ნომერი
            </label>
            <input
              className={
                  touched.phone_number && 
                errors.phone_number ? "error-inp-email" : "inpemail"
              }
              type="text"
              name="phone_number"
              onChange={handleChange}
              value={values.phone_number}
              onBlur={handleBlur}
            />
            {errors.phone_number ? (
              <p className="error-em-ph">{touched.phone_number && errors.phone_number}</p>
            ) : (
              <p>უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს</p>
            )}
          </div>
        </div>
        <button type="submit">შემდეგი</button>
        
      </form>
    )
}
export default PersInfo;