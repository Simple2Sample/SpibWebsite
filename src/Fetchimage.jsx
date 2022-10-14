import { useState, useEffect } from "react";

export const FetchAndDisplayImage = () => {
  let [data,setData] = useState([]);
  let [ID,setID] = useState([]);



    const apiURL = "https://derpibooru.org/api/v1/json/search/images?q=safe,-pregnancy,-diaper,-artist:mykegreywolf,spitfire,solo,score.gte%3A150&sf=random";
    const openInNewTab = url => {
      window.open(url, '_blank', 'noopener,noreferrer');}
useEffect(() => {

      fetch(apiURL)
        .then((res) =>
          res.json())
   
        .then((response) => {
          console.log(response);
          setData(response.images[0].view_url);
          setID(response.images[0].id);
        })},[])
               // const imgURL = receivedImage.images[0].view_url;
              
                if(data !== []){
                return (<div><img src={data} height={window.innerHeight} onClick={() => openInNewTab("https://derpibooru.org/images/"+ID)} /></div>)
                }
              }
        
    

  