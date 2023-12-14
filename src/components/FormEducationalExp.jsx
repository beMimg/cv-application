import { useState } from "react";

export default function FormEducationExp({ onSubmit }) {
  const [schoolName, setSchoolName] = useState("");
  const [studyTitle, setStudyTitle] = useState("");
  const [studyDate, setStudyDate] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  function submitInformation(e) {
    e.preventDefault();
    onSubmit(schoolName, studyTitle, studyDate);
    setIsSubmit(true);
  }

  return (
    <form onSubmit={(e) => submitInformation(e)}>
      <h1 className="info-container-title">Educational Experience</h1>
      {isSubmit ? (
        <>
          <button onClick={(e) => setIsSubmit(false)}>Edit</button>
        </>
      ) : (
        <>
          <div>
            <label>School name:</label>
            <input
              type="text"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Title of study:</label>
            <input
              type="text"
              value={studyTitle}
              onChange={(e) => setStudyTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Study conclusion:</label>
            <input
              type="date"
              pattern="\d{4}-\d{2}-\d{2}"
              placeholder="YYYY-MM-DD"
              title="Enter a date in the format YYYY-MM-DD"
              value={studyDate}
              onChange={(e) => setStudyDate(e.target.value)}
              required
            />
          </div>
          <button>Submit</button>
        </>
      )}
    </form>
  );
}
