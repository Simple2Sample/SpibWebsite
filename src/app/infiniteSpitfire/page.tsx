"use client";
import DerpibooruImage from "@/Types/derpibooruImage";
import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { styled } from "styled-components";


const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
    height: 100vh;
    width: 100vw;
  `;


export const FetchAndDisplayImage = () => {
  const [images, setImages] = useState([] as DerpibooruImage[]);
  const [currImgNo, setCurrImgNo] = useState(0);
  const [apiURL, setApiURL] = useState('');
  const [loadingText, setLoadingText] = useState("Loading yellow fire horse...");
  const [nextImageObj, setNextImageObj] = useState();
  

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

  const modifiedBaseURL = (queryString:string) => {
    const baseURL = "https://derpibooru.org/api/v1/json/search/images?per_page=50&q=safe,-pregnancy,-fetish,-diaper,-screencap,-comic,-original_format:mp4,-original_format:webm,-irl";
    const URLTail = ",score.gte%3A100&sf=random";
    const modifiedURL = baseURL +","+ window.location.search.slice(1).toString() + URLTail;
    return modifiedURL;
  }




const checkQuery = () => {
  if ( window?.location.search === "?nsfw") {
    setLoadingText("Loading lewd yellow fire horse...");
    setApiURL("https://derpibooru.org/api/v1/json/search/images?filter_id=195915&per_page=50&q=explicit,-diaper,-foalcon,-artist:mykegreywolf,-sfm,spitfire,-screencap,-comic,-original_format:mp4,-original_format:webm,-irl,score.gte%3A250&sf=random");
    return;
  }
if (window?.location.search) {  
  setLoadingText(`Loading non-yellow fire horse?! WHAT THE IS WRONG WITH YOU?! Why are you searching for ${window.location.search.slice(1).toString()} and not Spitfire? Everyone knows that one should spend all their energy on worshipping fire horse. Wow I am so disappointed. She is the captain of the Wonderbolts, she got an amazing character design, nice uniform and skills too. And you decide to fetch images of ${window.location.search.slice(1).toString()}? Spitfire is the ultimate pony and looking up anyone else is simply a waste of time. Aaaaaæøææåøåøæ. Ok I give up. Go ahead, look up that worthless piece of shit ${window.location.search.slice(1).toString()}. I don't care. Anyways, I hope I can convince you to look at pictures of her instead. She is a really nice horse, I promise. Have a nice day. - Simple Sæmple`);
  setApiURL(modifiedBaseURL(window.location.search));
  return;
}

if (!window?.location.search)
  {
  setApiURL("https://derpibooru.org/api/v1/json/search/images?per_page=50&q=safe,-pregnancy,-fetish,-diaper,-artist:mykegreywolf,spitfire,-screencap,-comic,-original_format:mp4,-original_format:webm,-irl,score.gte%3A100&sf=random");
  }
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

  useEffect(() => {
if (images[currImgNo+1]) {
  const prefetch = new Image();
  prefetch.src = images[currImgNo+1].view_url;
  setNextImageObj(prefetch);
}


  },[currImgNo])

  const nextImage = () => {
    // if one more remains

    if (currImgNo === images.length - 14 ) {

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
      const newList:DerpibooruImage[] = [...images, ...response.images];
      setImages(newList);
    })
  }

  const handleKeyDown = (e:any) => {
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

  if(!images.length) {
    return( <LoadingContainer><h1>{loadingText}</h1></LoadingContainer>
    
    )
  }

  
  return (
    <div  style={{display:"flex",alignItems:"center",justifyContent:"space-around", background:"black", width: "100vw", height: "100vh"}} tabIndex={0} onKeyDown={handleKeyDown} >
      <img alt="Image of a beautiful pegaus called Spitfire" {...swipeHandlers} src={images[currImgNo].view_url} style={{background:"white",cursor: "pointer",maxHeight:"100%",height:"auto",maxWidth:"100%"}} draggable={false}  />
    </div>

  )
}

export default FetchAndDisplayImage;