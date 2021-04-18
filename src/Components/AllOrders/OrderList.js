import React, { useEffect, useState } from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    const [alert,setAlert] = useState(false);
    const classes = useStyles();
    useEffect(() => {
        fetch('https://protected-fjord-22180.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const selectedStatus = (e,id) => {
        const status = e.target.value;
        const updateStatus = {id, status};
        console.log(updateStatus);

        fetch(`https://protected-fjord-22180.herokuapp.com/update/${id}`,{
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(updateStatus)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data){
                setAlert(true)
            }
        })
    }

    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Sr No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Email ID</th>
                <th className="text-secondary" scope="col">Services</th>
                <th className="text-secondary" scope="col">Payment Method</th>
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
            {alert && 
        <div className={classes.root}>
        <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        Updated — <strong>check it out!</strong>
      </Alert>
        </div>
        }
        </table>
    );
};

export default OrderList;