import { useState, useEffect } from "react";

export const FetchAndDisplayImage = () => {
  let [data,setData] = useState([]);



    const apiURL = "https://derpibooru.org/api/v1/json/search/images?q=safe,spitfire,solo,score.gte%3A300&sf=random";

useEffect(() => {

      fetch(apiURL)
        .then((res) =>
          res.json())
   
        .then((response) => {
          console.log(response);
          setData(response.images[0].view_url);
        })},[])
               // const imgURL = receivedImage.images[0].view_url;
              
                if(data !== []){
                return (<div><img src={data} height={window.innerHeight} alt="Spib" /></div>)
                }
              }
        
    

  