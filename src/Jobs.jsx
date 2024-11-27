import React from 'react'
import Duties from './Duties';
const Jobs = ({jobs,currentState}) => {
  console.log(currentState);
  const {title,dates,company,duties}=jobs[currentState];

  return <article>
  {
    <div style={{marginTop:"80px",marginLeft:"4rem"}}>
      <h3>{title}</h3>
      <div style={{marginTop:"10px",backgroundColor:"var( --grey-300)",width:"5rem",color:"var( --grey-600)",paddingTop:"0.4rem",textAlign:"center",paddingBottom:"0.4rem",borderRadius:"4px"}}>{company}</div>
      <p style={{color:"var( --grey-400)",marginTop:"10px"}}>{dates}</p>
      <Duties duties={duties}/>
    </div>
  }  
  </article>
}

export default Jobs