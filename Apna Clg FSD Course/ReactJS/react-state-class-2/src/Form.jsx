import { useState } from "react";

export default function Form() {
  // let [fullName, setFullName] = useState("Simon");
  // let [userName, setUserName] = useState("Simon");
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });

  // let handleNameChange = (event) => {
  //     // console.log(event.target.value);
  //     setFullName(event.target.value);
  // };
  // let handleUserNameChange = (event) => {
  //     // console.log(event.target.value);
  //     setUserName(event.target.value);
  // };

  let handleInputChange = (event) => {
    // let fieldName = event.target.name;
    // let newValue = event.target.value;
    // console.log(`${fileName} : ${newValue}`);

    setFormData ( (currData) => {
        // currData[fieldName] = newValue;
        // return {...currData};
        return {...currData, [event.target.name]: event.target.value};
  })
  };

  let handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
    setFormData({
        fullName: "",
        userName: "",
        password: "",
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">Full Name</label>
      <input
        placeholder="Enter your name"
        type="text"
        value={formData.fullName}
        onChange={handleInputChange}
        id="fullName"
        name="fullName"
      />
      <br />
      <label htmlFor="username">Username</label>
      <input
        placeholder="Enter your name"
        type="text"
        value={formData.userName}
        onChange={handleInputChange}
        id="username"
        name="userName"
      />
      <br />
      <label htmlFor="password">Password</label>
      <input
        placeholder="Enter password"
        type="password"
        value={formData.password}
        onChange={handleInputChange}
        id="password"
        name="password"
      />
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}
