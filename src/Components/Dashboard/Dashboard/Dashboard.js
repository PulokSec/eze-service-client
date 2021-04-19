import React, { useContext } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { UserContext } from '../../../App';
import dashboard from '../../images/Data_trends_re_2cdy.png'


const Dashboard = () => {
    const {loggedInUser} = useContext(UserContext);

    return (
        <section>
            <div className="row">
                <div className="col-md-2 col-sm-6 col-12">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-4 col-sm-12 col-12 my-5 py-3">
                    <h1 className="text-styleA text-center display-2">Welcome</h1>
                    <br/>
                    <h1 className="text-styleB text-center display-5">{loggedInUser.name}</h1>
                    <br/>
                    <h3 className="text-styleA text-center">Get All Your Staffs Here</h3>
                </div>
                <div className="col-md-6 col-sm-12 col-12">
                    <img className="img-fluid" src={dashboard} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;