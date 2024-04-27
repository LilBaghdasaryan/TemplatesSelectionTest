import facebookIcon from "../../assets/icons/facebookIcon.svg";
import twitterIcon from "../../assets/icons/twitterIcon.svg";
import insagramIcon from "../../assets/icons/instagramIcon.svg";

 const Socials = () => (
    <div className="social-icons">
                <img src={facebookIcon} alt="Facebook" />
                <img src={twitterIcon} alt="Twitter" />
                <img src={insagramIcon} alt="Instagram" />
            </div>
  );

  export default Socials;