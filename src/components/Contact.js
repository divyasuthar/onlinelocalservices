import React from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'


export const Contact = () => {
    return (
        <>
            <div>
                <Navbar />


                {/* <!-- Page Header Start --> */}
                <div class="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                    <div class="container py-5">
                        <h1 class="display-1 text-white animated slideInDown">Contact Us</h1>
                        <nav aria-label="breadcrumb animated slideInDown">
                            <ol class="breadcrumb text-uppercase mb-0">
                                <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                                <li class="breadcrumb-item text-primary active" aria-current="page">Contact Us</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                {/* <!-- Page Header End --> */}



                {/* <!-- Contact Start --> */}
                <div class="container-xxl py-5">
                    <div class="container">
                        <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" >
                            <h4 class="section-title">Contact Us</h4>
                            <h1 class="display-5 mb-4">If You Have Any Query, Please Feel Free Contact Us</h1>
                        </div>
                        <div class="row g-5">
                            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div class="d-flex flex-column justify-content-between h-100">
                                    <div class="bg-light d-flex align-items-center w-100 p-4 mb-4">
                                        <div class="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark" >
                                            <i class="ti-location-pin text-primary"></i>
                                        </div>
                                        <div class="ms-4">
                                            <p class="mb-2">Address</p>
                                            <h3 class="mb-0">D-104,North Plaza complex ,motera</h3>
                                        </div>
                                    </div>
                                    <div class="bg-light d-flex align-items-center w-100 p-4 mb-4">
                                        <div class="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark" >
                                            <i class="ti-mobile text-primary"></i>
                                        </div>
                                        <div class="ms-4">
                                            <p class="mb-2">Call Us Now</p>
                                            <h3 class="mb-0">+91 8141403270</h3>
                                        </div>
                                    </div>
                                    <div class="bg-light d-flex align-items-center w-100 p-4">
                                        <div class="d-flex flex-shrink-0 align-items-center justify-content-center bg-dark" >
                                            <i class="fa fa-envelope-open text-primary"></i>
                                        </div>
                                        <div class="ms-4">
                                            <p class="mb-2">Mail Us Now</p>
                                            <h3 class="mb-0">infoproject221@gmail.com</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                                <form>
                                    <div class="row g-3">
                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <input type="text" class="form-control" id="name" placeholder="Your Name" />
                                                <label for="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <input type="email" class="form-control" id="email" placeholder="Your Email" />
                                                <label for="email">Your Email</label>
                                            </div>
                                        </div>
                                        <br /><br /><br /><br /><br />
                                        <div class="col-12">
                                            <div class="form-floating">
                                                <input type="text" class="form-control" id="subject" placeholder="Subject" />
                                                <label for="subject">Subject</label>
                                            </div>
                                        </div>
                                        <br /><br /><br /><br /><br />

                                        <div class="col-12">
                                            <div class="form-floating">
                                                <textarea class="form-control" placeholder="Leave a message here" id="message" ></textarea>
                                                <label for="message">Message</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <button class="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Contact End --> */}


                <Footer />
            </div>
        </>
    )
}
