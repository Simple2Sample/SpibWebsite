import { styled } from "styled-components";

const StyledHero = styled.div`
grid-column: 1;
grid-row: 2;
align-self: flex-start;
`;

const Hero = () => {


    return(
    <StyledHero className="px-4 py-5 my-5 text-center">
    <h1 className="display-5 fw-bold">Spib = Spitfire</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">{`No one truly knows the origin of the nickname "Spib", but it's easier to say.`}</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <a href="infiniteSpitfire"><button type="button" className="btn btn-primary btn-lg px-4 gap-3">I want Spib pics</button>
        </a>
        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Who is Spitfire?</button>
      </div>
    </div>
  </StyledHero>
  )
}

export default Hero;