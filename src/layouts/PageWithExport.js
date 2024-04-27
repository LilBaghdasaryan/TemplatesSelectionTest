import { renderToString } from 'react-dom/server';

 const PageWithExport = ({children, setExportedHtml, selectedOption }) => {
    const downloadHTML = (htmlContent, filename) => {
        const blob = new Blob([htmlContent], { type: 'text/html' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
        URL.revokeObjectURL(link.href); 
      };

    const handleExport = () => {
        const html = renderToString(<>{children}</>);
        setExportedHtml(html);
        downloadHTML(html, 'Enjoy_Coding')
    }
    return <div className='export-wrapper'>
              {children}
              <button 
              onClick={handleExport} 
              className='export-btn'>
                Export HTML
              </button>
          </div>
}

export default PageWithExport;
