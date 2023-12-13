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
      <h1>Educational Experience</h1>
      {isSubmit ? (
        <button onClick={(e) => setIsSubmit(false)}>Edit</button>
      ) : (
        <>
          <label>
            School name:
            <input
              type="text"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
            />
          </label>
          <label>
            Title of study:
            <input
              type="text"
              value={studyTitle}
              onChange={(e) => setStudyTitle(e.target.value)}
            />
          </label>
          <label>
            Study conclusion:
            <input
              type="date"
              pattern="\d{4}-\d{2}-\d{2}"
              placeholder="YYYY-MM-DD"
              title="Enter a date in the format YYYY-MM-DD"
              value={studyDate}
              onChange={(e) => setStudyDate(e.target.value)}
            />
          </label>
          <button>Submit</button>
        </>
      )}
    </form>
  );
}
