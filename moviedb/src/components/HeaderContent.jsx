import "../assets/css/headerContent.css";
import imgHeader from "../assets/img/peakyBlinders2kHeader.png";

function HeaderContent() {

  return (
    <>
      <div className="divContent">
        <img src={imgHeader} alt="imgHeader" className="imgHeader" />
        <div className="headerTop">
          <div className="logo">
            <i className="fa-solid fa-clapperboard iconLogo"></i>
            <a href='/' className="titleLogo">FilmPluS</a>
          </div>
          <div className="loginRegister">
            <p className="loginButton">login</p>
            <p className="registerButton">Sign Up</p>
          </div>
          <div>
            <p className="slogan">
              Immerse yourself in the beautiful world of cinema
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderContent;
