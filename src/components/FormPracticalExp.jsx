import { useState } from "react";

export default function FormPracticalExp({ onSubmit }) {
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [responsabilities, setResponsabilities] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  function submitInformation(e) {
    e.preventDefault();
    onSubmit(companyName, positionTitle, responsabilities, startDate, endDate);
    setIsSubmit(true);
  }

  return (
    <form onSubmit={(e) => submitInformation(e)}>
      <h1>Practical Experience</h1>
      {isSubmit ? (
        <button onClick={(e) => setIsSubmit(false)}>Edit</button>
      ) : (
        <>
          <label>
            Company name:
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </label>
          <label>
            Position title:
            <input
              type="text"
              value={positionTitle}
              onChange={(e) => setPositionTitle(e.target.value)}
            />
          </label>
          <label>
            Main responsabilities of your job:
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              value={responsabilities}
              onChange={(e) => setResponsabilities(e.target.value)}
            ></textarea>
          </label>
          <label>
            Started date:
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </label>
          <label>
            End date:
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </label>
          <button>Submit</button>
        </>
      )}
    </form>
  );
}
