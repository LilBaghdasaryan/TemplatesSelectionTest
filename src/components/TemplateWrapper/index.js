
const TemplateWrapper = ({ component: Component, style,  ...rest }) => (
  <div style={style}>
    <Component  { ...rest}  />
  </div>
    
  );

  export default TemplateWrapper;