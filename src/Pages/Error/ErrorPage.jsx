import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col space-x-2 items-center justify-center h-screen">
      <h2 className="text-6xl text-violet-700 text-center font-semibold font-montserrat italic">Opps...!</h2>
      <div className="flex items-center justify-center">
        <img
          className=""
          src="https://png.pngtree.com/png-vector/20200313/ourmid/pngtree-page-not-found-error-404-concept-with-people-trying-to-fix-png-image_2157908.jpg"
          alt={error.status}
        />
      </div>
      <div className="flex items-center justify-center">
        <Link
          className="btn btn-sm md:btn-md bg-transparent hover:bg-white rounded-md border-2 border-violet-800 text-violet-950 lg:text-lg hover:text-violet-950 lg:my-10"
          to="/"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
