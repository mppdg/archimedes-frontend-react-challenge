const SpinLoader = ({loading=false}) => {

    if (!loading) return null;

    return (
    <div className="spin-loader-holder">
      <div className="spin-loader">
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
      </div>
    );
  };
  
  export default SpinLoader;
  