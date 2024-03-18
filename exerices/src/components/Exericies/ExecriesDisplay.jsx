import { useEffect, useRef, useState } from "react";
import ExereciseCard from "./ExecrisesCard";
function ExecrisesDisplay(){

    //to store all data at once 
    const [storeAllData , setAllstoreData] = useState([]);

    const [showAllData , setShowAllData]  = useState([]);
    {/* Api Data Fetch */}
    const URL = 'https://exercisedb.p.rapidapi.com/exercises?limit=1325';
    const options = {
        method: 'GET',
          headers: {
            'X-RapidAPI-Key': '420f80fab0mshe404d58ebeec317p173d3fjsndbaad82e0aa5',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        }
      }

      useEffect(()=>{
        if(localStorage.getItem("allData") == undefined){
          const reciveAllData = fetch(URL,options).then((response)=> response.json()).then((data) => {
            setAllstoreData(data);
            localStorage.setItem("allData" , JSON.stringify(data));
            console.log(data)
            const storeDisplayData = data.slice(0 , 10);
            setShowAllData(storeDisplayData);
          })
        }
        else{
          const recivedData = localStorage.getItem("allData");
          setAllstoreData(JSON.parse(recivedData));
          const displayData = JSON.parse(recivedData).slice(0,12);
          setShowAllData(displayData);
        }
           
            // setAllstoreData(reciveAllData
      } , [])
      

      function clickHandler(){
        setShowAllData((previous)=>{
           const prevoisDataLenget  = (previous.length);
           console.log(typeof prevoisDataLenget)
          const data =  storeAllData.slice(0 , (prevoisDataLenget+12));
          return data;
        })
      }

      function inputHandler(e){
         const reciveInputValue = (e.target.value);
        let filteredData = showAllData.filter((items , index)=>{
          if(items.bodyPart.toLocaleLowerCase().includes(reciveInputValue)){
              return true;
          }
        })
        setShowAllData(filteredData);
      }

      //using useref

      const style = useRef(0);
    return(
        <>
        <div>
            <div className="inputBox">
              <input type="text" placeholder="Search workuots for body Parts" onChange={(e)=>{
                  inputHandler(e);
              }}/>
            </div>
            <div className="exericesList">
               {

                  showAllData.map((data , index)=>{
                   return(
                    
                     <ExereciseCard image = {data.gifUrl
                    } name = {data.name} target = {data.target} 
                    bodyPart
                     = {data.
                        bodyPart
                        } key = {index}/>
                   )
                })
               
               }
            </div>

            <div className="loadeButton">
               <button ref={style} onClick={()=>{
                clickHandler();
                style.current.innerText = "Click Me For More"
               }}>Load More</button>
            </div>
        </div>
        </>
    )
}
export default ExecrisesDisplay;