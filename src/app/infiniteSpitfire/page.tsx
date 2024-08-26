"use client";
import Navbar from "@/components/mainPage/navbar";
import { MainPageGrid } from "@/components/styles/mainBar.Styles";
import DerpibooruImage from "@/Types/derpibooruImage";
import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { styled } from "styled-components";


const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
    height: 100%;
    width: 100%;
  `;

const ContentContainer = styled.div`

 height: 100%;
 width: 100%;
grid-column: 1 / -1;
grid-row: 2 / -1;
`;

const StyledImage = styled.img`
display: flex;
max-Height:100%;
height:auto;
max-Width:100%;
background:"white";
cursor: pointer;
`;

const InstructionsContainer = styled.div`
position: absolute;
grid-column: 1 / -1;
grid-row: 1 / -1;
justify-self: end;
justify-content: center;
align-content: center;
text-align: center;
opacity: 0.5;
align-self: end;
border-radius: 16px;
background-color: grey;
height: 150px;
width: 240px;

`;
const StyledInstructions = styled.p`
  font-size: 0.8rem;
  font-weight: 500;
  margin: 0;
  padding: 0;
`;

 const InfiniteSpitfirePage = () => {
  const [images, setImages] = useState([] as DerpibooruImage[]);
  const [currImgNo, setCurrImgNo] = useState(0);
  const [apiURL, setApiURL] = useState('');
  const [loadingText, setLoadingText] = useState("Loading yellow fire horse...");
  const [nextImageObj, setNextImageObj] = useState('' as unknown);
  
  const imageLink = images[currImgNo] ? "https://derpibooru.org/images/" + images[currImgNo].id : '';

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
    const baseURL = "https://derpibooru.org/api/v1/json/search/images?per_page=50&q=safe,-pregnancy,-ai generated,-fetish,-diaper,-screencap,-comic,-original_format:mp4,-original_format:webm,-irl";
    const URLTail = ",score.gte%3A100&sf=random";
    const modifiedURL = baseURL +","+ window.location.search.slice(1).toString() + URLTail;
    return modifiedURL;
  }

  const getArtistName = (image: DerpibooruImage) => {
    const artistTag = image.tags.find(tag => tag.startsWith("artist:"));
    if (artistTag) {
        return artistTag.replace("artist:", "");
    }
    return "Unknown";
  }


const checkQuery = () => {
  if ( window?.location.search === "?nsfw") {
    setLoadingText("Loading lewd yellow fire horse...");
    setApiURL("https://derpibooru.org/api/v1/json/search/images?filter_id=195915&per_page=50&q=explicit,-ai generated,-diaper,-foalcon,-artist:mykegreywolf,-sfm,spitfire,-screencap,-comic,-original_format:mp4,-original_format:webm,-irl,score.gte%3A250&sf=random");
    return;
  }
if (window?.location.search) {  
  setLoadingText(`Loading non-yellow fire horse?! WHAT THE IS WRONG WITH YOU?! Why are you searching for ${window.location.search.slice(1).toString()} and not Spitfire? Everyone knows that one should spend all their energy on worshipping fire horse. Wow I am so disappointed. She is the captain of the Wonderbolts, she got an amazing character design, nice uniform and skills too. And you decide to fetch images of ${window.location.search.slice(1).toString()}? Spitfire is the ultimate pony and looking up anyone else is simply a waste of time. Aaaaaæøææåøåøæ. Ok I give up. Go ahead, look up that worthless piece of shit ${window.location.search.slice(1).toString()}. I don't care. Anyways, I hope I can convince you to look at pictures of her instead. She is a really nice horse, I promise. Have a nice day. - Simple Sæmple`);
  setApiURL(modifiedBaseURL(window.location.search));
  return;
}

if (!window?.location.search)
  {
  setApiURL("https://derpibooru.org/api/v1/json/search/images?per_page=50&q=safe,-pregnancy,-fetish,-ai generated,-diaper,-artist:mykegreywolf,spitfire,-screencap,-comic,-original_format:mp4,-original_format:webm,-irl,score.gte%3A100&sf=random");
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
  prefetch.src = images[currImgNo+1].representations.large;
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
    }).catch((error) => {
      console.error('Error:', error);
      setLoadingText("Error fetching images. Please try again later.");
    });
  }

  const handleKeyDown = (e:any) => {
    if (e.repeat) {
      return;
    }
    switch (e.key) {
      case "d":
      case "D":
      case "ArrowRight":
        nextImage()
        break;
      case "a":
      case "A":
      case "ArrowLeft":
        prevImage()
        break;
    }
  }
 
  return (
    <MainPageGrid>
     <Navbar />
    <ContentContainer  style={{display:"flex",alignItems:"center",justifyContent:"space-around", background:"black"}} tabIndex={0} onKeyDown={handleKeyDown} >
      {!images.length ? (<LoadingContainer><h1>{loadingText}</h1></LoadingContainer>) : (


      <StyledImage alt="Image of a beautiful pegaus called Spitfire" {...swipeHandlers} src={images[currImgNo].representations.large} draggable={false}  />
      )}
    </ContentContainer>
    <InstructionsContainer>
      <StyledInstructions>Made by {images[currImgNo] ? getArtistName(images[currImgNo] ) : 'Unknown'}</StyledInstructions>
        <h4>Instructions:</h4>
        <StyledInstructions>{`Press "A" or "D", arrows or swipe to navigate`}</StyledInstructions>
        <StyledInstructions>Click to open image in new tab</StyledInstructions>
        <StyledInstructions> {`Images hosted by Derpibooru`}</StyledInstructions>
        </InstructionsContainer> 
    </MainPageGrid>
  )
}

export default InfiniteSpitfirePage;