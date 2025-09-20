import React from "react";
import StatusBadge from "./StatusBadge";
import UserAvatar from "./UserAvatar";

export default function OrderCardList({ orders }) {
  return (
    <div className="order-card-list">
      {orders.map(order => (
        <div className="order-card" key={order.id}>
          <UserAvatar name={order.user} img={order.img} />
          <div><strong>{order.project}</strong></div>
          <div>{order.address}</div>
          <div>{order.date}</div>
          <StatusBadge status={order.status} />
        </div>
      ))}
    </div>
  );
}
