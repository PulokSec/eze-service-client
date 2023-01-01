import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSignOutAlt, faUsers, faIgloo, faBorderAll, faBorderNone, faUserGraduate, faShoppingBag, faCalendarPlus, faUserShield, faTasks } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const {loggedInUser} = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    const handleLogOut = () => {
        sessionStorage.clear();
    }

    useEffect(() => {
        fetch('https://mk-manager.onrender.com/isAdmin?email='+loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                if(data){
                    setIsAdmin(true);
                }
            })
    }, [loggedInUser.email])


    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4">
            <ul className="list-unstyled">
                    <li>
                        <Link to="/" className="text-white" >
                            <FontAwesomeIcon icon={faIgloo} /> <span>Home</span>
                        </Link>
                    </li>

                {!isAdmin && <div>
                    <li>
                    <Link to="/payment" className="text-white">
                        <FontAwesomeIcon icon={faShoppingBag} /> <span>Order</span>
                    </Link>
                </li>
                <li>
                    <Link to="/orders" className="text-white">
                        <FontAwesomeIcon icon={faBorderNone} /> <span>Your Orders</span>
                    </Link>
                </li>
                <li>
                    <Link to="/review" className="text-white">
                        <FontAwesomeIcon icon={faUserGraduate} /> <span>Review</span>
                    </Link>
                </li>
                </div>}

                {isAdmin && <div>
                    <li>
                        <Link to="/allOrders" className="text-white">
                            <FontAwesomeIcon icon={faBorderAll} /> <span>All Orders</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addService" className="text-white">
                            <FontAwesomeIcon icon={faCalendarPlus} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addTeam" className="text-white">
                            <FontAwesomeIcon icon={faUsers} /> <span>Add Team</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addAdmin" className="text-white">
                            <FontAwesomeIcon icon={faUserShield} /> <span>Admin Management</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manageService" className="text-white" >
                            <FontAwesomeIcon icon={faTasks} /> <span>Manage Service</span>
                        </Link>
                    </li>

                </div>}
            </ul>
            <div>
                <Link onClick={handleLogOut} to="/" className=" btn btn-secondary text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;