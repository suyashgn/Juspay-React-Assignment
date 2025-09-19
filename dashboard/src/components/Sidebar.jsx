import { useState } from "react";
import "../styles/Sidebar.css";
import {
  LayoutDashboard,
  ShoppingCart,
  BookOpen,
  User,
  FileText,
  Users,
  Briefcase,
  Rss,
  MessageSquare,
} from "lucide-react";



const Sidebar = () => {
  const [open, setOpen] = useState("user"); // default open section

  const toggleMenu = (menu) => {
    setOpen(open === menu ? null : menu);
  };

  return (
    <aside className="sidebar">
      {/* Profile */}
      <div className="profile">
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="avatar"
        />
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
            <LayoutDashboard size={16} /> Default
          </li>
          <li
            onClick={() => toggleMenu("ecommerce")}
            className="list-item"
          >
            <ShoppingCart size={16} /> eCommerce
          </li>
          <li
            onClick={() => toggleMenu("projects")}
            className="list-item"
          >
            <LayoutDashboard size={16} /> Projects
          </li>
          <li
            onClick={() => toggleMenu("courses")}
            className="list-item"
          >
            <BookOpen size={16} /> Online Courses
          </li>
        </ul>
      </div>

      {/* Pages */}
      <div className="section">
        <h2 className="section-title">Pages</h2>
        <ul className="list">
          {/* User Profile */}
          <li>
            <div
              onClick={() => toggleMenu("user")}
              className="list-item"
            >
              <User size={16} /> User Profile
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
            <FileText size={16} /> Account
          </li>
          <li className="list-item">
            <Users size={16} /> Corporate
          </li>
          <li className="list-item">
            <Rss size={16} /> Blog
          </li>
          <li className="list-item">
            <MessageSquare size={16} /> Social
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
