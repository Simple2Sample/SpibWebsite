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
grid-template-rows: 1.5fr 1fr;
grid-template-columns: 1fr 1fr;
height: 384px;
width: 256px;

    `;

const StyledImg = styled.img`
grid-column: 1/-1;
grid-row: 1;
height: 100%;
object-fit:fill;
`;

const StyledText = styled.p`
color: black;
align-content: center;
text-align: center;
`;

const StyledViewButton = styled.button`
display: flex;
width: 86px;
height: 100px;
margin-right: 16px;
margin-bottom: 16px;
align-items: center;
justify-content: center;
justify-self: end;
align-self: center;
grid-column: 2;
grid-row: 2;
box-shadow: 4px 4px 16px 0px rgba(0, 0, 0, 0.25);
`;

const CardComponent: React.FC<CardProps> = (props) => {

  return (
   <CardContainer className='bg-light card' $gridcolumn={props.$gridcolumn}>
    <StyledImg className="bd-placeholder-img card-img-top" width="100%" height="225" src={props.image} role="img" aria-label="Placeholder: Thumbnail" ></StyledImg>
      <StyledText className="card-text">{props.text}</StyledText>
        <StyledViewButton className="text-body-secondary btn btn-lg px-4 ">{props.buttonText}</StyledViewButton>
  

    </CardContainer>
  );
}

export default CardComponent;