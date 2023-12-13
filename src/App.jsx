import { useState } from "react";
import "./App.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FormGeneralInfo from "./components/FormGeneralInfo";
import FormEducationExp from "./components/FormEducationalExp";
import FormPracticalExp from "./components/FormPracticalExp";
import InfoDisplay from "./components/InfoDisplay";

function App() {
  const [person, setPerson] = useState({
    name: "Example Examplify Me",
    email: "example@examplify.me",
    phoneNumber: "01010101010",
    schoolName: "University Example",
    studyTitle: "Examplition",
    studyDate: "ex-am-ple",
    companyName: "Inc Example",
    positionTitle: "Example Manager",
    responsabilities:
      "Example responsibility, exemplifying expertise in handling diverse tasks. Exceptional problem-solving, ensuring exemplary outcomes. Effectively executing projects, setting an example for team collaboration. Exemplary communication, fostering a positive work environment. Exceptional time management, an example for meeting tight deadlines. Consistently exceeding expectations, an example of dedication and excellence. Embracing challenges, setting an example of adaptability. Ensuring quality work, an example of meticulous attention to detail. Exemplifying leadership, guiding the team towards success. Expertly managing resources, setting an example for efficiency. Proactively identifying opportunities, an example of strategic thinking. Maintaining professionalism, setting an example for workplace conduct. Exceptional organization skills, an example of structured work approach. Leading by example, fostering a culture of continuous improvement. Expertly navigating complexities, an example of resilience and agility.",
    startDate: "ex-am-ple",
    endDate: "ex-am-ple",
  });

  function getGeneralInformation(name, email, phoneNumber) {
    setPerson((current) => {
      return {
        ...current,
        name: name,
        email: email,
        phoneNumber: phoneNumber,
      };
    });
  }

  function getEducationalExperience(schoolName, studyTitle, studyDate) {
    setPerson((current) => {
      return {
        ...current,
        schoolName: schoolName,
        studyTitle: studyTitle,
        studyDate: studyDate,
      };
    });
  }

  function getPracticalExperience(
    companyName,
    positionTitle,
    responsabilities,
    startDate,
    endDate
  ) {
    setPerson((current) => {
      return {
        ...current,
        companyName: companyName,
        positionTitle: positionTitle,
        responsabilities: responsabilities,
        startDate: startDate,
        endDate: endDate,
      };
    });
  }

  return (
    <>
      <header>
        <h1>CV Application</h1>
      </header>
      <main>
        <div className="get-info-container">
          <FormGeneralInfo onSubmit={getGeneralInformation}></FormGeneralInfo>
          <FormEducationExp
            onSubmit={getEducationalExperience}
          ></FormEducationExp>
          <FormPracticalExp
            onSubmit={getPracticalExperience}
          ></FormPracticalExp>
        </div>
        <div className="display-info-container">
          <InfoDisplay person={person}></InfoDisplay>
        </div>
      </main>
    </>
  );
}

export default App;
