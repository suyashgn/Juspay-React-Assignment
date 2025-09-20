import React from "react";
import StatusBadge from "./StatusBadge";
import UserAvatar from "./UserAvatar";

export default function OrderTable({ orders }) {
  return (
    <table className="order-table">
      <thead>
        <tr>
          <th>Order ID</th>
          <th>User</th>
          <th>Project</th>
          <th>Address</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(order => (
          <tr key={order.id}>
            <td>{order.id}</td>
            <td><UserAvatar name={order.user} img={order.img} /></td>
            <td>{order.project}</td>
            <td>{order.address}</td>
            <td>{order.date}</td>
            <td><StatusBadge status={order.status} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
