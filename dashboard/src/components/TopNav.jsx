import "../styles/TopNav.css";  
import searchIcon from "../assets/search.svg";
import sunIcon from "../assets/sun.svg";
import bellIcon from "../assets/bell.svg";
import historyIcon from "../assets/clock.svg";
import starIcon from "../assets/star.svg";
import menuIcon from "../assets/menu.svg";


const TopNav = () => {
  return (
    <nav className="topnav">
      {/* Left */}
      <div className="nav-left">
        <img src={menuIcon} alt="menu" className="menu-icon" /> 
        <img src={starIcon} alt="star" className="star-icon" />
        <span className="breadcrumb">Dashboards</span>
        <span className="slash">/</span>
        <span className="breadcrumb active">Default</span>
      </div>

      {/* Center */}
      <div className="nav-center">
        <div className="search-box">
          <img src={searchIcon} alt="search" className="search-icon" />
          <input type="text" placeholder="Search" />
          <span className="shortcut">⌘ /</span>
        </div>
      </div>

      {/* Right */}
      <div className="nav-right">
        <img src={sunIcon} alt="theme" className="icon" />
        <img src={historyIcon} alt="history" className="icon" />
        <img src={bellIcon} alt="notifications" className="icon" />
        <img src={menuIcon} alt="menu" className="icon" />
      </div>
    </nav>
  );
};

export default TopNav;
