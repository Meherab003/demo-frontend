import { Toaster } from "react-hot-toast";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Registration = () => {
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
  };
  return (
    <div className="hero bg-dot">
      <div className="card bg-violet-300 w-11/12 md:w-1/2 lg:w-1/3 shrink-0 shadow-2xl flex flex-col justify-center items-center my-10">
        <div className="w-full reletive mx-auto flex items-center justify-center">
          <div className="p-4 border-4 border-white bg-violet-400 rounded-full absolute -top-8 ">
            <FaUser className="text-5xl text-white" />
          </div>
        </div>
        <form onSubmit={handleRegister} className="card-body w-full pb-3">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="url"
              placeholder="Your PhotoURL"
              name="photoURL"
              className="input input-bordered"
              required
            />
          </div>
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
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-violet-500 border-none text-white hover:text-violet-950">
              Register
            </button>
          </div>
        </form>
        <div className="card-body w-full pt-0">
          <div className="mt-1 text-center text-sm md:text-[16px]">
            <p>Already have an account? <Link className="text-violet-800 hover:underline" to='/signin'>SignIn</Link></p>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Registration;
