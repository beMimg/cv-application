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
      <h1>General information</h1>
      {isSubmit ? (
        <button onClick={(e) => setIsSubmit(false)}>Edit</button>
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
  );
}
