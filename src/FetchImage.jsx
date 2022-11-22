import { useState, useEffect } from "react";

const apiURL = "https://derpibooru.org/api/v1/json/search/images?q=safe,-pregnancy,-diaper,-artist:mykegreywolf,spitfire,-screencap,-comic,-original_format:mp4,-irl,score.gte%3A150&sf=random";

export const FetchAndDisplayImage = () => {
  const [images, setImages] = useState([])
  const [currImgNo, setCurrImgNo] = useState(0)

  const openInNewTab = () => {
    window.open("https://derpibooru.org/images/" + images[currImgNo].id, '_blank', 'noopener,noreferrer');
  }

  useEffect(() => {
    getImages()
  }, [])

  const nextImage = () => {
    if (currImgNo === images.length - 1) {
      getImages()
      setCurrImgNo(0)
    } else {
      setCurrImgNo(currImgNo + 1)
    }
  }

  const prevImage = () => {
    if (currImgNo > 0) {
      setCurrImgNo(currImgNo - 1)
    }
  }

  const getImages = () => {
    fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      setImages(response.images)
    })
  }

  const handleKeyDown = e => {
    switch (e.key) {
      case "l":
      case "d":
      case "ArrowRight":
        nextImage()
        break;
      case "h":
      case "a":
      case "ArrowLeft":
        prevImage()
        break;
    }
  }

  if(images.length === 0){
    return <p>Loading...</p>
  }
  return (
    <div style={{background:"black", width: "100vw", height: "100vh"}} tabIndex="0" onKeyDown={handleKeyDown} >
      <img alt="" src={images[currImgNo].view_url} style={{background:"white",cursor: "pointer",maxHeight:"100%",height:"auto",maxWidth:"100%"}} onClick={() => openInNewTab()} />
    </div>
  )
}
