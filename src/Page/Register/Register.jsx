/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import NavBar from "../NavBar/NavBar";
import Swal from 'sweetalert2';

const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [succes, setSucces] = useState('')
    const { createUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, password);

        // reset error
        setRegisterError('')
        setSucces('')

        // password validate
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!passwordRegex.test(password)) {
            setRegisterError('Password should be at least 8 characters long and contain at least one letter, one number, and one special character.');
            return;
        }

        //  create User 
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setSucces('user crated succesfully ')

            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            });



    }
    return (
        <div>
            <NavBar />
            <h2 className="text-3xl my-10 text-center font-bold text-blue-400">Place Register</h2>
            <form onSubmit={handleRegister} className=" md:w-3/4 lg: w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <div className="text-center mt-4 ">
                <p>Already Have an Account?
                    <Link className="text-blue-600" to='/login'>Login</Link>
                </p>
            </div>
            <div className="text-center text-red-500">
                {
                    registerError && <p>{registerError} </p>

                }
                {
                    succes && <p className="text-green-600">{succes}</p>
                }

            </div>

        </div>
    );
};

export default Register;
