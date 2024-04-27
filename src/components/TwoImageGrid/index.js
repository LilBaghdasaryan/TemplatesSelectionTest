import AppDate from "../AppDate";
import AppSubtitle from "../AppSubTitle";
import AppTitle from "../AppTitle";
import Socials from "../Socials";
import AppImage from "../AppImage";
import AppDescription from "../AppDescription";
import profilePicture from "../../assets/images/profilePicture.jpg"
import Info from "../Info";

const DESCRIPTION = `Lorem Ipsum is simply dummy text of 
the printing and typesetting industry.
Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book`

const TwoImageGrid = ({ name, jobTitle, quote, selectedTemplate }) => {
    return (
      <div className="single-grid">
        <AppImage 
          src={profilePicture}
          alt="Bordered Image"
          style={{  borderRadius: '24px', width: '100%', height: '290px' }} 
        />
        <div className="row-items row-items-space ">
            <div className="row-items item-full-width grid-content-socials">
                <span className="t-inter">Share</span>
                <Socials />
            </div> 
            <div className="grid-content-text">
                <AppSubtitle text='Title' className='t-bold t-large t-grid' />
                <AppDate className='row-items row-items-centered' />
                <AppDescription text={DESCRIPTION} className='t-grid t-regular t-medium' />
                <AppImage 
                src={profilePicture}
                alt="Bordered Image"
                style={{  borderRadius: '24px', width: '100%', height: '290px' }} 
                />
                <AppDescription text={DESCRIPTION} className='t-grid t-regular t-medium' />
            </div>
        </div>
        
      </div>
    );
  };
  
  export default TwoImageGrid;