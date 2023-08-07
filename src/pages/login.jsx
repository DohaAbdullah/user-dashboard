import { useState } from "react";
import axios from "axios";
import FormData from "../components/formData";

function Login() {
  const [user, setUser] = useState({ username: "", password: "" });
  const [inputError, setInputError] = useState({
    username: { isValid: true, errorMessage: "Please choose a username." },
    password: { isValid: true, errorMessage: "Please choose a password." },
    confirmPassword: {
      isValid: true,
      errorMessage: "Please choose a password.",
    },
  });

  const { username, password } = user;

  // if (user.email && user.password) {
  //   axios
  //     .post("http://url/user/login", user)
  //     .then((response) => {
  //       console.log(response)
  //       console.log(response.data);
  //       Login(response.data.token);
  //       setUser(response.data);
  //       window.location.replace("/");
  //     })
  //     .catch((error) => {
  //       setErrorMessage(error.response.data.errors);
  //       setUser({ ...user, [name]: value });
  //     });
  // }

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
    if (username & password) {
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
    });
  };

  return (
    <div className="container flex items-center justify-center  my-10 mx-auto p-1">
      <div className="w-full max-w-xs ">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleOnSubmit}
        >
          <div className="header block text-gray-700 text-md text-center font-bold mb-2">
            <h1>Login</h1>
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
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-headline hover:text-secondary"
              href="/"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
