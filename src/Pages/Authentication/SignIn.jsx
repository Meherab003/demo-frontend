import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { FaUser, FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const SignIn = () => {
  const {  signIn, signInWithGoogle } = useContext(AuthContext);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      toast.success("Signed In Successfully");
      console.log(result);
    } catch (err) {
      console.log(err);
      toast.error("Some Error Occurred While SignIn");
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    //User SignIn
    try {
      const result = await signIn(email, password);
      console.log(result?.user);
      toast.success("Signed In Successfully");
      form.reset();
    } catch (err) {
      console.log(err);
      toast.error("Some Error Occurred While SignIn");
    }
  };

  return (
    <div className="hero bg-dot">
      <div className="card bg-violet-300 w-11/12 md:w-1/2 lg:w-1/3 shrink-0 shadow-2xl flex flex-col justify-center items-center my-10">
        <div className="w-full reletive mx-auto flex items-center justify-center">
          <div className="p-4 border-4 border-white bg-violet-400 rounded-full absolute -top-8 ">
            <FaUser className="text-5xl text-white" />
          </div>
        </div>
        <form onSubmit={handleSignIn} className="card-body w-full pb-3">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Your Password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-violet-500 border-none text-white hover:text-violet-950">
              Login
            </button>
          </div>
        </form>
        <div className="card-body w-full pt-0">
          <div className="form-control">
            <button
              onClick={handleGoogleSignIn}
              className="btn bg-violet-500 border-none text-white hover:text-violet-950"
            >
              {" "}
              <span>
                <FaGoogle />
              </span>
              Login With Google
            </button>
          </div>
          <div className="mt-1 text-center text-sm md:text-[16px]">
            <p>{`Don't have an account? `}<Link className="text-violet-800 hover:underline" to='/register'>Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
