import React, { useState } from "react";

const Form2 = () => {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
    country: "",
    age: "",
    isMarried: false,
  });

  const { username, password, country, age, isMarried } = formState;

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const val = type === "checkbox" ? e.target.checked : value;
    // setFormState({ ...formState, [name]: val });

    setFormState({ ...formState, [name]: val });
    console.log(formState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Register Form</h1>
        <label>
          username:{""}
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={handleChange}
          />
        </label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={age}
          onChange={handleChange}
        />
        <select
          name="country"
          id="countryId"
          value={country}
          onChange={handleChange}
        >
          <option value="India">India</option>
          <option value="Columbia">Columbia</option>
          <option value="USA">USA</option>
          <option value="Nepal">Nepal</option>
        </select>
        <label htmlFor="isMarried">
          isMarried :
          <input
            type="checkbox"
            id="isMarried"
            name="isMarried"
            checked={isMarried}
            onChange={handleChange}
          />
        </label>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form2;
