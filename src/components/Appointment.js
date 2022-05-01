import React from 'react'



import { Navbar } from './Navbar'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';







import '../lib/animate/animate.min.css'
import '../lib/owlcarousel/assets/owl.carousel.min.css'
import '../lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css'
import '../css/bootstrap.min.css'
import '../css/style.css'
import { Footer } from './Footer'


export const Appointment = () => {
    const toast1 = () => { }

    const [vicecatagory, setvicecatagory] = useState([])
    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [uemail, setuemail] = useState()
    const [mobile, setmobile] = useState()
    const [vicecatagoryName, setvicecatagoryName] = useState()
    const [date, setdate] = useState()
    const [address, setaddress] = useState()



    const [user, setuser] = useState()
    const [service, setservice] = useState()
    const [catagory, setcatagory] = useState()
    const [vCatagory, setvCatagory] = useState()


    var id = useParams().id;
    var data1 = {
        email: uemail
    }


    const getData = () => {




        axios.get(`http://localhost:4000/vicecatagories/${id}`).then(res => {

            setvicecatagory(res.data.data)
            console.log(res.data.data)



        }).catch(err => {
            console.log(err);
        })

    }

    axios.post('http://localhost:4000/getuserbyemail', data1).then(res => {
        console.log(res.data.data[0]._id)
        setuser(res.data.data[0]._id)




    }).catch(err => {
        console.log(err);
    })




    useEffect(() => {

        setuemail(localStorage.getItem('email'))
        getData()









    }, [])



    useEffect(() => {



        setvicecatagoryName(vicecatagory.vCatagoryName)


        setservice(vicecatagory.service)
        setvCatagory(vicecatagory._id)
        setcatagory(vicecatagory.catagory)
        console.log(vicecatagoryName)







    })








    const submit = (e) => {



        e.preventDefault()

        if (uemail == email) {






            var data = {


                subject: "Service Appointment Booked",


                name: name,
                email: email,
                mobile: mobile,
                vCatagoryName: vicecatagoryName,
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



        // postdata
        var data = {
            user: user,
            service: service,
            catagory: catagory,
            vCatagory: vCatagory,


        }

        axios.post('http://localhost:4000/userservices', data).then(res => {
            console.log(res.data.data)


            toast.success(`🦄 UserService Added Successfully!`, {
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














    return (
        <>

            <div>

                <Navbar />


                {/* <!-- Page Header Start --> */}
                <div class="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                    <div class="container py-5">
                        <h1 class="display-1 text-white animated slideInDown">Appointment</h1>
                        <nav aria-label="breadcrumb animated slideInDown">
                            <ol class="breadcrumb text-uppercase mb-0">
                                <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                                <li class="breadcrumb-item text-primary active" aria-current="page">Appointment</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                {/* <!-- Page Header End --> */}


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
                                                <h3 class="mb-0">info@example.com</h3>
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
                                            <input type="text" class="form-control" placeholder="Your Service" defaultValue={vicecatagory.vCatagoryName} onChange={(e) => { setvicecatagoryName(e.target.value) }} required />
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
                                        <br /><br /><br /><br /><br />

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
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <!-- Appointment End --> */}


            <Footer />





        </>
    )
}


