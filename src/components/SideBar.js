import React from 'react';
import './SideBar.css'; // Import the CSS for styling
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>Topics</h3>
      <br/>
      <ul className="navbar-nav">
        <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
  
      <br/>
      <h3>Countries</h3>
      <br/>

        <li className="nav-item"><Link className="nav-link" to="/india">India</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/usa">USA</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/israel">Israel</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/australia">Australia</Link></li>
      </ul>


    </div>
  );
};

export default Sidebar;
