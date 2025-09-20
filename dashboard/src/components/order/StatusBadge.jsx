import React from "react";
import "./StatusBadge.css";

export default function StatusBadge({ status }) {
  const classes = `badge ${status.replace(" ", "-").toLowerCase()}`;
  return <span className={classes}>{status}</span>;
}
