import React, { useContext, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core';
import { UserContext } from '../../../App';
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));
const Review = () => {
    const [alert,setAlert] = useState(false);
    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser);
    const { register, handleSubmit, errors } = useForm();
    const classes = useStyles();

  const onSubmit = data => {
    const formData = {
        name: data.name,
        post: data.post,
        description: data.description,
        image: loggedInUser.image,
        rating: data.rating

    }


    fetch('https://mk-manager.onrender.com/addReview', {
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
        <h5 className="text-styleA">Add a Review</h5>
        {alert && 
        <div className={classes.root}>
        <Alert severity="success">
        <AlertTitle>Thank You</AlertTitle>
        <strong>Thanks For Your Reviews</strong>
      </Alert>
        </div>
        }

        <form className="form my-2 mr-5" onSubmit={handleSubmit(onSubmit)}>
       <div className="mb-3 form-group">
       <label htmlFor="exampleInputEmail1">Name</label>
       <input name="name" ref={register({ required: true })} type="text" placeholder="Name" className="form-control"/>
       {errors.name && <span className="error">Name is required</span>}
      </div>

       <div className="mb-2 form-group">
       <label htmlFor="exampleInputEmail1">Designation</label>
        <input name="post" ref={register({ required: true })} type="text" placeholder="Designation" className="form-control" required/>
        {errors.post && <span className="error">Designation is required</span>}
        </div>

        <div className="mb-2 form-group">
        <label htmlFor="exampleInputEmail1">Review</label>
        <textarea cols="20" rows="3" name="description" ref={register({ required: true })} type="text" placeholder="Please give your valuable opinion" className="form-control"/>
        </div>

        <div className="mb-2 form-group">
                <label htmlFor="exampleInputEmail1">Rate Us</label>
                <input type="number" ref={register({ required: true })} className="form-control" required name="rating" placeholder="Rate Our Service" onkeypress="return event.charCode >= 48" min="1" max="5"/>
        </div>

        <div className="mb-2 d-grid form-group">
        <input type="submit" value="Submit" className="btn button text-white"/>
         </div>
        </form>
    </div>
</section>
  );
};

export default Review;