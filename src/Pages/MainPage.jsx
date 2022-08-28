import {Link} from 'react-router-dom'
function MainPage () {
    return (
        <div className="App">
      <div className="divLogo">
       <img className="imgLogo" src="/logo.png" alt="logo"/>
      </div>
      <div>
       <img className="imgMain" src="/main.jpg" alt="main"/>
      </div>
       <Link to='addpage'><button className="btn1">ჩანაწერის დამატება</button></Link> <br></br>
       <Link to='listpage'><button className="btn1">ჩანაწერების სია</button></Link>

    </div>
    )
}
export default MainPage;