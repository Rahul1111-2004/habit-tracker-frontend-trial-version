import react,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'


function Addhabits()
{
   const [habits,setHabits]=useState([]);
   /*const [habit,setHabit]=useState({});*/
   const [habitname,setHabitName]=useState("");
   const [habitd,setHabitd]=useState("");
   const [date,setDate]=useState("");
   useEffect(()=>{
      const storedHabits=localStorage.getItem("habits");
      if(storedHabits){
            try{
             const parsedHabits= JSON.parse(storedHabits);
             if(Array.isArray(parsedHabits))
             {
                  setHabits(parsedHabits);
             }
             else{
                  console.warn("saved data is not valid. Reseting habits");
                  localStorage.removeItem("habits");
             }
            }
            catch(error)
            {
                   console.error("Error reading habits from localStorage",error);
                  localStorage.removeItem("habits");
            }
      }
     

   },[]);
   const handleHabits=()=>
   {
      if(habitname.trim()!=="" && habitd.trim()!=="" && date){
      const newHabit={habitname,habitd,date};  
      const updateHabits=[...habits,newHabit];    
      setHabits(updateHabits);
      setHabitName("");
      setHabitd("");
      setDate("");
      localStorage.setItem("habits",JSON.stringify(updateHabits));
      }
   }
   const handleHabitname=(e)=>
   {
      setHabitName(e.target.value);
   }
   const handleHabitd=(e)=>{
      setHabitd(e.target.value);
   }
   const handleDate=(e)=>{
      setDate(e.target.value);
   }
   return(
    <div className="add-habits-container">
          <label>Habit Name</label><br/>
          <input type="text" value={habitname} onChange={(e)=>handleHabitname(e)} placeholder='Enter habit name' /><br/><br/>
          <label>Habit Description</label><br/>
          <textarea type="text" value={habitd} placeholder='Enter Habit Description' onChange={(e)=>handleHabitd(e)}></textarea>
          <br/><br/>
          <label>set reminder</label><br/>
          <input type="datetime-local" onChange={(e)=>handleDate(e)} value={date}/>
          <br/>
          <div className='buttonsadd'>
          <button className='add-button'onClick={handleHabits}>add</button>
          <Link to="/viewhabits"><button className='viewhabitsbutton'>View Habits</button></Link>
          </div>
    </div>
   );
}
export default Addhabits