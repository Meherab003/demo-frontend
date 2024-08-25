import { useLoaderData } from "react-router-dom";

const AssignmentDetails = () => {
  const assignment = useLoaderData();
  const {
    _id,
    title,
    thumbnail_url,
    due_data,
    marks,
    difficulty,
    description,
    creator_data,
  } = assignment;
  return (
    <div className="flex justify-center items-center p-3 md:p-10 bg-dot">
      <div className="border rounded-lg p-2 md:p-5 shadow-lg bg-violet-100">
        <div className="flex justify-center items-center">
          <img
            className="md:w-[600px] lg:w-[800px]"
            src={thumbnail_url}
            alt="thumbnail"
          />
        </div>
        <div className="flex flex-col items-center justify-center mt-2 md:mt-5 px-3 md:px-10">
          <p className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-bold">
            {title}
          </p>
          <p className="text-sm  text-center text-gray-700 font-medium my-1">
            {description}
          </p>
          <table className="w-full mt-2">
            <tbody>
              <tr className="border-b-2 border-b-violet-900 bg-violet-200">
                <td className="">Last Date</td>
                <td className="">{new Date(due_data).toLocaleDateString()}</td>
              </tr>
              <tr className="border-b-2 border-b-violet-900 bg-violet-300">
                <td className="">Marks</td>
                <td className="">{marks}</td>
              </tr>
              <tr className="border-b-2 border-b-violet-900 bg-violet-200">
                <td className="">Difficulty</td>
                <td className="">{difficulty}</td>
              </tr>
              <tr className="border-b-2 border-b-violet-900 bg-violet-300">
                <td className="">Created By</td>
                <td className="">{creator_data.name}</td>
              </tr>
            </tbody>
          </table>
          <button className="btn bg-violet-500 my-5 text-white">Take Assignment</button>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;
