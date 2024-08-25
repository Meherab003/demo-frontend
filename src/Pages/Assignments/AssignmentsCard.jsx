import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";

const AssignmentsCard = ({ assignment, getData }) => {
  const { user } = useContext(AuthContext);
  const {
    _id,
    title,
    thumbnail_url,
    due_data,
    marks,
    difficulty,
    creator_data,
  } = assignment;

  const handleDelete = async (id) => {
    if (creator_data?.email !== user?.email)
      return toast.error("Action Not Permitted");
    try{
        const {data} = await axios.delete(`${import.meta.env.VITE_API_URL}/assignment/${id}`)
        console.log(data)
        toast.success("Successfully Deleted")
        getData()
    }catch(err){
        console.log(err);
        toast.error("Some Error Occurred While Deleting")
    }
  };
  return (
    <div className="flex flex-col px-5 py-2 md:px-2 md:py-2 gap-2 group hover:bg-violet-200 backdrop-blur-sm  rounded-lg">
      <div
        className={`bg-[url('${thumbnail_url}')] bg-cover w-full h-44 md:h-52 rounded-lg transition duration-500 group-hover:rounded-none flex items-center justify-center`}
      >
        <Link
          to={`/assignment/${_id}`}
          className="text-white text-4xl font-bold hidden h-full w-full group-hover:bg-gray-900 group-hover:bg-opacity-50 group-hover:flex items-center justify-center"
        >
          <p>Show Details</p>
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-start">
            <div className="avatar">
              <div className="w-10 h-10 rounded-full ring ring-violet-700">
                <img src={creator_data.photo} />
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-700 text-sm">
                {creator_data.name}
              </p>
              <p className="text-gray-700 text-xs">
                <span className="font-medium">Last Date: </span>
                {new Date(due_data).toLocaleDateString()}
              </p>
              <p className="text-lg font-montserrat font-semibold">
                {title}-[{marks} Marks]
              </p>
            </div>
          </div>
          <div>
            <p
              className={`p-2 ${difficulty === "Hard" && "bg-red-400"} ${
                difficulty === "Medium" && "bg-yellow-400"
              } ${
                difficulty === "Easy" && "bg-green-400"
              } rounded-lg font-semibold`}
            >
              {difficulty}
            </p>
          </div>
        </div>
        <div className="flex justify-start gap-2 items-center">
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-sm border-none bg-violet-400 text-black"
          >
            <MdDeleteSweep className="text-lg" />
            Delete
          </button>
          <Link to={`/update/${assignment._id}`} className="btn btn-sm border-none bg-violet-400 text-black">
            <FaEdit />
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
};

AssignmentsCard.propTypes = {
  assignment: PropTypes.object,
};
AssignmentsCard.propTypes = {
  getData: PropTypes.func,
};
export default AssignmentsCard;
