import React from 'react'
import { AdminNavbar } from '../components/AdminNavbar'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom'


export const GetServiceProvider = () => {
    const toast1 = () => { }
    var id1 = useParams().id;


    const [serviceproviderList, setserviceproviderList] = useState([])
    const [service, setservice] = useState()
    const [name, setname] = useState()
    const [address, setaddress] = useState()
    const [state, setstate] = useState()
    const [city, setcity] = useState()
    const [pinCode, setpinCode] = useState()
    const [contactNum, setcontactNum] = useState()
    const [customerSupportNumber, setcustomerSupportNumber] = useState()
    const [feedbackEmail, setfeedbackEmail] = useState()

    const getData = () => {

        axios.get('http://localhost:4000/serviceproviders').then(data => {
            setserviceproviderList(data.data.data)
            console.log(data.data.data)
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        getData()
        setservice(`${id1}`)
    }, [])


    const postData = (e) => {

        e.preventDefault();


        var data = {
            service: service,
            name: name,
            address: address,
            state: state,
            city: city,
            pinCode: pinCode,
            contactNum: contactNum,
            customerSupportNumber: customerSupportNumber,
            feedbackEmail: feedbackEmail,

        }

        axios.post('http://localhost:4000/serviceproviders', data).then(res => {
            console.log(res.data.data)


            toast.success(`🦄 Service Added Successfully!`, {
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



    const deleteData = (id) => {
        var id = id
        axios.delete(`http://localhost:4000/serviceproviders/` + id).then(res => {


            toast.success('🦄 Data Deleted Successfully!', {
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
                                                <li class="breadcrumb-item active">Services</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /# column --> */}
                            </div>
                        </div>
                    </div>
                </div>


                {/* //add service provider */}

                <div class="header">
                    <div class="container-fluid">
                        <div class="">
                            <div class="col-lg-12">
                                <h3>Add Service Provider</h3>
                                <form onSubmit={postData} method="POST">
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" name='serviceId' placeholder='serviceId' onChange={(e) => { setservice(e.target.value) }} required defaultValue={service} />
                                        <input type="text" class="form-control" name='name' placeholder='name' onChange={(e) => { setname(e.target.value) }} required />
                                        <textarea type="text" class="form-control" name='address' placeholder='address' onChange={(e) => { setaddress(e.target.value) }} required />
                                        <input type="text" class="form-control" name='state' placeholder='state' onChange={(e) => { setstate(e.target.value) }} required />
                                        <input type="text" class="form-control" name='city' placeholder='city' onChange={(e) => { setcity(e.target.value) }} required />
                                        <input type="text" class="form-control" name='pinCode' placeholder='pinCode' onChange={(e) => { setpinCode(e.target.value) }} required />
                                        <input type="text" class="form-control" name='contactNum' placeholder='contactNum' onChange={(e) => { setcontactNum(e.target.value) }} required />
                                        <input type="text" class="form-control" name='customersupport' placeholder='customersupport' onChange={(e) => { setcustomerSupportNumber(e.target.value) }} required />
                                        <input type="text" class="form-control" name='feedbackemail' placeholder='feedbackemail' onChange={(e) => { setfeedbackEmail(e.target.value) }} required />


                                    </div>
                                    <input class="btn btn-primary" type="submit" value="Add Service Provider" onClick={toast1} />
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




                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br /><br />

                {/* table */}
                <div class="header">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div className="container">
                                    <table class="table table-dark table-striped">
                                        <thead class="">
                                            <tr>
                                                <th scope="col">ServiceProviderId</th>
                                                <th scope="col">ServiceProviderName</th>
                                                <th scope="col">ServiceName</th>
                                                <th scope="col">Address</th>
                                                <th scope="col">State</th>
                                                <th scope="col">City</th>
                                                <th scope="col">Pincode</th>
                                                <th scope="col">ContactNumber</th>
                                                <th scope="col">CustomerSupportNumber</th>
                                                <th scope="col">Feedbackemail</th>

                                                <th scope="col"></th>
                                                <th scope="col"></th>




                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                serviceproviderList.map((serviceprovider) => {
                                                    return (
                                                        <>

                                                            <tr>
                                                                <th scope="row">{serviceprovider._id}</th>
                                                                <td>{serviceprovider.name}</td>
                                                                <td>{serviceprovider.service.serviceName}</td>
                                                                <td>{serviceprovider.address}</td>
                                                                <td>{serviceprovider.state}</td>
                                                                <td>{serviceprovider.city}</td>
                                                                <td>{serviceprovider.pinCode}</td>
                                                                <td>{serviceprovider.contactNum}</td>
                                                                <td>{serviceprovider.customerSupportNumber}</td>
                                                                <td>{serviceprovider.feedbackEmail}</td>

                                                                <td>
                                                                    <button className="btn btn-danger" onClick={() => { deleteData(serviceprovider._id) }} >Delete</button>

                                                                </td>
                                                                <td>
                                                                    <Link to={`/updateService/${service._id}`} className="btn btn-success">UPDATE</Link>
                                                                </td>




                                                            </tr>

                                                        </>
                                                    )

                                                })
                                            }


                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>




            </div>
        </>
    )
}
