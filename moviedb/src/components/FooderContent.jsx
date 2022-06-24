import "../assets/css/fooderContent.css";
import imgFooder from "../assets/img/peakyBlinders2kFooder.png";

function FooderContent() {
  return (
    <>
      <div className="fooderBox">
        <img src={imgFooder} alt="imgHeader" className="imgHeader" />
        <div className="fooderContent">
          <div className="annotateContent">
            <p className="titleFooder">Want to Annotate?</p>
            <p className="descriptionFooder">
              Are you a write? Feel like you could provide some great feedback
              on movies. Here are the features and benefits of becoming a
              member.
            </p>
            <i className="fa-solid fa-check checkIcon">
              <p className="benefits">Discuss movies with friends</p>
            </i>
            <i className="fa-solid fa-check checkIcon">
              <p className="benefits">
                Build your collection of disucssed films
              </p>
            </i>
            <i className="fa-solid fa-check checkIcon">
              <p className="benefits">Save your favourite movies</p>
            </i>
          </div>
          <div className="createAccountCotent">
            <p className="titleFooder">Create Account</p>
            <form>
              <input
                placeholder="First name"
                className="firstNameInput"
                minLength="1"
                type="text"
                required
              ></input>
              <input
                placeholder="Last name"
                className="lastNameInput"
                minLength="1"
                type="text"
                required
              ></input>
              <input
                placeholder="Email"
                className="emailInput"
                minLength="1"
                type="email"
                required
              ></input>
              <input
                placeholder="Password"
                className="passwordInput"
                minLength="1"
                type="password"
                required
              ></input>
              <div className="createAccountBox">
                <p className="alreadyAccount">
                  Already have an account? <span>Sign In</span>
                </p>
                <button className="createAccountButton">Create Account</button>
              </div>
            </form>
          </div>
        </div>
        <div className="socialMedia">
          <div className="socialMediaBoxLeft">
            <p>About</p>
            <p>Jobs</p>
            <p>Press</p>
            <p>News</p>
            <p>Gift</p>
            <div className="socialMediaBoxRigth">
              <p>Facebook</p>
              <p>Twitter</p>
              <p>Instagram</p>
            </div>
          </div>
          <p className="copyRigth"><i className="fa-solid fa-copyright"></i>2022 Filmplus</p>
        </div>
      </div>
    </>
  );
}

export default FooderContent;
