import Layout from './Layout.jsx'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import Addhabits from './Addhabits.jsx'
import Viewhabits from './Viewhabits.jsx'
import Home from './Home.jsx'


function App() {
 

  return (
   <>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
                <Route path="/addhabits" element={<Addhabits/>}></Route>
                <Route path="/viewhabits" element={<Viewhabits/>}></Route>

            </Route>
         </Routes>
      </BrowserRouter>
   </>
  );
}

export default App
