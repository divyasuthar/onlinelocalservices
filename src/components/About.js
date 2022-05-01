import React from 'react'
import about1 from '../img/about-1.jpg'
import about2 from '../img/about-2.jpg'
import { Link } from 'react-router-dom'
import icon1 from '../img/icons/icon-1.png'
import { Navbar } from './Navbar'
import { Footer } from './Footer'




export const About = () => {
    return (
        <div>



            <Navbar />
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

            <Footer />
            {/* <!-- About End --> */}

        </div>
    )
}
