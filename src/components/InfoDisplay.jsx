export default function InfoDisplay({ person }) {
  return (
    <>
      <div className="general-information">
        <h1>General information</h1>
        <p>Name: {person.name}</p>
        <p>Email: {person.email}</p>
        <p>Phone number: {person.phoneNumber}</p>
      </div>
      <div className="educational-experiences">
        <h1>Educational Experiences</h1>
        <p>School: {person.schoolName}</p>
        <p>Title of Study: {person.studyTitle}</p>
        <p>Date of study: {person.studyDate}</p>
        <p></p>
      </div>
      <div className="practical-experience">
        <h1>Practical Experience</h1>
        <p>Company Name: {person.companyName}</p>
        <p>Position title: {person.positionTitle}</p>
        <p>Started Date: {person.startDate}</p>
        <p>Finish Date: {person.endDate}</p>
      </div>
    </>
  );
}
