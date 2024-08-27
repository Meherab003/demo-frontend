import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import toast from "react-hot-toast";
import { FaDotCircle } from "react-icons/fa";

const PendingAssignmentSubmits = () => {
  const { user } = useContext(AuthContext);
  const [pendingSubmits, setPendingSubmits] = useState([]);

  useEffect(() => {
    getData();
  }, [user]);

  const getData = async () => {
    const { data } = await axios(
      `${import.meta.env.VITE_API_URL}/pending_assignments/${user?.email}`
    );
    setPendingSubmits(data);
  };

  const handleExamineAssignment = (e) => {
    e.preventDefault();
    const form = e.target;
    const newScore = form.score.value;
    const updatedFeedback = form.feedback.value;
    const status = form.status.value;
    const id = form.id.value;
    handleUpdateResponse(id, newScore, updatedFeedback, status, "Completed");
    form.reset();
  };

  const handleUpdateResponse = async (
    id,
    score,
    feedback,
    prevStatus,
    status
  ) => {
    if (prevStatus === status) return toast.error("Already Examined");
    const { data } = await axios.patch(
      `${import.meta.env.VITE_API_URL}/submitted_assignment/${id}`,
      { score, feedback, status }
    );
    toast.success("Assignment Examined Successfully");

    getData(data);
  };
  return (
    <div className="p-2 lg:px-5">
      <div className="overflow-x-auto">
        <table className="table table-xs font-medium text-gray-600">
          <thead>
            <tr className="bg-violet-300">
              <th></th>
              <th>Title</th>
              <th>Marks</th>
              <th>Submitted By</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {pendingSubmits.map((pendingSubmit, idx) => (
              <tr
                key={pendingSubmit._id}
                className={`hover:bg-violet-100 ${
                  idx % 2 === 0 && "bg-violet-50"
                }`}
              >
                <th>{idx}</th>
                <td>{pendingSubmit.title}</td>
                <td>{pendingSubmit.marks}</td>
                <td>{pendingSubmit.submitted_by}</td>
                <td
                  className={`${
                    pendingSubmit.status === "Pending" && "text-blue-500"
                  } ${pendingSubmit.status === "Completed" && "text-green-500"}
                  flex items-center justify-start gap-2`}
                >
                  <FaDotCircle /> {pendingSubmit.status}
                </td>
                <td>
                  {/* You can open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    className="btn btn-xs bg-violet-400 text-white font-semibold hover:bg-violet-500"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Examine Assignment
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
                              Examine Assignment
                            </h2>

                            <p className="text-start text-gray-700 text-lg md:text-xl mt-3">
                              <span className=" font-semibold">Title: </span>
                              {pendingSubmit.title}
                            </p>

                            {/* ===================================================================== */}

                            {!pendingSubmit.answer ? (
                              <div>No file to display</div>
                            ) : (
                              <div className="file-viewer w-full ">
                                {pendingSubmit.answer.endsWith(".pdf") && (
                                  <DocViewer
                                    documents={[{ uri: pendingSubmit.answer }]}
                                    pluginRenderers={DocViewerRenderers}
                                  />
                                )}

                                {pendingSubmit.answer.endsWith(".doc") ||
                                  (pendingSubmit.answer.endsWith(".docx") && (
                                    <DocViewer
                                      documents={[
                                        { uri: pendingSubmit.answer },
                                      ]}
                                      pluginRenderers={DocViewerRenderers}
                                    />
                                  ))}

                                {!pendingSubmit.answer.endsWith(".pdf") &&
                                  !(
                                    pendingSubmit.answer.endsWith(".doc") ||
                                    pendingSubmit.answer.endsWith(".docx")
                                  ) && (
                                    <div>
                                      <p>
                                        Unsupported file type. Please upload a
                                        PDF or DOC file.
                                      </p>
                                      <a
                                        href={pendingSubmit.answer}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        View the file directly
                                      </a>
                                    </div>
                                  )}
                              </div>
                            )}

                            {/* ============================================================= */}

                            <p className="mt-2">
                              <span className="text-gray-700 font-semibold">
                                Note:{" "}
                              </span>
                              {pendingSubmit.note}
                            </p>

                            <form onSubmit={handleExamineAssignment}>
                              <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div className="col-span-2">
                                  <label
                                    className="text-gray-700 "
                                    htmlFor="score"
                                  >
                                    Give Mark
                                  </label>
                                  <input
                                    id="score"
                                    type="number"
                                    name="score"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-violet-100 border border-violet-200 rounded-md  focus:border-violet-400 focus:ring-violet-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                  />
                                </div>
                                <div className="hidden">
                                  <label
                                    className="text-gray-700 "
                                    htmlFor="status"
                                  >
                                    Status
                                  </label>
                                  <input
                                    id="status"
                                    type="text"
                                    name="status"
                                    defaultValue={pendingSubmit.status}
                                    disabled
                                    className="hidden"
                                  />
                                </div>
                                <div className="hidden">
                                  <label
                                    className="text-gray-700 "
                                    htmlFor="id"
                                  >
                                    ID
                                  </label>
                                  <input
                                    id="id"
                                    type="text"
                                    name="id"
                                    defaultValue={pendingSubmit._id}
                                    disabled
                                    className="hidden"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col gap-2 mt-4">
                                <label
                                  className="text-gray-700"
                                  htmlFor="feedback"
                                >
                                  Feedback
                                </label>
                                <textarea
                                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-violet-100 border border-violet-200 rounded-md focus:border-violet-400 focus:ring-violet-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                  name="feedback"
                                  id="feedback"
                                ></textarea>
                              </div>
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingAssignmentSubmits;
