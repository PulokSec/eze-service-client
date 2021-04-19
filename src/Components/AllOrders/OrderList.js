import React from 'react';


const OrderList = ({selectedStatus , orders}) => {


    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Email ID</th>
                <th className="text-secondary" scope="col">Services</th>
                <th className="text-secondary" scope="col">Method</th>
                <th className="text-secondary" scope="col">Order Date</th>
                <th className="text-secondary" scope="col">Paid</th>
                <th className="text-secondary" scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {
                  orders.map((order, index) => 
                    <tr>
                        <td>{index + 1}</td>
                        <td>{order.name}</td>
                        <td>{order.email}</td>
                        <td>{order.title}</td>
                        <td>{order.type}</td>
                        <td>{order.date}</td>
                        <td>{order.price} $</td>
                        <td><select id={order.status} className="text-uppercase fw-bolder" onChange={(e) => selectedStatus(e,`${order._id}`)} name={order.status}>
          <option value={order.status}>{order.status}</option>
          <option value="pending" className="text-danger">Pending</option>
          <option value="ongoing" className="text-warning">On Going</option>
          <option value="done" className="text-success">Done</option>
        </select></td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default OrderList;