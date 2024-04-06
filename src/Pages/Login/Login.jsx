import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const {signIn} = useContext(AuthContext);



    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email,password);


         signIn(email,password)

        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.error(error)
        })
    }





    return (
        <div>
            <Navbar></Navbar>


            <div className="">
                <h2 className="text-3xl my-10 text-center">Please Login</h2>
                {/* login section is a start */}
                <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder=" enter your email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder=" enter your password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center mt-2 "> Do not have an account <Link className="text-blue-600 font-bold" to='/register'> Register</Link> </p>
            </div>


        </div>
    );
};

export default Login;