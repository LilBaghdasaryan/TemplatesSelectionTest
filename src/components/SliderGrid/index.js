import AppSubtitle from "../AppSubTitle";
import AppTitle from "../AppTitle";
import AppDescription from "../AppDescription";
import AppSlider from "../AppSlider";
import AppButton from './../AppButton/index';

const DESCRIPTION = `Lorem Ipsum is simply dummy text of 
the printing and typesetting industry.
Lorem Ipsum has been the industry's 
standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book`

const BulletPoints = ({ items }) => (
  <ul style={{'padding-left': '24px'}} className="t-regular t-grid t-medium">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

const SliderGrid = ({  }) => {
  const bulletPointsItems = ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3", "Lorem Ipsum 4"];
    return (
      <div className="slider-grid-wrapper">
        <div style={{width: '50%'}}>
          <AppSlider />
        </div>
        <div >
            <AppSubtitle text='Category name' className='t-bold t-large t-grid' />
            <AppTitle text={'Title'} className="t-grid t-extra-bold t-extra-large t-line-large" />
            <AppDescription text={DESCRIPTION} className='t-grid t-regular t-medium' />
            <div className="buttons-wrapper">
                <AppButton >Button</AppButton>
                <AppButton className='secondary'>Button</AppButton>
            </div>
            <BulletPoints items={bulletPointsItems} />
        </div>
      </div>
    );
  };
  
  export default SliderGrid;