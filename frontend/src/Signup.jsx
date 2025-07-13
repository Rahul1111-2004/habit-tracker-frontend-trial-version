import { Link } from "react-router-dom";

function Signup()
{
    return(
        <div className="signup-container">
              <h3>Signup</h3>
              <label>Name</label>
              <input type="text" placeholder="enter the name"/><br/>
              <label>
                Email
              </label>
              <input type="email" placeholder="enter email"/><br/>
              <label>Password</label>
              <input type="password" placeholder="enter password"/><br/>
              <label>Confirm Password</label>
              <input type="password" placeholder="confirm password"/><br/>
              <button type="submit">signup</button>
              <p>already a user? <Link to="/login">Login</Link></p>
        </div>
    );
}
export default Signup