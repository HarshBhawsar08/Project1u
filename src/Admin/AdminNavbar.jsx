import React from 'react';

function AdminNavbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary bg-gradient bg-success p-4">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Admin Pannel</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/admin/users">AdminUsers</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/admin/logout">
                                    AdminLogout
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/admin/dashboard">AdminDasboard</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default AdminNavbar;
