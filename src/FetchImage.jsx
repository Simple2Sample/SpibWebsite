import { useState, useEffect } from "react";

const apiURL = "https://derpibooru.org/api/v1/json/search/images?q=safe,-pregnancy,-diaper,-artist:mykegreywolf,spitfire,solo,score.gte%3A150&sf=random";

export const FetchAndDisplayImage = () => {
  const [image, setImage] = useState({})
  const [nextImage, setNextImage] = useState({})

  const openInNewTab = () => {
    window.open("https://derpibooru.org/images/" + image.id, '_blank', 'noopener,noreferrer');
  }

  useEffect(() => {
    const setup = async () => {
      setImage(await getImage())
    }
    setup()
  }, [])

  const handleKeyDown = async e => {
    switch (e.key) {
      case "ArrowRight":
        setImage(nextImage)
        break;
    }
  }

  useEffect(() => {
    if (image !== {}) {
      const next = async () => {
        setNextImage(await getImage())
      }
      next()
    }
  }, [image])

  const getImage = async () => {
    return new Promise(resolve => {
      fetch(apiURL)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        resolve({url: response.images[0].view_url, id: response.images[0].id})
      })
    })
  }

  if(!image){
    return <p>Loading...</p>
  }
  return (
    <div style={{position: "fixed", width: "100vw", height: "100vh"}} tabIndex="0" onKeyDown={handleKeyDown} >
      <img src={image.url} height={window.innerHeight} style={{cursor: "pointer"}} onClick={() => openInNewTab()} />
    </div>
  )
}
