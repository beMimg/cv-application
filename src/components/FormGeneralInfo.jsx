import { useState } from "react";

export default function FormGeneralInfo({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  function submitInformation(e) {
    e.preventDefault();
    onSubmit(name, email, phoneNumber);
    setIsSubmit(true);
  }

  return (
    <form onSubmit={(e) => submitInformation(e)}>
      <h1 className="info-container-title">General information</h1>
      {isSubmit ? (
        <button onClick={(e) => setIsSubmit(false)}>Edit</button>
      ) : (
        <>
          <div>
            <label>Full name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Phone number:</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <button>Submit</button>
        </>
      )}
    </form>
  );
}
