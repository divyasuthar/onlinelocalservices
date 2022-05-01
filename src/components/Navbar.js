import React from 'react'
import { Link } from 'react-router-dom'
import icon1 from '../img/icons/icon-1.png'
import { useEffect, useState } from 'react'



export const Navbar = () => {
    const [email, setemail] = useState('')


    useEffect(() => {
        setemail(localStorage.getItem('email'))
    })

    // console.log(email)
    const p1 = email != "admin@gmail.com" && email != null ?

        <>
            <Link to="/UserProfile" class="btn btn-primary py-2 mx-2 d-none d-lg-block">Profile</Link>
            <Link to="/Logout" class="btn btn-primary py-2 mx-2 d-none d-lg-block">Logout</Link>

        </>



        :
        <>
            <Link to="/SignUp" class="btn btn-primary py-2 mx-2 d-none d-lg-block ">Sign Up</Link>
            <Link to="/Login" class="btn btn-primary py-2 mx-2 d-none d-lg-block">Login</Link>
        </>
    return (
        <>
            <div>
                {/* <!-- Topbar Start --> */}
                <div class="container-fluid bg-dark p-0 wow fadeIn" data-wow-delay="0.1s">
                    <div class="row gx-0 d-none d-lg-flex">
                        <div class="col-lg-7 px-5 text-start">
                            <div class="h-100 d-inline-flex align-items-center py-3 me-3">
                                {/* <a class="text-body px-2" href="tel:+0123456789"><i class="fa fa-phone-alt text-primary me-2"></i>+012 345 6789</a> */}
                                <a class="text-body px-2" href="mailto:infoproject221@gmail.com"><i class="fa fa-envelope-open text-primary me-2"></i>infoproject221@gmail.com</a>
                            </div>
                        </div>
                        <div class="col-lg-5 px-5 text-end">
                            <div class="h-100 d-inline-flex align-items-center py-3 me-2">
                                <a class="text-body px-2" href="">Terms</a>
                                <a class="text-body px-2" href="">Privacy</a>
                            </div>
                            <div class="h-100 d-inline-flex align-items-center">
                                <a class="btn btn-sm-square btn-outline-body me-1" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-sm-square btn-outline-body me-1" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-sm-square btn-outline-body me-1" href=""><i class="fab fa-linkedin-in"></i></a>
                                <a class="btn btn-sm-square btn-outline-body me-0" href=""><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Topbar End --> */}

                {/* <!-- Navbar Start --> */}
                <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
                    <a href="index.html" class="navbar-brand ms-4 ms-lg-0">
                        <h1 class="text-primary m-0"><img class="me-3" src={icon1} alt="Icon" />Online Local Services</h1>
                    </a>
                    <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav ms-auto p-4 p-lg-0">
                            <Link to="/Home" class="nav-item nav-link">Home</Link>
                            <Link to="/About" class="nav-item nav-link">About</Link>
                            <Link to="/Service" class="nav-item nav-link">Services</Link>

                            <Link to="/Contact" class="nav-item nav-link">Contact</Link>
                            <Link to="/ServiceProvider" class="nav-item nav-link">Service-Providers</Link>
                        </div>
                        {p1}


                        <Link to="/Appointment" class="btn btn-primary py-2 mx-2 d-none d-lg-block ">Appointment</Link>
                    </div>
                </nav>
                {/* <!-- Navbar End --> */}



            </div>
        </>
    )
}
