import axios from "axios";
import React, { useState } from "react";
import FormData from "../components/formData";

const api = axios.create({ baseUrl: "http://localhost:3000/" });

function SignUp() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [inputError, setInputError] = useState({
    username: { isValid: true, errorMessage: "Please choose a username." },
    password: { isValid: true, errorMessage: "Please choose a password." },
    confirmPassword: {
      isValid: true,
      errorMessage: "Please choose a password.",
    },
  });

  const { username, password, confirmPassword } = user;

  const inputs = [
    {
      id: 1,
      name: "username",
      placeholder: "username",
      type: "text",
      label: "Username",
      errorMessage: inputError.username.errorMessage,
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
      isValid: inputError.username.isValid,
    },
    {
      id: 2,
      name: "password",
      placeholder: "password",
      type: "password",
      label: "Password",
      errorMessage: inputError.password.errorMessage,
      pattern: "/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/",
      required: true,
      isValid: inputError.password.isValid,
    },
    {
      id: 3,
      name: "confirmPassword",
      placeholder: "confirm password",
      type: "password",
      label: "Confirm Password",
      errorMessage: inputError.confirmPassword.errorMessage,
      pattern: user.password,
      required: true,
      isValid: inputError.confirmPassword.isValid,
    },
  ];

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setInputError({
      ...inputError,
      [name]: { ...inputError[name], isValid: true },
    });
    // console.log(inputError);
  };

  // const handleFormData = (e) => {
  //   const { name, value } = e.target;
  //   setUser({ ...user, [name]: value });

  // };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  const handleOnClick = (e) => {
    if (username & password & confirmPassword) {
      axios
        .post("http", user)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    setInputError({
      username: {
        ...inputError.username,
        isValid: !user.username ? false : true,
      },
      password: {
        ...inputError.password,
        isValid: !user.password ? false : true,
      },
      confirmPassword: {
        ...inputError.confirmPassword,
        isValid: !user.confirmPassword ? false : true,
      },
    });
  };

  return (
    <React.Fragment>
      <div className="container flex items-center justify-center  my-10 mx-auto p-1">
        <div className="w-full max-w-xs ">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleOnSubmit}
          >
            <div className="header block text-gray-700 text-md text-center font-bold mb-2">
              <h1>Create Account</h1>
            </div>

            {inputs.map((input) => (
              <FormData
                key={input.id}
                {...input}
                value={user[input.name]}
                onChange={onChange}
              />
            ))}

            <div className="flex items-center justify-between">
              <button
                className="bg-button hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleOnClick}
              >
                Sign Up
              </button>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2023 Doha. All rights reserved.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SignUp;
