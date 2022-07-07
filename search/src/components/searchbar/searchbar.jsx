import { useEffect, useState } from "react";
import { search_data } from "./searchbardata";

export const Searchbar = ()=>{
    const [data , setData] = useState(search_data)
    const [inputdata , setInputdata] = useState("")

  return(
    <div>
        <div class="in-div" >
            <input type="text" className="input" onChange={(e)=>{
            setInputdata(e.target.value)
        }} placeholder="search country name"/>
            <div className="material-icons"></div>
        </div>
        {inputdata.length !=0?  <div className="dropbox">
        {data.filter((data)=>data.country.includes(inputdata)).map((e)=>(
         <div class="dropdown">
         <p>{e.country}</p>
       </div>
          
         
        ))}
    </div> : null}
        
    </div>
  )
}



