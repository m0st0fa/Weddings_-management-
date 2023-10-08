
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import app from "../../Firebase/Firebase.confing";
import NavBar from "../NavBar/NavBar";


const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location in the login page', location);
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();

    const handleGoogleSingUp = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const { singIn } = useContext(AuthContext)
    const [succes, setSucces] = useState('')
    const handleLogin = event => {

        event.preventDefault()
        const form = new FormData(event.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)
        // signIn user 
        singIn(email, password)
            .then(result => {
                console.log(result.user)
                setSucces('User login succesfull')
                // navigate after the login 
                navigate(location?.state ? location.state : '/');

            })
            .catch(error => {
                console.error(error)
            })

    }

    return (
        <div>
            <NavBar></NavBar>
            <h2 className="text-3xl my-10 text-center font-bold text-blue-400">Place Login</h2>
            <form onSubmit={handleLogin} className=" md:w-3/4 lg: w-1/2 mx-auto">
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
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                <div className="mx-auto items-center mt-6">
                    <button onClick={handleGoogleSingUp} className="btn">Signup With Google</button>
                </div>

            </form>
            <div className="text-center mx-auto">
                {
                    succes && <p className="text-green-600">{succes}</p>
                }
            </div>
            <div className="text-center mt-4 ">
                <p>Do Not Have An Account?
                    <Link className="text-blue-600" to='/Register'>Register</Link>
                </p>
            </div>

        </div>

    );
};

export default Login;