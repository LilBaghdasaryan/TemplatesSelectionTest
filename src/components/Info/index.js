import dateIcon from "../../assets/icons/dateIcon.svg";

const Info = ({icon, alt, name}) => (
<div className="row-items row-items-centered row-items-space t-regular t-extra-small t-inter">
    <img src={icon} alt={alt} /> 
    <span>{name}</span>
</div>
)

export default Info