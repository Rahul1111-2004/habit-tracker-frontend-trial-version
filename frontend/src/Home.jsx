import {Link} from "react-router-dom"
import Homes from "./assets/home.jpg"
 function Home(){
     return(
        <div className="home-container">
              <img src={Homes}/>
              <h2>Welcome to habit tracker application!!</h2>
              <p>Track and maintain your habits</p>
              <Link to="/signup"> <button>get started</button></Link>
              
        </div>
     );
 }
 export default Home