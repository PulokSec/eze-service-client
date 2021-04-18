import React from 'react';
import OrderList from './OrderList';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
const AllOrders = () => {
  return (
    <div className="container-fluid row" >
    <Sidebar></Sidebar>
    <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
        <h5 className="text-brand">All Orders</h5>
        <OrderList />
    </div>
</div>
  );
};

export default AllOrders;