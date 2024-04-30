import "./styles.css";
import face from "../../assets/facebook-f.svg";
import gplus from "../../assets/google-plus-g.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin-in.svg";

export default function SocialCards() {
  return (
    <div className="social-cards">
      <a href="#">
        <img src={face} alt="facebook" />
      </a>
      <a href="#">
        <img src={gplus} alt="googleplus" />
      </a>
      <a href="#">
        <img src={github} alt="github" />
      </a>
      <a href="#">
        <img src={linkedin} alt="linkedin" />
      </a>
    </div>
  );
}
