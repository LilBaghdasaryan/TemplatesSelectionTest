import TemplateLayout from './PageWithComponent';
import TemplateSelector from "../components/TemplateSelector";
import PageWithExport from './PageWithExport';


 const PageWithTemplate = ({children, handleTemplateChange, selectedTemplate, templates, setExportedHtml }) => {
    return <TemplateLayout 
            component={TemplateSelector} 
            handleTemplateChange={handleTemplateChange}
            selectedTemplate={selectedTemplate}
            templates={templates}>
              <PageWithExport setExportedHtml={setExportedHtml}>
                {children}
              </PageWithExport>
          </TemplateLayout>
}

export default PageWithTemplate
