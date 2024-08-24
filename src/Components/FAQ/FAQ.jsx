const FAQ = () => {
  const questions = [
    {
      id: 1,
      que: "How does the create assignment works?",
      ans: "Go to the create assignment page then fill up the form with Question, task and difficulty level. [Note: you have to logged in to do so.]",
    },
    {
      id: 2,
      que: "How does the submit assignment works?",
      ans: "Go to the submit assignment page then fill up the form with your answer. Once you fill up and satisfied your answer then click on the submit button. [Note: you have to logged in to do so.]",
    },
    {
      id: 3,
      que: "How does the rating assignment works?",
      ans: "Go to the rate assignment page then chose the submitted assignment that your posted and see the answers and only the post creator can rate the assignment. [Note: you have to logged in to do so.]",
    },
  ];
  return (
    <div className="w-11/12 mx-auto my-10">
      <h2 className="font-poppins text-sm md:text-lg font-medium text-violet-500 text-center mb-2">
        OUR FAQ
      </h2>
      <p className="font-montserrat text-lg md:text-2xl lg:text-3xl font-semibold text-violet-950 text-center w-11/12 md:w-4/5 lg:w-2/3 mx-auto mb-5 md:mb-10">
        Frequently Asked Questions
      </p>
      <section className="flex flex-col md:flex-row justify-between items-center md:gap-10 lg:gap-20">
        <div className="flex-1">
          {questions.map((question) => (
            <div
              key={question.id}
              className="collapse collapse-arrow bg-violet-200 w-full my-2"
            >
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                {question.que}
              </div>
              <div className="collapse-content">
                <p>{question.ans}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="md:w-1/3">
          <img src="https://i.ibb.co/SQTcrLV/banner-Img.png" alt="FAQ Image" />
        </div>
      </section>
    </div>
  );
};

export default FAQ;
