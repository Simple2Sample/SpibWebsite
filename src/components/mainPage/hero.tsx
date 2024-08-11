import { styled } from "styled-components";

const StyledHero = styled.div`
grid-column: 1;
grid-row: 2;
align-self: flex-start;
margin-bottom: 32px;
padding-top: 8px;
margin-top: auto;
padding-bottom: 3rem ;
max-width: 600px;
justify-self: flex-end;
`;

const HeroContainer = styled.div`
width: 90%;
`;

const StyledButton = styled.button`
height: 48px;
width: 200px;
`;

const Hero = () => {


    return(
    <StyledHero className="px-4 text-center">
    <h1 className="display-5 fw-bold">Spib = Spitfire</h1>
    <HeroContainer className="col-lg-6 mx-auto">
      <p className="lead mb-4">{`No one truly knows the origin of the nickname "Spib", but it's easier to say.`}</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <a href="infiniteSpitfire"><StyledButton type="button" className="btn btn-primary btn-lg px-4 gap-3">I want Spib pics</StyledButton>
        </a>
        <a href="https://mlp.fandom.com/wiki/Spitfire" target="_blank"><StyledButton type="button" className="btn btn-outline-secondary btn-lg px-4">Who is Spitfire?</StyledButton></a>
      </div>
    </HeroContainer>
  </StyledHero>
  )
}

export default Hero;