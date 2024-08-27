import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import axios from "axios";
import { FaDotCircle } from "react-icons/fa";

const MySubmittedAssignments = () => {
  const { user } = useContext(AuthContext);
  const [mySubmits, setMySubmits] = useState([]);

  useEffect(() => {
    getData();
  }, [user]);

  const getData = async () => {
    const { data } = await axios(
      `${import.meta.env.VITE_API_URL}/my_submitted_assignment/${user?.email}`
    );
    setMySubmits(data);
  };
  console.table(mySubmits);
  return (
    <div className="p-2 lg:px-5">
      <div className="overflow-x-auto">
        <table className="table table-xs font-medium text-gray-600">
          <thead>
            <tr className="bg-violet-300">
              <th></th>
              <th>Title</th>
              <th>Status</th>
              <th>Marks</th>
              <th>My Score</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {mySubmits.map((mySubmit, idx) => (
              <tr
                key={mySubmit._id}
                className={`hover:bg-violet-100 ${
                  idx % 2 === 0 && "bg-violet-50"
                }`}
              >
                <th>{idx}</th>
                <td>{mySubmit.title}</td>
                <td
                  className={`${
                    mySubmit.status === "Pending" && "text-blue-500"
                  } ${
                    mySubmit.status === "Completed" &&
                    "text-green-500"
                  }
                  flex items-center justify-start gap-2`}
                >
                  <FaDotCircle /> {mySubmit.status}
                </td>
                <td>{mySubmit.marks}</td>
                <td>
                  {mySubmit.score === null ? "Not Given Yet" : mySubmit.score}
                </td>
                <td>{mySubmit.feedback}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySubmittedAssignments;
