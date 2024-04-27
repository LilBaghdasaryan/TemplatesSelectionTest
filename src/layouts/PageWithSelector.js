import AppSelector from "../components/AppSelector";
import SelectorLayout from "./PageWithComponent"


 const PageWithSelector = ({children, handleSelectChange, handleTemplateChange }) => {
    return <SelectorLayout
                component={AppSelector}
                className='selector-layout'
                handleSelectChange={handleSelectChange} 
                handleTemplateChange={handleTemplateChange}>
                    {children}
          </SelectorLayout>
}

export default PageWithSelector
