
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import '../Css/style.css'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {

    const history = useNavigate();
    const [validated, setValidated] = useState(false);
    const [login, setLogin] = useState({
        email: "",
        password: ""
    })

    const handleLoginChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        });
    };

    const handleLoginSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        else if(login.email==="vijay@gmail.com" && login.password==="123"){
            localStorage.setItem("token-info", JSON.stringify(login)) 
            toast.success("Login Successful")
            history("/reg")
        }
        
        else
        {
            alert("Please Enter Correct email or password")
        }
        
        setValidated(true)
      };

    //   useEffect(() => {
    //     if (validated && login.email === 'vijay@gmail.com' && login.password === '123') {
    //       toast.success('Login Successful');
    //     }
    //   }, [validated, login, history]);

  return (
    <Form noValidate validated={validated} onSubmit={handleLoginSubmit} className='container bg-cream w-50 py-3 mt-3 border border-secondary rounded'>
        <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom01">
            <Form.Label>Email</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder="email"
                name='email'
                onChange={handleLoginChange}
                value={login.email}
            />
            {/* <Form.Control.Feedback>valid</Form.Control.Feedback> */}
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom02">
            <Form.Label>Password</Form.Label>
            <Form.Control
                required
                type="password"
                placeholder="password"
                name='password'
                onChange={handleLoginChange}
                value={login.password}
            />
            {/* <Form.Control.Feedback>valid</Form.Control.Feedback> */}
            </Form.Group>
        </Row>
        <Form.Group className="mb-3">
        <Form.Check
        required
        label="Agree to terms and conditions"
        feedback="You must agree before submitting."
        feedbackType="invalid"
        />
        </Form.Group>
        <Button type="submit">Login</Button>
        <ToastContainer position="top-center"/>
    </Form>
  )
}

export default Login;