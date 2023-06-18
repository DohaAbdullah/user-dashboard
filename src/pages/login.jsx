import { useState } from "react";
import PasswordIcon from "../icons/passwordIcon";
import axios from 'axios';

function Login() {
  const [user , setUser] = useState({email : "" , password: ""});
  console.log(user);


  function handleInputField(e) {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);

    setUser({...user , [name]: value})
  }

  return (
    <div>
      <div className="container my-10 mx-auto p-10 rounded-lg justify-center items-center h-auto w-2/5 bg-tertiary">
        <label
          name="email-address-icon"
          className="block  my-1.5  text-sm font-medium  dark:text-main"
        >
          Your Email
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </div>
          <input
            type="text"
            className="bg-secondary border border-paragraph text-button-text text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-9/12 pl-10 p-2.5  dark:bg-paragraph dark:border-paragraph dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@gmail.com"
            onChange={handleInputField}
            name="email"
          />
        </div>
        <label
          name="password-icon"
          className="block my-1.5  text-sm font-medium  dark:text-main"
        >
          Your Password
        </label>
        <div className="relative">
          <div className="absolute  inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <PasswordIcon />
          </div>
          <input
            type="password"
            name="password"
            className="bg-secondary border border-paragraph text-button-text text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-9/12 pl-10 p-2.5   dark:bg-paragraph dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="password"
            onChange={handleInputField}
          />
        </div>

        <button
          type="submit"
          className="text-main bg-background hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-paragraph dark:hover:bg-gray-700 dark:focus:ring-blue-800 my-5"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Login;
