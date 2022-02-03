const ActionButton = ({text, ...props}) => {
    return (
      <button className="btn-primary" {...props}>
        {text}
      </button>
    );
  };
  
  export default ActionButton;