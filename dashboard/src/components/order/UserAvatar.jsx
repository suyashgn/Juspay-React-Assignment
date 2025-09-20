import React from "react";
import "./UserAvatar.css";

export default function UserAvatar({ name, img }) {
  if (img) return <img src={img} alt={name} className="avatar-img" />;
  return <span className="avatar-fallback">{name ? name.charAt(0) : "?"}</span>;
}
