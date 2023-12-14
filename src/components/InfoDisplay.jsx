import TitleAndDescriptiption from "./TitleAndDescription";

export default function InfoDisplay({ person }) {
  return (
    <>
      <div className="section">
        <h1>General information</h1>
        <TitleAndDescriptiption
          desc={"Name"}
          person={person.name}
        ></TitleAndDescriptiption>
        <TitleAndDescriptiption
          desc="Email"
          person={person.email}
        ></TitleAndDescriptiption>
        <TitleAndDescriptiption
          desc={"Phone"}
          person={person.phoneNumber}
        ></TitleAndDescriptiption>
      </div>
      <div className="section">
        <h1>Educational Experiences</h1>
        <TitleAndDescriptiption
          desc="School"
          person={person.schoolName}
        ></TitleAndDescriptiption>
        <TitleAndDescriptiption
          desc={"Study title"}
          person={person.studyTitle}
        ></TitleAndDescriptiption>
        <TitleAndDescriptiption
          desc={"Study Conclusion"}
          person={person.studyDate}
        ></TitleAndDescriptiption>
      </div>
      <div className="section">
        <h1>Practical Experience</h1>
        <TitleAndDescriptiption
          desc={"Company Name"}
          person={person.companyName}
        ></TitleAndDescriptiption>
        <TitleAndDescriptiption
          desc={"Position Title"}
          person={person.positionTitle}
        ></TitleAndDescriptiption>
        <TitleAndDescriptiption
          desc={"Responsabilities"}
          person={person.responsabilities}
        ></TitleAndDescriptiption>
        <TitleAndDescriptiption
          desc={"Start"}
          person={person.startDate}
        ></TitleAndDescriptiption>
        <TitleAndDescriptiption
          desc={"Finish"}
          person={person.endDate}
        ></TitleAndDescriptiption>
      </div>
    </>
  );
}
