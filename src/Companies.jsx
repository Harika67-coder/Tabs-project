import React from 'react'

const Companies = ({jobs,setCurrentState,currentState}) => {
  /*const Company=jobs.map((job)=>job.company)*/
  return (
     <div className='companies'>
      {
       jobs.map((job,index)=>{
          return (<p className={index===currentState?'company company-act':'company'} style={{cursor:"pointer"}}onClick={()=>{
            setCurrentState(index);
          }}>{job.company}</p>
                 )
        })
      }
     </div>
  )
}

export default Companies