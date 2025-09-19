import "../styles/RightPanel.css";

const RightPanel = () => {
  const notifications = [
    { icon: "🐞", text: "You have a bug that needs...", time: "Just now" },
    { icon: "👤", text: "New user registered", time: "59 minutes ago" },
    { icon: "🐞", text: "You have a bug that needs...", time: "12 hours ago" },
    { icon: "📡", text: "Andi Lane subscribed to you", time: "Today, 11:59 AM" },
  ];

  const activities = [
    { avatar: "https://i.pravatar.cc/32?img=1", text: "You have a bug that needs...", time: "Just now" },
    { avatar: "https://i.pravatar.cc/32?img=2", text: "Released a new version", time: "59 minutes ago" },
    { avatar: "https://i.pravatar.cc/32?img=3", text: "Submitted a bug", time: "12 hours ago" },
    { avatar: "https://i.pravatar.cc/32?img=4", text: "Modified A data in Page X", time: "Today, 11:59 AM" },
    { avatar: "https://i.pravatar.cc/32?img=5", text: "Deleted a page in Project X", time: "Feb 2, 2023" },
  ];

  const contacts = [
    { avatar: "https://i.pravatar.cc/32?img=6", name: "Natali Craig" },
    { avatar: "https://i.pravatar.cc/32?img=7", name: "Drew Cano" },
    { avatar: "https://i.pravatar.cc/32?img=8", name: "Orlando Diggs" },
    { avatar: "https://i.pravatar.cc/32?img=9", name: "Andi Lane" },
    { avatar: "https://i.pravatar.cc/32?img=10", name: "Kate Morrison" },
    { avatar: "https://i.pravatar.cc/32?img=11", name: "Koray Okumus" },
  ];

  return (
    <aside className="right-panel">
      {/* Notifications */}
      <div className="section">
        <h2 className="section-title">Notifications</h2>
        <ul className="list">
          {notifications.map((n, i) => (
            <li key={i} className="list-item">
              <span className="icon">{n.icon}</span>
              <div>
                <p className="text">{n.text}</p>
                <p className="time">{n.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Activities */}
      <div className="section">
        <h2 className="section-title">Activities</h2>
        <ul className="list">
          {activities.map((a, i) => (
            <li key={i} className="list-item">
              <img src={a.avatar} alt="user" className="avatar" />
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
