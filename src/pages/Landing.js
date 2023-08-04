import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Selvage neutral milk hotel XOXO dreamcatcher palo santo freegan art
            party gochujang schlitz tofu mukbang. You probably haven't heard of
            them meh VHS, forage taxidermy keffiyeh next level truffaut locavore
            readymade. Portland wayfarers tumblr authentic coloring book butcher
            bushwick kogi.
          </p>
          <Link to="/register" className="btn btn-hero">
            login/register
          </Link>
        </div>
        <div>
          <img src={main} alt="job hunting" className="img main-img" />
        </div>
      </div>
    </Wrapper>
  );
};
export default Landing;
