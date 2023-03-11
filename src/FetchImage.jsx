import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

export const FetchAndDisplayImage = () => {
  const [images, setImages] = useState([]);
  const [currImgNo, setCurrImgNo] = useState(0);
  const [apiURL, setApiURL] = useState('');
  const [loadingText, setLoadingText] = useState("Loading yellow fire horse...");

  const openInNewTab = () => {
    window.open("https://derpibooru.org/images/" + images[currImgNo].id, '_blank', 'noopener,noreferrer');
  }



  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => prevImage(),
    onTap: () => openInNewTab(),
    trackMouse: true,
    swipeDuration: 500,
    delta: 5
  });

const checkQuery = () => {
  if ( window.location.search === "?nsfw") {

    setLoadingText("Loading lewd yellow fire horse...");
    setApiURL("https://derpibooru.org/api/v1/json/search/images?filter_id=195915&per_page=50&q=explicit,-diaper,-foalcon,-artist:mykegreywolf,-sfm,spitfire,-screencap,-comic,-original_format:mp4,-original_format:webm,-irl,score.gte%3A250&sf=random");
return;
  }
  setApiURL("https://derpibooru.org/api/v1/json/search/images?per_page=50&q=safe,-pregnancy,-diaper,-artist:mykegreywolf,spitfire,-screencap,-comic,-original_format:mp4,-original_format:webm,-irl,score.gte%3A150&sf=random");
  return;
}

useEffect(() => {
  checkQuery();


  }, [])

  useEffect(() => {
    if (apiURL)
    {
    getImages();
    }
  }, [apiURL])

  const nextImage = () => {
    // if one more remains

    if (currImgNo == images.length - 14 ) {

       getImages();
       setCurrImgNo(currImgNo + 1)
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
      const newList = [...images, ...response.images];
      setImages(newList);
    })
  }

  const handleKeyDown = e => {
    if (e.repeat) {
      return;
    }
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
    return( <p>{loadingText}</p>
    
    )
  }
  return (
    <div  style={{display:"flex",alignItems:"center",justifyContent:"space-around", background:"black", width: "100vw", height: "100vh"}} tabIndex="0" onKeyDown={handleKeyDown} >

      <img alt="Image of a beautiful pegaus called Spitfire" {...swipeHandlers} src={images[currImgNo].view_url} style={{background:"white",cursor: "pointer",maxHeight:"100%",height:"auto",maxWidth:"100%"}} draggable={false}  />
    </div>

  )
}
