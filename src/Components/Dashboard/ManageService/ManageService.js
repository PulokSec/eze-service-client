import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));
const ManageService = () => {
    const [services, setServices] = useState([]);
    const [alert,setAlert] = useState(false);
    const classes = useStyles();

    useEffect(() => {
        fetch('https://mk-manager.onrender.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const deleteService= (id)=>{
        const row = document.getElementById(id);
        
        fetch(`https://mk-manager.onrender.com/deleteService/${id}`,{
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(result =>{
            row.innerHTML = "";
            setAlert(true)
        })
      }
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#f0f0ff" }}>
                <h5 className="text-styleA">Manage Services</h5>
                <table className="table table-borderless">
                  <thead>
                      <tr>
                      <th className="text-secondary text-left" scope="col">Sr No</th>
                      <th className="text-secondary" scope="col">Title</th>
                      <th className="text-secondary" scope="col">Description</th>                      
                      <th className="text-secondary" scope="col">Price</th>
                      <th className="text-secondary" scope="col">Action</th>
                      </tr>
                  </thead>
                  <tbody>
                       { 
                         services.map((service, index) =>  
                              
                          <tr>
                              <td id={service._id}>{index+1}</td>
                              <td>{service.title}</td>
                              <td>{service.description}</td>
                              <td>{service.price}$</td>
                              <td onClick={() => deleteService(`${service._id}`)} className="btn btn-outline-danger btn-sm"><FontAwesomeIcon icon={faTrashAlt} /> Delete</td>
                          </tr>
                          
                       )}
                  </tbody>
                  </table>
                  {alert && 
                        <div className={classes.root}>
                        <Alert severity="error">
                        <AlertTitle>Deleted</AlertTitle>
                        Service Deleted — <strong>check it out!</strong>
                    </Alert>
                    </div>
                    }
            </div>
        </section>
    );
};

export default ManageService;
