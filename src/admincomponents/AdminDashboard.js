import React from 'react'

import '../assets/css/lib/owl.carousel.min.css'
import '../assets/css/lib/owl.theme.default.min.css'
import '../assets/css/lib/weather-icons.css'
import '../assets/css/lib/menubar/sidebar.css'

// import "../assets/css/lib/font-awesome.min.css"
// import "../assets/css/lib/themify-icons.css"
// import "../assets/css/lib/bootstrap.min.css"
import "../assets/css/lib/helper.css"
import "../assets/css/style.css"



import { Link } from 'react-router-dom'
import { AdminNavbar } from '../components/AdminNavbar'


export const AdminDashboard = () => {
    return (
        <>
            <div>


                <AdminNavbar />

                {/* new */}
                <div class="content-wrap">
                    <div class="main">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-8 p-r-0 title-margin-right">
                                    <div class="">
                                        <div class="page-title">
                                            <h3>Hello, <span>Welcome Here</span></h3>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /# column --> */}
                                <div class="col-lg-4 p-l-0 title-margin-left">
                                    <div class="">
                                        <div class="page-title">
                                            <ol class="breadcrumb">
                                                <li class="breadcrumb-item"><Link to="#">Admin/</Link></li>
                                                <li class="breadcrumb-item active">Dashboard</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /# column --> */}
                            </div>
                        </div>
                    </div>
                </div>




            </div>

        </>
    )
}
