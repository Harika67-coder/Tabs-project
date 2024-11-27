import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa';
const Duties = ({duties}) => {
    return <article>
      {
        duties.map((duty)=>{
          return <div style={{display:"grid",gridTemplateColumns:"50px 570px",alignItems:"center",gap:"0.0rem",marginTop:"1rem"}}>
            <FaAngleDoubleRight style={{color:"var( --primary-500)"}}/>
            <p style={{color:"var(--grey-600)",lineHeight:"25px"}}>{duty}</p>
            </div>
        })
      }
    </article>
}

export default Duties