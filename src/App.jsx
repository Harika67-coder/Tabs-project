import { useEffect,useState } from "react";
import Companies from "./Companies";
import Jobs from "./Jobs";
const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {
    const [jobs,setJobs]=useState([]);
    const  [currentState,setCurrentState]=useState(0);
    const [isLoading,setIsLoading]=useState(true);
    const fetchUrl=async()=>{
      const res=await fetch(url);
      const newJobs=await res.json();
      setJobs(newJobs);
      setIsLoading(false);
    }
    useEffect(()=>{
      fetchUrl();
      
    },[]);
    
    if(isLoading)
    {
      return <section >
        <div style={{width: "100px",
        height: "100px",
        borderColor: "var(--grey-400)",
        borderWidth:"5px",
        borderStyle:"solid",
        borderRadius: "50px",
        animation: "spinner 0.6s linear infinite",
        borderTopColor:"green",
        margin: "0 auto",
        marginTop:"80px"}}></div>
        
      </section>
    }
    return <main>
      <section className='all'>
         <Companies jobs={jobs} setCurrentState={setCurrentState} currentState={currentState}/>
         <Jobs jobs={jobs} currentState={currentState}/>
      </section>
    </main>
};
export default App;
