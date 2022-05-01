import React from 'react'
import '../assets/css/lib/owl.carousel.min.css'
import '../assets/css/lib/owl.theme.default.min.css'
import '../assets/css/lib/weather-icons.css'
import '../assets/css/lib/menubar/sidebar.css'

import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'



export const AdminNavbar = () => {



    return (
        <>

            {/* sidebar */}
            <div class="sidebar sidebar-hide-to-small sidebar-shrink sidebar-gestures">
                <div class="nano">
                    <div class="nano-content">
                        <ul>
                            <div class="logo"><a href="index.html">
                                {/* <!-- <img src="assets/images/logo.png" alt="" /> --> */}
                                <span>Admin</span></a></div>

                            <li><Link class="sidebar-sub-toggle" to="/admin/Dashboard" ><i class="ti-home"></i> Dashboard  </Link>

                            </li>

                            <li class="label">tables</li>
                            <li><Link class="sidebar-sub-toggle" to="/GetRole"><i class="ti-desktop"></i> Roles </Link></li>
                            <li><Link class="sidebar-sub-toggle" to="/GetUser"><i class="ti-user"></i> Users </Link></li>
                            <li><Link class="sidebar-sub-toggle" to="/GetService"><i class="ti-shopping-cart"></i> Services </Link></li>
                            <li><Link class="sidebar-sub-toggle" to="/GetCatagory"><i class="ti-layers-alt"></i> Catagories </Link></li>
                            <li><Link class="sidebar-sub-toggle" to="/GetViceCatagory"><i class="ti-layers-alt"></i> Vice Catagories </Link></li>
                            <li><Link class="sidebar-sub-toggle" to="/GetUserServices"><i class="ti-desktop"></i> User Services </Link></li>
                            <li><Link class="sidebar-sub-toggle" to="/GetServiceProvider"><i class="ti-user"></i>Service Providers </Link></li>
                            <li><Link class="sidebar-sub-toggle" to="/"><i class="ti-comments"></i> User Feedback </Link></li>
                        </ul>
                    </div>
                </div>
            </div>


            {/* Header */}
            <div class="header">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12">

                            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                                <div class="container-fluid">
                                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle ti-power-off" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                                                    Logout
                                                </a>
                                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                    <li><Link class="dropdown-item" to="/Logout">Logout</Link></li>

                                                </ul>
                                            </li>

                                        </ul>
                                        <form class="d-flex">
                                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                            <button class="btn btn-outline-success" type="submit">Search</button>
                                        </form>
                                    </div>
                                </div>
                            </nav>

                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}


