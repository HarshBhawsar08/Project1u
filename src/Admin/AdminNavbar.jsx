import React from 'react';
import { Link } from 'react-router-dom';

function AdminNavbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary bg-gradient bg-success p-3">
                <div className="container-fluid">
                    <Link to="#" className="navbar-brand">Admin Pannel</Link>

                    
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarText"
                        aria-controls="navbarText"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/admin/users" className="nav-link" aria-current="page">AdminUsers</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/admin/logout" className="nav-link">AdminLogout</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/admin/dashboard" className="nav-link">AdminDasboard</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default AdminNavbar;
