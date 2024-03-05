import './Preloader.css'; // Import the CSS file for styling

const Preloader = () => {
  return (
    <div className="preloader-container">
      <div className="preloader-content">
        <div className="food-truck-wrapper">
          <div className="food-truck">
            <div className="truck-body"></div>
            <div className="truck-window"></div>
          </div>
          <div className="truck-wheel"></div>
          <div className="truck-wheel"></div>
        </div>
        <div className="preloader-text">Hang tight! We're preparing the list of great restaurants...</div>
      </div>
    </div>
  );
};

export default Preloader;