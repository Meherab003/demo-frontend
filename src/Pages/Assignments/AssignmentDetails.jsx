import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const AssignmentDetails = () => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  const [inputType, setInputType] = useState("text");
  const navigate = useNavigate()
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

  const handleSubmitAssignment = async (e) => {
    e.preventDefault();
    if (creator_data?.email === user?.email)
      return toast.error("Action Not Permitted");
    const form = e.target;
    const assignmentID = _id;
    const email = user?.email;
    const creator_email = creator_data?.email;
    const submit_date = startDate;
    const answer = form.answer.value;

    const status = "Pending";

    const submittedAssignment = {
      assignmentID,
      email,
      creator_email,
      title,
      due_data,
      marks,
      difficulty,
      submit_date,
      status,
      answer,
    };
    console.table(submittedAssignment);

    try{
        const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/submitted_assignment`, submittedAssignment)
        console.log(data);
        toast.success("Assignment Successfully Submitted")
        navigate('/submitted_assignment')
    }catch(err){
        console.log(err);
        toast.error("Some Error Occurred While Submitting")
    }
    form.reset()
  };
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
                <td className="font-medium">Last Date</td>
                <td className="">{new Date(due_data).toLocaleDateString()}</td>
              </tr>
              <tr className="border-b-2 border-b-violet-900 bg-violet-300">
                <td className="font-medium">Marks</td>
                <td className="">{marks}</td>
              </tr>
              <tr className="border-b-2 border-b-violet-900 bg-violet-200">
                <td className="font-medium">Difficulty</td>
                <td className="">{difficulty}</td>
              </tr>
              <tr className="border-b-2 border-b-violet-900 bg-violet-300">
                <td className="font-medium">Created By</td>
                <td className="">{creator_data.name}</td>
              </tr>
            </tbody>
          </table>
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn bg-violet-500 my-5 text-white"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Take Assignment
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <div>
                {/*=======================modal================== */}
                <div className="flex justify-center items-center min-h-[calc(100vh-306px)] py-12 bg-dot">
                  <section className=" p-2 md:p-6 mx-auto rounded-md shadow-md bg-violet-300">
                    <h2 className="text-2xl font-montserrat font-semibold text-gray-700 capitalize text-center">
                      Submit Assignment
                    </h2>

                    <form onSubmit={handleSubmitAssignment}>
                      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div className="col-span-2">
                          <label className="text-gray-700 " htmlFor="title">
                            Assignment Title
                          </label>
                          <input
                            id="title"
                            type="text"
                            name="title"
                            defaultValue={title}
                            disabled
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-violet-100 border border-violet-200 rounded-md  focus:border-violet-400 focus:ring-violet-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                          />
                        </div>

                        <div>
                          <label className="text-gray-700 " htmlFor="marks">
                            Marks
                          </label>
                          <input
                            id="marks"
                            type="number"
                            name="marks"
                            defaultValue={marks}
                            disabled
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-violet-100 border border-violet-200 rounded-md  focus:border-violet-400 focus:ring-violet-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                          />
                        </div>

                        <div className="flex flex-col gap-2 ">
                          <label className="text-gray-700">Submit Date</label>

                          {/* Date Picker Input Field */}
                          <DatePicker
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-violet-100 border border-violet-200 rounded-md  focus:border-violet-400 focus:ring-violet-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                          />
                        </div>
                      </div>
                      {/* ==============================Answer Input=========================== */}
                      <div className="flex gap-4 mt-4">
                        <label className="text-gray-700 flex items-center">
                          <input
                            type="radio"
                            value="text"
                            checked={inputType === "text"}
                            onChange={() => setInputType("text")}
                            className="mr-2 radio radio-primary"
                          />
                          Write Answer
                        </label>
                        <label className="text-gray-700 flex items-center">
                          <input
                            type="radio"
                            value="file"
                            checked={inputType === "file"}
                            onChange={() => setInputType("file")}
                            className="mr-2 radio radio-primary"
                          />
                          Upload File
                        </label>
                      </div>

                      {inputType === "text" ? (
                        <div className="flex flex-col gap-2 mt-4">
                          <label className="text-gray-700" htmlFor="answer">
                            Answer
                          </label>
                          <textarea
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-violet-100 border border-violet-200 rounded-md focus:border-violet-400 focus:ring-violet-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                            name="answer"
                            id="answer"
                          ></textarea>
                        </div>
                      ) : (
                        <div className="flex flex-col gap-2 mt-4">
                          <label className="text-gray-700" htmlFor="answer">
                            Upload Answer
                          </label>
                          <input
                            id="answer"
                            type="file"
                            name="answer"
                            accept=".pdf,.doc,.docx"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-violet-100 border border-violet-200 rounded-md focus:border-violet-400 focus:ring-violet-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                          />
                        </div>
                      )}

                      {/* ====================================================================== */}
                      <div className="flex justify-end mt-6">
                        <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-violet-700 rounded-md hover:bg-violet-600 focus:outline-none focus:bg-violet-600">
                          Submit
                        </button>
                      </div>
                    </form>
                  </section>
                </div>
                {/*=======================modal================== */}
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;
