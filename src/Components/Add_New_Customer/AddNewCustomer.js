import React, { useRef } from "react";
import { toast } from "react-toastify";

const AddNewCustomer = () => {
  const user_name = useRef(null);
  const user_salary = useRef(null);
  const user_savings = useRef(null);

  const new_customer = (e) => {
    e.preventDefault();

    const new_user = {
      userName: user_name.current.value,
      salary: Number(user_salary.current.value),
      savings: Number(user_savings.current.value),
    };

    const old_data = localStorage.getItem("new_data")
      ? JSON.parse(localStorage.getItem("new_data"))
      : JSON.parse(localStorage.getItem("demo_data"));

    old_data.push(new_user);

    localStorage.setItem("new_data", JSON.stringify(old_data));

    user_name.current.value = "";
    user_salary.current.value = "";
    user_savings.current.value = "";

    toast("New User Added");

  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <form
        onSubmit={(e) => new_customer(e)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-80"
      >
        <label htmlFor="username" className="text-sm font-bold mb-2">
          User Name
        </label>
        <input
          id="username"
          type="text"
          placeholder="Enter your username"
          className="input-field"
          ref={user_name}
        />

        <label htmlFor="salary" className="text-sm font-bold mt-4 mb-2">
          Salary
        </label>
        <input
          id="salary"
          type="number"
          placeholder="Enter your salary"
          className="input-field"
          ref={user_salary}
        />

        <label htmlFor="savings" className="text-sm font-bold mt-4 mb-2">
          Savings
        </label>
        <input
          id="savings"
          type="number"
          placeholder="Enter your savings"
          className="input-field"
          ref={user_savings}
        />

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6 transition duration-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNewCustomer;
