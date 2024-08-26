import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios'
import toast from "react-hot-toast";

const CreateAssignment = () => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());

  const handleCreateAssignment = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const thumbnail_url = form.thumbnail_url.value;
    const email = form.email.value;
    const due_data = startDate;
    const marks = parseInt(form.marks.value);
    const difficulty = form.difficulty.value;
    const description = form.description.value;
    const assignmentData = {
      title,
      thumbnail_url,
      due_data,
      marks,
      difficulty,
      description,
      creator_data: {
        email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
    };

    try{
        const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/assignments`, assignmentData)
        console.table(data)
        toast.success("Assignment Successfully Created")
    }catch(err){
        console.log(err);
        toast.error("An Error Occurred While Updating")
    }
    form.reset()
  };
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] py-12 bg-dot">
      <section className=" p-2 md:p-6 mx-auto rounded-md shadow-md bg-violet-300">
        <h2 className="text-2xl font-montserrat font-semibold text-gray-700 capitalize text-center">
          Create Assignment
        </h2>

        <form onSubmit={handleCreateAssignment}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700" htmlFor="title">
                Assignment Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-violet-100 border border-violet-200 rounded-md  focus:border-violet-400 focus:ring-violet-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="thumbnail_url">
                Thumbnail Photo
              </label>
              <input
                id="thumbnail_url"
                name="thumbnail_url"
                type="URL"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-violet-100 border border-violet-200 rounded-md  focus:border-violet-400 focus:ring-violet-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="emailAddress">
                Email Address
              </label>
              <input
                id="emailAddress"
                type="email"
                name="email"
                defaultValue={user?.email}
                disabled
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-violet-100 border border-violet-200 rounded-md  focus:border-violet-400 focus:ring-violet-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Due Date</label>

              {/* Date Picker Input Field */}
              <DatePicker
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-violet-100 border border-violet-200 rounded-md  focus:border-violet-400 focus:ring-violet-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="marks">
                Marks
              </label>
              <input
                id="marks"
                name="marks"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-violet border border-gray-200 rounded-md  focus:border-violet-400 focus:ring-violet-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700 " htmlFor="difficulty">
                Difficulty
              </label>
              <select
                name="difficulty"
                id="difficulty"
                className="border border-violet-500 p-2 rounded-md bg-violet-500"
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label className="text-gray-700 " htmlFor="description">
              Description
            </label>
            <textarea
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-violet-100 border border-violet-200 rounded-md  focus:border-violet-400 focus:ring-violet-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              name="description"
              id="description"
            ></textarea>
          </div>
          <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-violet-700 rounded-md hover:bg-violet-600 focus:outline-none focus:bg-violet-600">
              Create
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default CreateAssignment;
