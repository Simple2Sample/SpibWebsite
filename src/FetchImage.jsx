import { useState, useEffect } from "react";

const apiURL = "https://derpibooru.org/api/v1/json/search/images?q=safe,-pregnancy,-diaper,-artist:mykegreywolf,spitfire,solo,score.gte%3A150&sf=random";

export const FetchAndDisplayImage = () => {
  const [data, setData] = useState("");
  const [ID, setID] = useState("");

  const openInNewTab = () => {
    window.open("https://derpibooru.org/images/" + ID, '_blank', 'noopener,noreferrer');
  }

  useEffect(() => {
    fetch(apiURL)
    .then((res) =>
      res.json())
    .then((response) => {
      console.log(response);
      setData(response.images[0].view_url);
      setID(response.images[0].id);
    })
  }, [])

  if(data !== ""){
    return (<div><img src={data} height={window.innerHeight} onClick={() => openInNewTab()} /></div>)
  }
}
