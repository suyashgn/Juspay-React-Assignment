import { useState } from "react";
import "../styles/Sidebar.css";

import DashboardIcon from "../assets/sidebar/ChartPieSlice.svg";
import CartIcon from "../assets/sidebar/cart.svg";
import BookIcon from "../assets/sidebar/Notebook.svg";
import UserIcon from "../assets/sidebar/user.svg";
import FileIcon from "../assets/sidebar/IDcard.svg";
import UsersIcon from "../assets/sidebar/users.svg";
import BlogIcon from "../assets/sidebar/Notebook.svg";
import SocialIcon from "../assets/sidebar/social.svg";
import Arrow2Icon from "../assets/sidebar/arrowright.svg";
import Mainuser from "../assets/sidebar/usermain.svg";


const Sidebar = () => {
  const [open, setOpen] = useState("user"); // default open section

  const toggleMenu = (menu) => {
    setOpen(open === menu ? null : menu);
  };

  return (
    <aside className="sidebar">
      {/* Profile */}
      <div className="profile">
        <img src={Mainuser} alt="profile" className="avatar" />
        <span className="profile-name">ByeWind</span>
      </div>

      {/* Favorites */}
      <div className="section">
        <h2 className="section-title">Favorites</h2>
        <ul className="list">
          <li className="list-item">• Overview</li>
          <li className="list-item">• Projects</li>
        </ul>
      </div>

      {/* Dashboards */}
      <div className="section">
        <h2 className="section-title">Dashboards</h2>
        <ul className="list">
          <li className="list-item active">
            <img src={DashboardIcon} alt="Dashboard" className="icon" /> Default
          </li>

          <li onClick={() => toggleMenu("ecommerce")} className="list-item">
            <img
              src={Arrow2Icon}
              alt="arrow"
              className={`arrow ${open === "ecommerce" ? "rotate" : ""}`}
            />
            <img src={CartIcon} alt="Ecommerce" className="icon" />
            eCommerce
        
          </li>

          <li onClick={() => toggleMenu("projects")} className="list-item">
            <img
              src={Arrow2Icon}
              alt="arrow"
              className={`arrow ${open === "projects" ? "rotate" : ""}`}
            />
            <img src={DashboardIcon} alt="Projects" className="icon" />
            Projects
          </li>

          <li onClick={() => toggleMenu("courses")} className="list-item">
            <img
              src={Arrow2Icon}
              alt="arrow"
              className={`arrow ${open === "courses" ? "rotate" : ""}`}
            />
            <img src={BookIcon} alt="Courses" className="icon" />
            Online Courses
          
          </li>
        </ul>
      </div>

      {/* Pages */}
      <div className="section">
        <h2 className="section-title">Pages</h2>
        <ul className="list">
          {/* User Profile */}
          <li>
            <div onClick={() => toggleMenu("user")} className="list-item">
              <img
                src={Arrow2Icon}
                alt="arrow"
                className={`arrow ${open === "user" ? "rotate" : ""}`}
              />
              <img src={UserIcon} alt="User" className="icon" />
              User Profile
              
            </div>
            {open === "user" && (
              <ul className="sub-list">
                <li className="sub-item">Overview</li>
                <li className="sub-item">Projects</li>
                <li className="sub-item">Campaigns</li>
                <li className="sub-item">Documents</li>
                <li className="sub-item">Followers</li>
              </ul>
            )}
          </li>

          <li className="list-item">
            <img src={FileIcon} alt="Account" className="icon" /> Account
          </li>
          <li className="list-item">
            <img src={UsersIcon} alt="Corporate" className="icon" /> Corporate
          </li>
          <li className="list-item">
            <img src={BlogIcon} alt="Blog" className="icon" /> Blog
          </li>
          <li className="list-item">
            <img src={SocialIcon} alt="Social" className="icon" /> Social
          </li>
        </ul>
      </div>
    </aside>
  );
};


export default Sidebar;
