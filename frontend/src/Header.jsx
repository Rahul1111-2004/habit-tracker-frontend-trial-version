import {Link} from 'react-router-dom'
function Header()
{
    return(
        <div className="header-container">
            <h1 className="title">Habit-Tracker</h1>
           
                <ul className="navbar">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                     <li>
                        <Link to="/addhabits">Add Habits</Link>
                    </li>
                     <li>
                        <Link to="/viewhabits">View Habits</Link>
                    </li>
                     <li>
                        <Link to="/login"><button>Login</button></Link>
                    </li>
                     <li>
                        <Link to="/signup"><button>Signup</button></Link>
                    </li>
                    
                </ul>
           
        </div>
    );
}
export default Header