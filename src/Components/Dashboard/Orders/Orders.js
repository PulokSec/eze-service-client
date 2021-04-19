import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const {loggedInUser} = useContext(UserContext);

    useEffect(() => {
        fetch('https://protected-fjord-22180.herokuapp.com/orders?email='+loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [loggedInUser.email])

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#f0f0ff" }}>
                <h5 className="text-styleA">Your Orders</h5>
                <table className="table table-borderless">
                  <thead>
                      <tr>
                      <th className="text-secondary text-left" scope="col">Sr No</th>
                      <th className="text-secondary" scope="col">Name</th>
                      <th className="text-secondary" scope="col">Services</th>                      
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
                              <td>{order.title}</td>
                              <td>{order.date}</td>
                              <td>{order.price}$</td>
                              <td className="text-uppercase fw-bolder" id={order.status}>{order.status}</td>
                          </tr>
                          
                      )}
                  </tbody>
                  </table>
            </div>
        </section>
    );
};

export default Orders;
