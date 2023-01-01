import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';
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

const AddService = () => {
    const [imageURL, setImageURL] = useState(null);
    const [alert,setAlert] = useState(false);
    const { register, handleSubmit, errors } = useForm();
    const classes = useStyles();

    const handleImageUpload = (event) => {
        const imageData = new FormData();
        imageData.set('key', 'd91fa87beb272af2ab5055ea39823dce');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
        .then(function (response) {
          setImageURL(response.data.data.display_url);
        })
        .catch(function (error) {
            console.log(error);
          });
    }

    const onSubmit = data => {
        const formData = {
            title: data.name,
            imageURL: imageURL,
            description: data.description,
            price: data.price

        }


        fetch('https://mk-manager.onrender.com/addService', {
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
                <h5 className="text-styleA">Add a Service</h5>
                {alert && 
        <div className={classes.root}>
        <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        File Updated — <strong>check it out!</strong>
      </Alert>
        </div>
        }

      <form className="form my-2 mr-5" onSubmit={handleSubmit(onSubmit)}>
       <div className="mb-3 form-group">
       <label htmlFor="exampleInputEmail1">Service Name</label>
       <input name="name" ref={register({ required: true })} type="text" placeholder="Name" className="form-control"/>
       {errors.name && <span className="error">Service Name is required</span>}
      </div>

      <div className="mb-2 form-group">
      <label htmlFor="exampleInputEmail1">Description</label>
        <textarea cols="20" rows="3" name="description" ref={register({ required: true })} type="text" placeholder="Description" className="form-control"/>
        </div>

       <div className="mb-2 form-group">
       <label htmlFor="exampleInputEmail1">Price</label>
        <input name="price" ref={register({ required: true })} type="number" placeholder="Price" className="form-control" required/>
        {errors.price && <span className="error">Price is required</span>}
        </div>

        <div className="mb-2 form-group">
        <label htmlFor="exampleInputEmail1">Upload Image</label>
        <input name="file" onChange={handleImageUpload} ref={register({ required: true })} type="file" placeholder="Choose File" className="form-control" required/>
        {errors.file && <span className="error">File is required</span>}
        </div>

        <div className="mb-2 d-grid form-group">
        <input type="submit" value="Submit" className="btn button text-white"/>
         </div>
        </form>
            </div>
        </section>
    );
};

export default AddService;