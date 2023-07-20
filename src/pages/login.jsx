import { useState } from "react";
import PasswordIcon from "../icons/passwordIcon";
import axios from "axios";

function Login() {
  const [user, setUser] = useState({ username: "", password: "" });

  const [errorMessage, setErrorMessage] = useState("");

  function handleInputField(e) {
    const { name, value } = e.target;

    console.log(name);
    console.log(value);

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
  }

  return (
    <div>
      <div className="container my-10 mx-auto p-10 rounded-lg justify-center items-center h-auto w-2/5 bg-tertiary">
        
      </div>
    </div>
  );
}

export default Login;
