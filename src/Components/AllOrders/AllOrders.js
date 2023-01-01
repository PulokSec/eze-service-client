import React, { useEffect, useState } from 'react';
import OrderList from './OrderList';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
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
const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [alert,setAlert] = useState(false);
  const classes = useStyles();

  useEffect(() => {
      fetch('https://mk-manager.onrender.com/allOrders')
          .then(res => res.json())
          .then(data => setOrders(data))
  }, [])

  const selectedStatus = (e,id) => {
      const status = e.target.value;
      const updateStatus = {id, status};

      fetch(`https://mk-manager.onrender.com/update/${id}`,{
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
    <div className="container-fluid row" >
    <Sidebar></Sidebar>
    <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
        <h5 className="text-brand">All Orders</h5>
        {alert && 
        <div className={classes.root}>
        <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        Updated — <strong>check it out!</strong>
      </Alert>
        </div>
        }
        <OrderList selectedStatus={selectedStatus} orders={orders}/>
    </div>
</div>
  );
};

export default AllOrders;