
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import NavBar from "../NavBar/NavBar";


const Login = () => {
    const {singIn} = useContext(AuthContext)
    const handleLogin = event =>{
        event.preventDefault()
        const form = new FormData(event.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email,password)
        // signIn user 
        singIn(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error)
        })
    }

    return (
        <div>
            <NavBar></NavBar>
            <h2 className="text-3xl my-10 text-center font-bold text-blue-400">Place Login</h2>
            <form  onSubmit={handleLogin} className=" md:w-3/4 lg: w-1/2 mx-auto">
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
            </form>
            <div className="text-center mt-4 ">
                <p>Do Not Have An Account?
                    <Link className="text-blue-600" to='/Register'>Register</Link>
                </p>
            </div>
        </div>

    );
};

export default Login;