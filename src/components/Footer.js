import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <>
            <div>
                {/* <!-- Footer Start --> */}
                <div class="container-fluid bg-dark text-body footer mt-5 pt-5 px-0 wow fadeIn" data-wow-delay="0.1s">
                    <div class="container py-5">
                        <div class="row g-5">
                            <div class="col-lg-3 col-md-6">
                                <h3 class="text-light mb-4">Address</h3>
                                <p class="mb-2"><i class="ti-location-pin text-primary me-3"></i>D-104,North Plaza Complex,motera</p>
                                <p class="mb-2"><i class="ti-mobile text-primary me-3"></i>+91 8141403270</p>
                                <p class="mb-2"><i class="fa fa-envelope text-primary me-3"></i>infoproject221@gmail.com</p>
                                <div class="d-flex pt-2">
                                    <a class="btn btn-square btn-outline-body me-1" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-square btn-outline-body me-1" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-square btn-outline-body me-1" href=""><i class="fab fa-youtube"></i></a>
                                    <a class="btn btn-square btn-outline-body me-0" href=""><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <h3 class="text-light mb-4">Services</h3>
                                <Link class="btn btn-link" to="">Plumbing</Link>
                                <Link class="btn btn-link" to="">Painting</Link>
                                <Link class="btn btn-link" to="">Carpenting</Link>
                                <Link class="btn btn-link" to="">Electric service</Link>
                                <Link class="btn btn-link" to="">computer repairing</Link>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <h3 class="text-light mb-4">Quick Links</h3>
                                <Link class="btn btn-link" to="/About">About Us</Link>
                                <Link class="btn btn-link" to="/Contact">Contact Us</Link>
                                <Link class="btn btn-link" to="/Service">Our Services</Link>
                                <Link class="btn btn-link" to="/Appointment">Appointment</Link>
                                <Link class="btn btn-link" to="">Support</Link>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <h3 class="text-light mb-4">Newsletter</h3>
                                <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                                <div class="position-relative mx-auto" >
                                    <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                                    <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container-fluid copyright">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                    &copy; <a href="#">Online Local Services</a>, All Right Reserved.
                                </div>
                                <div class="col-md-6 text-center text-md-end">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Footer End --> */}

            </div>
        </>
    )
}
