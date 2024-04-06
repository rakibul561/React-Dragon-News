import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Register = () => {
    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget)
        console.log(form.get('email'));
    }






    return (
        <div>
            <Navbar></Navbar>


            <div className="">
                <h2 className="text-3xl my-10 text-center">Please Register</h2>
                {/* login section is a start */}
                <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder=" enter your Photo URL" name="photo" className="input input-bordered" required />
                    </div>
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
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center mt-2 "> Already have an account? <Link className="text-blue-600 font-bold" to='/login'>Login</Link> </p>
            </div>


        </div>
    );
};

export default Register;