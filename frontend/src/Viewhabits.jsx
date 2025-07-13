import react,{useEffect,useState} from 'react'
import Oops from './assets/oops.png'
function Viewhabits()
{
    const [habits,setHabits]=useState([]);

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
                  setHabits([]);
             }
            }
            catch(error)
            {
                   console.error("Error reading habits from localStorage",error);
                   setHabits([]);
            }
      }
     

   },[]);
   const handleDelete=(index)=>
   {
     const filteredhabits=habits.filter((_,i)=>i!==index);
     localStorage.setItem("habits", JSON.stringify(filteredhabits));
     setHabits(filteredhabits);

   }
    return(
        <div className='view-habits-container'>
        <h2>Your Habits</h2>
         {habits.length==0?(<div className='nohabits'>
            <img src={Oops}/>
            <p>No Habits added</p>
         </div>):(
        <ul>
            {habits.map((habit,index)=><li key={index}> <p className="habitname"><b>{habit.habitname}</b></p>
            <span className="habitdes">{habit.habitd}</span>
            <span className='habitDate'>{habit.date.split("T")[0]}</span>
            <button onClick={()=>handleDelete(index)}>delete</button></li>)}
        </ul>)}
        </div>

    );
}
export default Viewhabits