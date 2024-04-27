import TemplateWrapper from "../TemplateWrapper";

  
  const TemplateSelector = ({selectedTemplate, handleTemplateChange, templates}) => {
    
    return (
      <div className="template-selector">
        <h2 className='template-subtitle'>Template Types</h2>
        <div className="templates">
          {templates.map((template) => (
            <label 
            key={template.id} 
            className={`template ${template.className} ${selectedTemplate === template.id ? 'selected template-content-selected' : 'template-content'}`}>
              <input
                type="radio"
                name="template"
                value={template.id}
                checked={selectedTemplate === template.id}
                onChange={() => handleTemplateChange(template.id)}
              />
              <div className="template-image" >
              <TemplateWrapper 
                component={template.component} 
                style={{maxWidth: template.width,  width: '100%', height: '100%'}}
                width={template.width}
                height={template.height}
                fill={`${selectedTemplate === template.id ? 'template-fill' : ''}`}
                frame={`${selectedTemplate === template.id ? 'frame' : ''}`} />
              </div>
              <span>{template.name}</span>
            </label>
          ))}
        </div>
      </div>
    );
  };
  
  export default TemplateSelector;