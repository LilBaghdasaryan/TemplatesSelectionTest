import AppDate from "../AppDate";
import AppSubtitle from "../AppSubTitle";
import AppTitle from "../AppTitle";
import Socials from "../Socials";
import viewIcon from "../../assets/icons/viewIcon.svg";
import AppImage from "../AppImage";
import AppDescription from "../AppDescription";
import profilePicture from "../../assets/images/profilePicture.jpg"
import Info from "../Info";

const DESCRIPTION = `Lorem Ipsum is simply dummy text of 
the printing and typesetting industry.
Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book`

const SingleImageGrid = ({ name, jobTitle, quote, selectedTemplate }) => {
    return (
      <div className="single-grid">
        <AppSubtitle text='Category name' className='t-bold t-large t-grid' />
        <AppTitle text={'Title'} className="t-grid t-extra-bold t-extra-large t-line-large" />
        <div className="t-inter t-regular t-extra-small row-items row-items-type row-items-space">
          <p>Author name</p>
          <AppDate className='row-items row-items-centered' />
          <Info icon={viewIcon} alt="ViewCount" name="View count"/>
          <div></div>
        </div>
        <AppImage 
          src={profilePicture}
          alt="Bordered Image"
          style={{  borderRadius: '24px', width: '100%', height: '290px' }} 
        />
         <AppDescription text={DESCRIPTION} className='t-grid t-regular t-medium' />
         <div className="row-items row-items-centered">
          <span className="t-inter">Share</span>
          <Socials />
          </div> 
      </div>
    );
  };
  
  export default SingleImageGrid;