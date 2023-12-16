"use client";
import { useRef } from "react";
import Navbar from "../components/Navbar";

export default function SignupPage() {
  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const dateOfBirthInputRef = useRef();
  const passwordInputRef = useRef();
  const passwordConfirmationInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredDateOfBirth = dateOfBirthInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredPasswordConfirmation =
      passwordConfirmationInputRef.current.value;

    const newUserData = {
      first_name: enteredFirstName,
      last_name: enteredLastName,
      email: enteredEmail,
      date_of_birth: enteredDateOfBirth,
      password: enteredPassword,
    };

    fetch("http://localhost:4000/signup", {
      method: "POST",
      body: JSON.stringify({ user: newUserData }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      console.log("SUCCESS!!!!");
    });
  }

  return (
    <div>
      <Navbar />
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="first-name">First Name</label>
          <input type="text" required id="first-name" ref={firstNameInputRef} />
        </div>
        <div>
          <label htmlFor="last-name">Last Name</label>
          <input type="text" required id="last-name" ref={lastNameInputRef} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" required id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="date-of-birth">Date of Birth</label>
          <input
            type="date"
            required
            id="date-of-birth"
            ref={dateOfBirthInputRef}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            required
            id="password"
            ref={passwordInputRef}
          />
        </div>
        <div>
          <label htmlFor="password-confirmation">Password Confirmation</label>
          <input
            type="password"
            required
            id="password-confirmation"
            ref={passwordConfirmationInputRef}
          />
        </div>
        <div>
          <button>Sign up</button>
        </div>
      </form>
    </div>
  );
}
