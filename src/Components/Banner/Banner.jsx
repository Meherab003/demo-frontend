import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:px-10 py-3 md:py-5 lg:px-20 lg:py-16 bg-violet-950 rounded-b-badge mb-10 text-white bg-dot">
      <div>
        <div className="flex flex-col items-start justify-center gap-3 p-3 md:p-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-montserrat">
            Create, Submit And Rate Assignments
          </h2>
          <h3 className="text-sm md:text-[16px] lg:text-2xl font-medium font-montserrat">
            Our Own <span className="text-yellow-500">Group Study</span> And{" "}
            <span className="text-yellow-500">Assignment</span> Webpage
          </h3>
          <Link
            to="/assignment"
            className="btn btn-sm md:btn-md bg-transparent border-2 border-violet-700 hover:bg-violet-800 hover:bg-opacity-30 hover:border-violet-500 text-white hover:text-white  mt-2 md:mt-4 lg:mt-5"
          >
            Explore Assignments
          </Link>
        </div>
      </div>
      <div>
        <img src="https://i.ibb.co/SQTcrLV/banner-Img.png" alt="Banner Image" />
      </div>
    </div>
  );
};

export default Banner;
