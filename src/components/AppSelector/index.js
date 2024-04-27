import { useState } from 'react';
import caretUpIcon from "../../assets/icons/caretUp.svg";
import caretDownIcon from "../../assets/icons/caretDown.svg";
import  './index.css'

export default function AppSelector({ handleSelectChange, className }) {
    
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("Select template");

  const onClickHandler = (e) => {
    setIsSelected(e.target.textContent);
    handleSelectChange(e.target.id);
    setIsActive(!isActive);
  }

    return (
      <div className={className}>
      <div className="dropdown t-regular t-inter t-extra-small">
        <div
          onClick={(e) => {
            setIsActive(!isActive);
          }}
          className={`dropdown-btn ${isActive ? 'dropdown-selected' : 'dropdown-frame'}`}
        >
          {`${selected}`}
          <img src={isActive ? caretUpIcon : caretDownIcon} />
        </div>
        <div
          className={`dropdown-content ${isActive ? 'dropdown-selected' : 'dropdown-frame'}`}
          style={{ display: isActive ? "block" : "none" }}
        >
          <div
            className="item"
            onClick={onClickHandler}
            id='emailSignature'
          >
            Email signature layout
          </div>
          <div
            className="item"
            onClick={onClickHandler}
            id='pageLayout'
          >
            Page layout
          </div>
        </div>
      </div>
    </div>
    );
  }