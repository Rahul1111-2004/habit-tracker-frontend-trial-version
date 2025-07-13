import {Link} from 'react-router-dom'
function Login()
{
   return(<div className="login-container">
           <h3>Login</h3>
           <label>Username</label>
           <input type="text"  placeholder="Enter UserName"/><br/><br/>
           <label>Password</label>
           <input type="password" placeholder="Enter Password"/><br/><br/>
           <button type="submit">login</button>
           <p>Register a new user? <Link to="/signup">signup</Link></p>
   </div>);
}
export default Login
