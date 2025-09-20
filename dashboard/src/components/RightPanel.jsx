import "../styles/RightPanel.css";
import BugIcon from "../assets/right/bug.svg";
import UserIcon from "../assets/right/userbox.svg";
import SubscribedIcon from "../assets/right/subscri.svg";

import U1 from "../assets/right/u1.svg";
import U2 from "../assets/right/u2.svg";
import U3 from "../assets/right/u3.svg";
import U4 from "../assets/right/u4.svg";
import U5 from "../assets/right/u5.svg";

import U6 from "../assets/right/u6.svg";
import U7 from "../assets/right/u7.svg";
import U8 from "../assets/right/u8.svg";
import U9 from "../assets/right/u9.svg";
import U10 from "../assets/right/u10.svg";
import U11 from "../assets/right/u11.svg";

const RightPanel = () => {
  const notifications = [
    { icon: BugIcon, text: "You have a bug that needs...", time: "Just now" },
    { icon: UserIcon, text: "New user registered", time: "59 minutes ago" },
    { icon: BugIcon, text: "You have a bug that needs...", time: "12 hours ago" },
    { icon: SubscribedIcon, text: "Andi Lane subscribed to you", time: "Today, 11:59 AM" },
  ];

const activities = [
  { avatar: U1, text: "You have a bug that needs...", time: "Just now" },
  { avatar: U2, text: "Released a new version", time: "59 minutes ago" },
  { avatar: U3, text: "Submitted a bug", time: "12 hours ago" },
  { avatar: U4, text: "Modified A data in Page X", time: "Today, 11:59 AM" },
  { avatar: U5, text: "Deleted a page in Project X", time: "Feb 2, 2023" },
];

const contacts = [
  { avatar: U6, name: "Natali Craig" },
  { avatar: U7, name: "Drew Cano" },
  { avatar: U8, name: "Orlando Diggs" },
  { avatar: U9, name: "Andi Lane" },
  { avatar: U10, name: "Kate Morrison" },
  { avatar: U11, name: "Koray Okumus" },
];

  return (
    <aside className="right-panel">
      {/* Notifications */}
      <div className="section">
        <h2 className="section-title">Notifications</h2>
        <ul className="list">
          {notifications.map((n, i) => (
            <li key={i} className="list-item">
              <img src={n.icon} alt="icon" className="icon-svg" />
              <div>
                <p className="text">{n.text}</p>
                <p className="time">{n.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Activities */}
      <div className="section activities-section">
        <h2 className="section-title">Activities</h2>
        <ul className="list">
          {activities.map((a, i) => (
            <li key={i} className="list-item activity-item">
              <div className="avatar-wrapper">
                <img src={a.avatar} alt="user" className="avatar" />
                <span className="line-through"></span>
              </div>
              <div>
                <p className="text">{a.text}</p>
                <p className="time">{a.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Contacts */}
      <div className="section">
        <h2 className="section-title">Contacts</h2>
        <ul className="list">
          {contacts.map((c, i) => (
            <li key={i} className="list-item">
              <img src={c.avatar} alt={c.name} className="avatar" />
              <p className="text">{c.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default RightPanel;

