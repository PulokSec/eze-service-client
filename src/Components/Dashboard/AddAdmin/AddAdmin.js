import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
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

const AddAdmin = () => {
    const [alert,setAlert] = useState(false);
    const classes = useStyles();
    const { register, handleSubmit, errors } = useForm();


    const onSubmit = data => {
        const formData = {
            name: data.name,
            email: data.email

        }

        fetch('https://pomato-server.onrender.com/addAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(formData)
            })
            .then(res => {
               setAlert(true);
            })
    }

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#f0f0ff" }}>
                <h5 className="text-styleA">Add a Admin</h5>
                {alert && 
        <div className={classes.root}>
        <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        Updated — <strong>check it out!</strong>
      </Alert>
        </div>
        }

            <form className="form my-2 mr-5" onSubmit={handleSubmit(onSubmit)}>
       <div className="mb-3 form-group">
       <label htmlFor="exampleInputEmail1">Admin Name</label>
       <input name="name" ref={register({ required: true })} type="text" placeholder="Name" className="form-control"/>
       {errors.name && <span className="error">Name is required</span>}
      </div>

       <div className="mb-2 form-group">
       <label htmlFor="exampleInputEmail1">Admin Email</label>
        <input name="email" ref={register({ required: true })} type="email" placeholder="Email" className="form-control" required/>
        {errors.email && <span className="error">email is required</span>}
        </div>

        <div className="mb-2 d-grid form-group">
        <input type="submit" value="Submit" className="btn button text-white"/>
         </div>
        </form>
            </div>
        </section>
    );
};

export default AddAdmin;