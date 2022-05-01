import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navbar } from './Navbar'
import { useParams } from 'react-router-dom'
import service1 from '../img/service-1.jpg'





export const Catagory = () => {
    const [catagory, setcatagory] = useState([])
    var id = useParams().id;


    const getData = () => {

        axios.get(`http://localhost:4000/catagories`).then(res => {

            setcatagory(res.data.data)
            console.log(res.data.data)


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
                        <h1 class="display-1 text-white animated slideInDown">Catagories</h1>
                        <nav aria-label="breadcrumb animated slideInDown">
                            <ol class="breadcrumb text-uppercase mb-0">
                                <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                                <li class="breadcrumb-item text-primary active" aria-current="page">Catagories</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                {/* <!-- Page Header End --> */}



                {/* catagory start */}
                <div class="container-xxl py-5">
                    <div class="container">
                        <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s">
                            <h4 class="section-title">Catagories Of Service</h4>
                            <h1 class="display-5 mb-4">We Focused On Modern Architecture And Interior Design</h1>
                        </div>
                    </div>

                    <div class="row g-4">

                        {
                            catagory.map((catagory) => {
                                if (catagory.service._id == id) {
                                    return (
                                        <>
                                            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                                <div class="service-item d-flex position-relative text-center h-100">
                                                    <img class="bg-img" src={service1} alt="" />
                                                    <div class="service-text p-5">
                                                        <img class="mb-4" src="img/icons/icon-5.png" alt="Icon" />
                                                        <h4 class="mb-3">Service Name -{catagory.service.serviceName}</h4>
                                                        <h3 class="mb-3">Catagory-{catagory.catagoryName}</h3>
                                                        <p class="mb-4">{catagory.description}</p>
                                                        <Link class="btn" to={`/ViceCatagories/${catagory._id}`}><i class="fa fa-plus text-primary me-3"></i>Show More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                }
                            })
                        }
                    </div>

                </div>
            </div>

        </>
    )
}
