import axios from "axios";
import React, { useState } from "react";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    checkpassword: "",
  });

  const { username, email, password, checkpassword } = formData;

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: "", email: "", password: "" });
  };

  const handleOnClick = (e) =>{
    if(username & email & password & checkpassword){
        axios.send("http" , user)
    }
  }

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
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleFormData}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Email"
                type="text"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleFormData}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                name="password"
                value={password}
                onChange={handleFormData}
              />
              <p className="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Check Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="check password"
                type="check password"
                placeholder="******************"
                name="checkpassword"
                value={checkpassword}
                onChange={handleFormData}
              />
              <p className="text-red-500 text-xs italic">
                Please choose a password.
              </p>
            </div>
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
                href="#"
              >
                Forgot Password?
              </a>
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
