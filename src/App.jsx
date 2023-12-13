import { useState } from "react";
import "./App.css";
import FormGeneralInfo from "./components/FormGeneralInfo";

function App() {
  const [person, setPerson] = useState({
    name: "Example Examplify Me",
    email: "example@examplify.me",
    phoneNumber: "01010101010",
  });

  function getPerson(name, email, phoneNumber) {
    setPerson((current) => {
      return {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
      };
    });
  }

  console.log(person);
  return (
    <>
      <header>
        <h1>CV Application</h1>
      </header>
      <main>
        <div className="get-info-container">
          <FormGeneralInfo onSubmit={getPerson}></FormGeneralInfo>

          <form>
            <h1>Practical Experience</h1>
            <label>
              Company name:
              <input type="text" />
            </label>
            <label>
              Position title:
              <input type="text" />
            </label>
            <label>
              Main responsabilities of your job:
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </label>
            <label>
              Started date:
              <input type="date" />
            </label>
            <label>
              End date:
              <input type="date" />
            </label>
          </form>
        </div>
        <div className="display-info-container">
          <div className="general-information">
            <h1>General information</h1>
            <p>Name: {person.name}</p>
            <p>Email: {person.email}</p>
            <p>Phone number: {person.phoneNumber}</p>
          </div>
          <div className="educational-experiences">
            <h1>Educational Experiences</h1>
            <p>School: Escola Julio Dantas</p>
            <p>Title of Study: Tecnico em turismo</p>
            <p>Date of study: 29/2/2111</p>
            <p></p>
          </div>
          <div className="practical-experience">
            <h1>Practical Experience</h1>
            <p>Company Name: Boa Vista</p>
            <p>Position title: Recepcionist</p>
            <p>Started Date: 22/21/1111</p>
            <p>Finish Date: 22/22/1111</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
