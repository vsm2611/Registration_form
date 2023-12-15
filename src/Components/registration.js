import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from "axios";
// import { Link } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Menu from './navbar';

function Registration() {

    const [validated, setValidated] = useState(false);
    const [reg, setReg] = useState({
        firstName: '',
        lastName: '',
        altMobile: '',
        fatherName: '',
        mobile: '',
        dob: '',
        gender: '',
    });

    const handleChange = (e) => {
        setReg({
            ...reg,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity()=== true) {
            axios.post('https://656a163bde53105b0dd81fc9.mockapi.io/student/registration', {
                firstName: reg.firstName,
                lastName: reg.lastName,
                altMobile: reg.altMobile,
                fatherName: reg.fatherName,
                mobile: reg.mobile,
                dob: reg.dob,
                gender: reg.gender,
            }).then(() => {
                    setReg({
                        firstName: '',
                        lastName: '',
                        altMobile: '',
                        fatherName: '',
                        mobile: '',
                        dob: '',
                        gender: '',
                    });
                });
                toast.success("Registration Successful");
        } else {
            e.stopPropagation();
            toast.error("Registration Failed");
            setValidated(true)
        }
        
    }

    // const logout = () => {
    //     localStorage.removeItem("token-info");
    // };


    return (
        <div className='container'>
            <Menu/>
            <ToastContainer position="top-center" />
            <div className="row">
                <div className="col-md-12 d-flex justify-content-between align-items-center">
                    <div></div>
                    <div>
                    {/* <Link to={"/history"}>
                        <button className='btn btn-primary'>Show Data</button>
                    </Link> */}
                    {/* <Link to={"/"}>
                        <button className='btn btn-primary ms-3' onClick={logout}>Logout</button>
                    </Link> */}
                    </div>  
                </div>
            </div>
                <div className=" form-group row mb-4">
                    <div className="col-md-12 d-flex justify-content-between align-items-center">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">Student</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">Parent</label>
                        </div>
                    </div>
                </div>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="First name"
                            name='firstName'
                            onChange={handleChange}
                            value={reg.firstName}
                        />
                        <Form.Control.Feedback>valid</Form.Control.Feedback>

                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Last name"
                            name='lastName'
                            onChange={handleChange}
                            value={reg.lastName}
                        />
                        <Form.Control.Feedback>valid</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label>Father's Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Father Name"
                            name='fatherName'
                            onChange={handleChange}
                            value={reg.fatherName}
                        />
                        <Form.Control.Feedback>valid</Form.Control.Feedback>

                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom04">
                        <Form.Label>DOB</Form.Label>
                        <Form.Control
                            required
                            type="date"
                            placeholder="DOB"
                            name='dob'
                            onChange={handleChange}
                            value={reg.dob}
                        />
                        <Form.Control.Feedback>valid</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom05">
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            placeholder="Mobile"
                            name='mobile'
                            onChange={handleChange}
                            value={reg.mobile}
                        />
                        <Form.Control.Feedback>valid</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom06">
                        <Form.Label>Alternate mobile</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            placeholder="Alternate mobile"
                            name='altMobile'
                            onChange={handleChange}
                            value={reg.altMobile}
                        />
                        <Form.Control.Feedback>valid</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom07">
                    <Form.Label>Gender</Form.Label>
                    <Form.Select aria-label="Default select example" name='gender' onChange={handleChange} value={reg.gender} required>
                            <option defaultValue="gender"></option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Form.Select>
                        <Form.Control.Feedback>valid</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Button type="submit" className="btn btn-primary">Submit</Button>
            </Form>
        </div>
    )
}

export default Registration;