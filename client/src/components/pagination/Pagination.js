import React from "react";

function Pagination(props){
   // console.log(props)
 const pageNumber=[];
 const numberpage=Math.ceil(props.pokemones.length/props.pokemonsPerPage);
 for (let i=1;i<=numberpage;i++){
    pageNumber.push(i)
 }
 
return(
  <nav>
     
        {pageNumber.map(n=>(
        
      <button key={n} onClick={()=>props.pokePage(n)}>{n}</button>
     
        ))}
    
  </nav>

)

}
export default Pagination