import { useState } from 'react';
import EmailSignatureContent from './../EmailSignatureContent/index';
import { CenterAlignSvg, LeftAlignSvg, RightAlignSvg } from "../../assets/EmailSignitureS";
import { SingleGridSvg, TwoImageGridSvg, SlideImageGridSvg } from "../../assets/GridImageSvg"
import PageWithTemplate from "../../layouts/PageWithTemplate";
import PageWithSelector from "../../layouts/PageWithSelector";
import GridTamplate from '../GrigTemplate';
import PageWithExport from './../../layouts/PageWithExport';
import { renderToString } from 'react-dom/server';

const templates = [
  { id: 'leftAlign', name: 'Left Align Layout', component: LeftAlignSvg, width: '210px', height:'104px', className: 'template-padding-main' },
  { id: 'centerAlign', name: 'Center Align Layout', component: CenterAlignSvg, width: '122px', height:'206px', className: 'template-padding-secondary' },
  { id: 'rightAlign',   name: 'Right Align Layout', component: RightAlignSvg, width: '210px', height:'104px', className: 'template-padding-main' },
];

const gridTemplates = [
  { id: 'singleImage', name: 'Single image grid', component: SingleGridSvg, width: '122px', height:'228px', className: 'template-padding-main' },
  { id: 'twoImageGrid', name: '2 images grid', component: TwoImageGridSvg, width: '222px', height:'266px', className: 'template-padding-secondary' },
  { id: 'sliderGrid',   name: 'Slider grid', component: SlideImageGridSvg, width: '308px', height:'154px', className: 'template-padding-main' },
];

const MainTemplate = () => {

    const [selectedOption, setSelectedOption] = useState("");
    const [selectedTemplate, setSelectedTemplate] = useState(templates[0].id);
    const [selectedGrid, setSelectedGrid] = useState(gridTemplates[0].id);
    const [exportedHtml, setExportedHtml] = useState(gridTemplates[0].id);
  
    const handleSelectChange = (selectedItem) => {
      setSelectedOption(selectedItem);
      setSelectedTemplate(templates[0].id);
      setSelectedGrid(gridTemplates[0].id);
    };
  
    const handleTemplateChange = (templateId) => {
      if(selectedOption === 'emailSignature') {
        setSelectedTemplate(templateId)
      } else if(selectedOption === 'pageLayout') {
        setSelectedGrid(templateId)
      }
    };


    return (
      <PageWithSelector
        handleSelectChange={handleSelectChange} 
        handleTemplateChange={handleTemplateChange}>
        {selectedOption === 'emailSignature' && (
          <PageWithTemplate 
            handleTemplateChange={handleTemplateChange}
            selectedTemplate={selectedTemplate}
            templates={templates}
            setExportedHtml={setExportedHtml}
            >
              <EmailSignatureContent selectedTemplate={selectedTemplate}  />
          </PageWithTemplate>
      )}
        {selectedOption === 'pageLayout' && (
          <PageWithTemplate 
          handleTemplateChange={handleTemplateChange}
          selectedTemplate={selectedGrid}
          templates={gridTemplates}
          setExportedHtml={setExportedHtml}
          >
            <GridTamplate selectedGrid={selectedGrid} />
          </PageWithTemplate>
      )}
    </PageWithSelector>
      
)
}

export default MainTemplate;