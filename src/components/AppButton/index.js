import  "./index.css";

 const AppButton = ({ onClickHandler, className, children }) => (
    <div>
      <button onClick={onClickHandler} className={className}>{children}</button>
    </div>
  );

  export default AppButton;