import axios from "axios";
import { useEffect, useState } from "react";
import AssignmentsCard from "./AssignmentsCard";

const AllAssignments = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios(`${import.meta.env.VITE_API_URL}/assignments`);
    setAssignments(data);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:p-10 bg-dot bg-violet-300">
      {assignments.map((assignment) => (
        <AssignmentsCard key={assignment._id} assignment={assignment} getData={getData}></AssignmentsCard>
      ))}
    </div>
  );
};

export default AllAssignments;
