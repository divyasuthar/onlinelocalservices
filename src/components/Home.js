import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import icon1 from '../img/icons/icon-1.png'
import carousel1 from '../img/carousel-1.jpg'
import about1 from '../img/about-1.jpg'
import about2 from '../img/about-2.jpg'
import test1 from '../img/testimonial-1.jpg'
import test2 from '../img/testimonial-2.jpg'
import test3 from '../img/testimonial-3.jpg'
import service1 from '../img/service-1.jpg'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'



// css



import '../lib/animate/animate.min.css'
import '../lib/owlcarousel/assets/owl.carousel.min.css'
import '../lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css'
import '../css/bootstrap.min.css'
import '../css/style.css'
import { Navbar } from './Navbar'
import { Footer } from './Footer'


// js


// <!-- user Template Javascript -->







export const Home = () => {
    const toast1 = () => { }

    let navigate = useNavigate()



    const [service, setservice] = useState([])
    const [serviceprovider, setserviceprovider] = useState([])


    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [uemail, setuemail] = useState()

    const [mobile, setmobile] = useState()
    const [vCatagoryName, setvCatagoryName] = useState()
    const [date, setdate] = useState()

    const [address, setaddress] = useState()
    const [userList, setuserList] = useState()

    const getData = () => {

        axios.get('http://localhost:4000/services').then(data => {
            setservice(data.data.data)
            console.log(data.data.data)
        }).catch(err => {
            console.log(err);
        })
        axios.get('http://localhost:4000/serviceproviders').then(data => {
            setserviceprovider(data.data.data)
            console.log(data.data.data)
        }).catch(err => {
            console.log(err);
        })

        axios.get(`http://localhost:4000/users`).then(res => {
            setuserList(res.data.data)
            console.log(res.data.data)

        }).catch(err => {
            console.log(err);
        })
    }













    useEffect(() => {
        setuemail(localStorage.getItem('email'))
        getData()

    }, [])


    const submit = (e) => {
        e.preventDefault()

        if (uemail == null) {
            navigate('/Login')
        }
        else if (uemail == email) {


            var data = {


                subject: "Service Appointment Booked",


                name: name,
                email: email,
                mobile: mobile,
                vCatagoryName: vCatagoryName,
                address: address,
                date: date




            }


            axios.post('http://localhost:4000/email', data).then(res => {
                console.log(res.data.data)


                toast.success(`🦄  Appointment booked Successfully.... You will get a call from us!`, {
                    position: "top-center",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                });



            }).catch(err => {
                toast.error(err, {
                    position: "top-center",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                });
            })

        }

        else {
            toast.error("Invalid Email", {
                position: "top-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
        }

    }



    return (
        <>
            <div>


                {/* <!-- Spinner Start --> */}
                {/* <div class="spinner-border position-relative text-primary" role="status"></div> */}
                {/* <!-- Spinner End --> */}


                <Navbar />


                {/* <!-- Carousel Start --> */}
                <div class="container-fluid p-0 pb-5 wow fadeIn" data-wow-delay="0.1s">
                    <div class="carousel header-carousel position-relative">
                        <div class="owl-carousel-item position-relative" data-dot="<img src='img/carousel-1.jpg'>">
                            <img class="img-fluid" src={carousel1} alt="" />
                            <div class="owl-carousel-inner">
                                <div class="container">
                                    <div class="row justify-content-start">
                                        <div class="col-10 col-lg-8">
                                            <h1 class="display-1 text-white animated slideInDown">Best Online Local Services</h1>
                                            <p class="fs-5 fw-medium text-white mb-4 pb-3">We are providing all types of local services which you can get it online.</p>
                                            {/* <a href="" class="btn btn-primary py-3 px-5 animated slideInLeft">Read More</a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* <!-- Carousel End --> */}








                {/* <!-- About Start --> */}
                <div class="container-xxl py-5">
                    <div class="container">
                        <div class="row g-5">
                            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                                <div class="about-img">
                                    <img class="img-fluid" src={about1} alt="" />
                                    <img class="img-fluid" src={about2} alt="" />
                                </div>
                            </div>
                            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                                <h4 class="section-title">About Us</h4>
                                <h1 class="display-5 mb-4">A Creative Local Services Agency For Your Dream Home</h1>
                                <p> We are big online organization who provides local services such as plumbing,carpenting and many more</p>
                                <p class="mb-4">Services have multiple catagories and catagories have numerous vice catagories.</p>

                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- About End --> */}



                {/* <!-- Service Start --> */}
                <div class="container-xxl py-5">
                    <div class="container">
                        <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s">
                            <h4 class="section-title">Our Services</h4>
                            <h1 class="display-5 mb-4">We Focused On Modern Online Services</h1>
                        </div>
                    </div>

                    <div class="row g-4">

                        {

                            service.slice(0, 3).map((service) => {
                                return (
                                    <>

                                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                            <div class="service-item d-flex position-relative text-center h-100">
                                                <img class="bg-img" src={service1} alt="" />
                                                <div class="service-text p-5">
                                                    <img class="mb-4" src="img/icons/icon-5.png" alt="Icon" />
                                                    <h3 class="mb-3">{service.serviceName}</h3>
                                                    <p class="mb-4">If you want to show catagories of {service.serviceName} then click the below button</p>
                                                    <Link class="btn" to={`/Catagories/${service._id}`}><i class="fa fa-plus text-primary me-3"></i>Show More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })

                        }


                    </div>
                </div>
            </div>
            {/* <!-- Service End --> */}


            {/* <!-- Team Start --> */}


            <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" >
                        <h4 class="section-title">Service Providers</h4>
                        <h1 class="display-5 mb-4">We Are Creative Service Providers Team For Your House</h1>
                    </div>
                    <div class="row g-0 team-items">
                        {
                            serviceprovider.map((serviceprovider) => {
                                return (
                                    <>



                                        <div div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                            <div class="team-item position-relative">
                                                <div class="position-relative">
                                                    <img class="img-fluid" src="img/team-1.jpg" alt="" />
                                                    <div class="team-social text-center">
                                                        <a class="btn btn-square" href=""><i class="fab fa-facebook-f"></i></a>
                                                        <a class="btn btn-square" href=""><i class="fab fa-twitter"></i></a>
                                                        <a class="btn btn-square" href=""><i class="fab fa-instagram"></i></a>
                                                    </div>
                                                </div>
                                                <div class="bg-light text-center p-4">
                                                    <h3 class="mt-2">{serviceprovider.name}</h3>
                                                    <span class="text-primary">{serviceprovider.service.serviceName}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })

                        }



                    </div>
                </div>
            </div>

            {/* <!-- Team End --> */}




            {/* <!-- Appointment Start --> */}
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-5">
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <h4 class="section-title">Appointment</h4>
                            <h1 class="display-5 mb-4">Make An Appointment To Start Your Service</h1>
                            <div class="row g-4">
                                <div class="col-12">
                                    <div class="d-flex">
                                        <div class="d-flex flex-shrink-0 align-items-center justify-content-center bg-light" >
                                            <i class="fa fa-2x ti-mobile text-primary"></i>
                                        </div>
                                        <div class="ms-4">
                                            <p class="mb-2">Call Us Now</p>
                                            <h3 class="mb-0">+91 8141403270</h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="d-flex">
                                        <div class="d-flex flex-shrink-0 align-items-center justify-content-center bg-light" >
                                            <i class="fa fa-2x fa-envelope-open text-primary"></i>
                                        </div>
                                        <div class="ms-4">
                                            <p class="mb-2">Mail Us Now</p>
                                            <h3 class="mb-0">infoproject221@gmail.com</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <form onSubmit={submit} method="POST">

                                <div class="row g-3">
                                    <div class="col-12 col-sm-6">
                                        <input type="text" class="form-control" placeholder="Your Name" required onChange={(e) => { setname(e.target.value) }} />
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <input type="email" class="form-control" placeholder="Your Email" required onChange={(e) => { setemail(e.target.value) }} />
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <input type="text" class="form-control" placeholder="Your Mobile" required onChange={(e) => { setmobile(e.target.value) }} />
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <input type="text" class="form-control" placeholder="Your Service" required onChange={(e) => { setvCatagoryName(e.target.value) }} />

                                    </div>

                                    <div class="col-12">
                                        <div class="" id="date" data-target-input="">
                                            <input type="date"
                                                class="form-control datetimepicker-input"
                                                placeholder="Choose Date" data-target="#date" data-toggle="" required onChange={(e) => { setdate(e.target.value) }} />
                                        </div>
                                    </div>


                                    <div class="col-12">
                                        <textarea class="form-control" rows="5" placeholder="Address" required onChange={(e) => { setaddress(e.target.value) }}></textarea>
                                    </div>

                                    <div class="col-12">
                                        <button class="btn btn-primary w-100 py-3" type="submit" onClick={toast1}>Book Appointment</button>
                                        <ToastContainer
                                            position="top-center"
                                            autoClose={2500}
                                            hideProgressBar={false}
                                            newestOnTop={false}
                                            closeOnClick
                                            rtl={false}
                                            pauseOnFocusLoss
                                            draggable
                                            pauseOnHover
                                        />
                                    </div>
                                </div>
                            </form >
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Appointment End --> */}


            {/* <!-- Testimonial Start --> */}
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <h4 class="section-title">Feedbacks</h4>
                        <h1 class="display-5 mb-4">Thousands Of Customers Who Trust Us And Our Services</h1>
                    </div>
                    <div class="owl-carousel testimonial-carousel " data-wow-delay="0.1s">
                        <div class="testimonial-item text-center" data-dot="">
                            <img class='img-fluid' src={test1} alt=''></img>
                            <p class="fs-5">Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                            <h3>Client Name</h3>
                            <span class="text-primary">Profession</span>
                        </div>

                    </div>
                </div>
            </div>
            {/* <!-- Testimonial End --> */}



            <Footer />

            {/* <!-- Back to Top --> */}
            <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="ti-arrow-up"></i></a>




        </>
    )
}
