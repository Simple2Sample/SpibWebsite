import { styled } from "styled-components";

const StyledNavbar = styled.nav`
grid-row: 1 ;
grid-column: 1 / -1;
`;

const Logo = styled.img`
margin-bottom: 10px;
margin-right: 16px;
margin-left: 8px;
`;


const Navbar = () => {
    return(
    <StyledNavbar className="navbar navbar-expand-md navbar-light bg-light justify-content-start">
<a href="/"><Logo src="/logo192small.png" width="40"  height="40" className="d-inline-block align-top " alt="" /></a>
  <a className="navbar-brand align" href="">Spib.no</a>

  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link fw-bold" href="/">Home <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="infiniteSpitfire">Infinite Spitfire</a>
      </li>
      <li className="nav-item">
        <a className="nav-link"  href="aboutMe">About Me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" target="_blank" href="https://ko-fi.com/simplesample">Donate</a>
      </li>
    </ul>
  </div>
</StyledNavbar>);
}

export default Navbar;