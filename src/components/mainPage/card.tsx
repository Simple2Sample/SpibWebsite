import styled from 'styled-components';

type CardContainerProps ={
  $gridcolumn: number;
  
}

type CardProps = CardContainerProps &{
  image: string;
  text: string;
  buttonText: string;
};
const CardContainer= styled.div<CardContainerProps>`
display: grid;
grid-column: ${props => props.$gridcolumn};
background-color: rgba(var(--bs-body-bg-rgb), var(--bs-bg-opacity));
grid-template-rows: 3fr 1fr;
grid-template-columns: 1fr 1fr;
height: 384px;
width: 256px;

    `;
const ImageContainer = styled.div`
grid-column: 1/-1;
grid-row: 1/-1;
height: 100%;
&::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 70%; /* Adjust the height as needed */
    background: linear-gradient(to top, rgba(0, 0, 0, 1), transparent); /* Adjust the gradient as needed */
    pointer-events: none; /* Ensure the overlay doesn't interfere with interactions */
  }
`;

const StyledImg = styled.img`
height: 100%;
object-fit:cover;


`;

const StyledText = styled.h3`
z-index: 1;
color: white;
align-content: center;
text-align: center;
grid-column: 1/-1;
grid-row: 2;

`;


const CardComponent: React.FC<CardProps> = (props) => {

  return (
   <CardContainer className='bg-light card' $gridcolumn={props.$gridcolumn}>
   <ImageContainer> <StyledImg className="bd-placeholder-img card-img-top" width="100%" height="225" src={props.image} role="img" aria-label="Placeholder: Thumbnail" ></StyledImg>
   </ImageContainer>
      <StyledText className="card-text">{props.text}</StyledText>
       
  

    </CardContainer>
  );
}

export default CardComponent;