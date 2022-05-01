import React from 'react'
import { Footer } from './Footer'
import { Navbar } from './Navbar'
import { useEffect, useState } from 'react'
import axios from 'axios'



export const ServiceProvider = () => {
    const [serviceprovider, setserviceprovider] = useState([])


    const getData = () => {


        axios.get('http://localhost:4000/serviceproviders').then(data => {
            setserviceprovider(data.data.data)
            console.log(data.data.data)
        }).catch(err => {
            console.log(err);
        })


    }

    useEffect(() => {
        getData()

    }, [])



    return (
        <>
            <div>
                <Navbar />


                {/* <!-- Page Header Start --> */}
                <div class="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                    <div class="container py-5">
                        <h1 class="display-1 text-white animated slideInDown">Service Providers</h1>
                        <nav aria-label="breadcrumb animated slideInDown">
                            <ol class="breadcrumb text-uppercase mb-0">
                                <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                                <li class="breadcrumb-item text-primary active" aria-current="page">Service-Provider</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                {/* <!-- Page Header End --> */}



                {/* team start */}
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
                                                        <span class="text-primary">Service:  {serviceprovider.service.serviceName}</span>
                                                        <br /><br />
                                                        <p className='text-primary'>Address:  {serviceprovider.address}</p>
                                                        <p className='text-primary'>City:  {serviceprovider.city}</p>
                                                        <p className='text-primary'>State:  {serviceprovider.state}</p>
                                                        <p className='text-primary'>ContactNumber:  {serviceprovider.contactNum}</p>
                                                        <p className='text-primary'>FeedbackEmail:  {serviceprovider.feedbackEmail}</p>
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
                {/* team end */}


                <Footer />


            </div>
        </>
    )
}
