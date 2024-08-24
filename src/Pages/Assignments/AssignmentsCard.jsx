import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AssignmentsCard = ({ assignment }) => {
  const {
    _id,
    title,
    thumbnail_url,
    due_data,
    marks,
    difficulty,
    creator_data,
  } = assignment;

  console.log(assignment);
  return (
    <Link to={`/assignment/${_id}`} className="flex flex-col px-5 py-2 md:px-2 md:py-2 gap-2 group hover:bg-violet-200 backdrop-blur-sm border border-violet-400 rounded-lg">
      <div className={`bg-[url('${thumbnail_url}')] bg-cover w-full h-44 md:h-52 rounded-lg transition duration-500 group-hover:rounded-none flex items-center justify-center`}>
        <div className="text-white text-4xl font-bold hidden h-full w-full group-hover:bg-gray-900 group-hover:bg-opacity-50 group-hover:flex items-center justify-center"><p>Show Details</p></div>
      </div>
      <div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-start">
            <div className="avatar">
              <div className="w-10 h-10 rounded-full ring ring-violet-700">
                <img src={creator_data.photo} />
              </div>
            </div>
            <div>
                <p className="font-semibold text-gray-700 text-sm">{creator_data.name}</p>
                <p className="text-gray-700 text-xs"><span className="font-medium">Last Date: </span>{new Date(due_data).toLocaleDateString()}</p>
                <p className="text-lg font-montserrat font-semibold">{title}-[{marks} Marks]</p>
            </div>
          </div>
          <div>
            <p className={`p-2 ${difficulty==="Hard" && 'bg-red-400'} ${difficulty==="Medium" && 'bg-yellow-400'} ${difficulty==="Easy" && 'bg-green-400'} rounded-lg font-semibold`}>{difficulty}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};


AssignmentsCard.propTypes = {
    assignment: PropTypes.object 
}
export default AssignmentsCard;
