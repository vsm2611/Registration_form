import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function Update() {
    const { id } = useParams();
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        altMobile: '',
        fatherName: '',
        mobile: '',
        dob: '',
        gender: '',
    });

    const getData = () => {
        axios.get(`https://656a163bde53105b0dd81fc9.mockapi.io/student/registration/${id}`)
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    };

    const handleUpdate = () => {
        axios.put(`https://656a163bde53105b0dd81fc9.mockapi.io/student/registration/${id}`, data)
            .catch((error) => {
                console.error("Update failed: ", error);
            });
    };

    useEffect(() => {
        getData()
    }, [id]);

    const handleInputChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

  return (
    <>
        <div className="container">
            <h1>Update Information</h1>
            <form action="">
                <div className="row my-3">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="fname">First Name</label>
                            <input 
                            type="text"
                            className="form-control"
                            value={data.firstName}
                            onChange={handleInputChange}
                            name="firstName"
                            />
                        </div>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="lname">Last Name</label>
                            <input 
                            type="text" 
                            className='form-control' 
                            value={data.lastName}
                            onChange={handleInputChange}
                            name="lastName"
                            />
                        </div>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="altmobile">Alternate Mobile</label>
                            <input 
                            type="number" 
                            className='form-control'
                            value={data.altMobile}
                            onChange={handleInputChange}
                            name='altMobile'
                            />
                        </div>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="mobile">Mobile</label>
                            <input 
                            type="number" 
                            className='form-control' 
                            name='mobile'
                            value={data.mobile}
                            onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="dob">DOB</label>
                            <input 
                            type="date" 
                            className='form-control' 
                            name='dob'
                            value={data.dob}
                            onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="father">Father's Name</label>
                            <input 
                            type="text" 
                            className='form-control' 
                            name='fatherName'
                            value={data.fatherName}
                            onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-md-6">
                        <div className="form-group">
                            <select className="form-select" name='gender' value={data.gender} onChange={handleInputChange}>
                                <option value="">Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <Link to={"/history"}>
                            <button className='btn btn-primary me-3' onClick={handleUpdate}>Update</button>
                        </Link>
                        <Link to={"/history"}>
                            <button className='btn btn-secondary'>Back</button>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    </>
  )
}

export default Update;