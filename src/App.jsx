import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    submitted: false,
  });

  function handleSubmitGeneral(e) {
    e.preventDefault();
    setGeneralInfo((current) => {
      return {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        submitted: true,
      };
    });
  }

  console.log(generalInfo);

  function toggleSubmit() {
    setGeneralInfo((currentInfo) => {
      return {
        ...currentInfo,
        submitted: false,
      };
    });
  }

  console.log(generalInfo);
  return (
    <>
      <header>
        <h1>CV Application</h1>
      </header>
      <main>
        <div className="get-info-container">
          <form onSubmit={(e) => handleSubmitGeneral(e)}>
            <h1>General information</h1>
            {generalInfo.submitted ? (
              <button onClick={(e) => toggleSubmit()}>Edit</button>
            ) : (
              <>
                <label>
                  Full name:
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label>
                  Email:
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <label>
                  Phone number:
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </label>
                <button>Submit</button>
              </>
            )}
          </form>
          <form>
            <h1>Educational Experience</h1>
            <label>
              School name:
              <input type="text" />
            </label>
            <label>
              Title of study:
              <input type="text" />
            </label>
            <label>
              Date of study:
              <input type="text" />
            </label>
            <button>Submit</button>
          </form>
          <h1>Practical Experience</h1>
          <form>
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
            <p>Name: Bernardo Miguel Moreira Guerreiro</p>
            <p>email: bernardoguerreiro@gmail.com</p>
            <p>Phone number: 912828919</p>
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
