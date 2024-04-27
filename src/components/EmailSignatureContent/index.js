import Socials from "../Socials";
import AppTitle from "../AppTitle";
import AppSubtitle from "../AppSubTitle";
import AppDescription from "../AppDescription";
import AppImage from "../AppImage";
import ProfilePicture from "../../assets/images/profilePicture.jpg";

const DESCRIPTION = `Lorem Ipsum is simply dummy text of 
the printing and typesetting industry.
Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book`

const EmailSignatureContent = ({ selectedTemplate }) => {
    return (
      <div 
      className={`email-signature t-inter ${selectedTemplate === 'centerAlign' 
      ? 'email-signature-center' : (selectedTemplate === 'rightAlign' ? 'email-signature-right' : '') }`}>
        <div className="email-signature-profile">
            <AppImage src={ProfilePicture} alt='profile-picture' className='profile-picture' />
            <Socials />
        </div>
        <div className="email-signature-content">
            <AppTitle text='Name Surname' className='t-medium t-extra-bold t-line-medium'/>
            <AppSubtitle text='Job Title' className='t-medium t-regular' />
            <AppDescription text={DESCRIPTION} className='t-regular t-small' />
        </div>
      </div>
    );
  };
  
  export default EmailSignatureContent;