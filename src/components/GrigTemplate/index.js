
import SingleImageGrid from './../SingleImageGrid/index';
import TwoImageGrid from "../TwoImageGrid";
import SliderGrid from '../SliderGrid';

const GridTamplate = ({ selectedGrid }) => {
   
    return (
      <div>
        {selectedGrid === 'singleImage'  && <SingleImageGrid />}
        {selectedGrid === 'twoImageGrid'  && <TwoImageGrid />}
        {selectedGrid === 'sliderGrid'  && <SliderGrid />}
      </div>
    );
  };
  
  export default GridTamplate;