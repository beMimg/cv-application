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
      <h1 className="info-container-title">Practical Experience</h1>
      {isSubmit ? (
        <button onClick={(e) => setIsSubmit(false)}>Edit</button>
      ) : (
        <>
          <div>
            <label>Company name:</label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Position title:</label>
            <input
              type="text"
              value={positionTitle}
              onChange={(e) => setPositionTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Main responsabilities of your job:</label>
            <textarea
              name=""
              id=""
              value={responsabilities}
              onChange={(e) => setResponsabilities(e.target.value)}
              maxLength={70}
              required
            ></textarea>
          </div>
          <div>
            <label>Started date:</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label>End date:</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>
          <button>Submit</button>
        </>
      )}
    </form>
  );
}
