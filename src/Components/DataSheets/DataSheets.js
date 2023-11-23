import React, { useEffect, useState } from "react";

const DemoTable = () => {
  const DEMO_DATA = [
    { userName: "John Doe", salary: 50000, savings: 2000 },
    { userName: "Jane Smith", salary: 60000, savings: 3500 },
    { userName: "Tom Johnson", salary: 75000, savings: 5000 },
    // Add more data as needed
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    // Store data in localStorage
    localStorage.setItem("demo_data", JSON.stringify(DEMO_DATA));

    // Retrieve data from localStorage
    const storedData = localStorage.getItem("new_data")
      ? localStorage.getItem("new_data")
      : localStorage.getItem("demo_data");

    // Check if data exists in localStorage before setting state
    if (storedData) {
      setData(JSON.parse(storedData)); // Parse the stored string back to an array
    }

    console.log(storedData);
  }, []);

  const searchFunction = (e) => {
    e.preventDefault();

    const name = e.target.value.trim();

    const storedData = localStorage.getItem("new_data")
      ? localStorage.getItem("new_data")
      : localStorage.getItem("demo_data");

    const filteredData = JSON.parse(storedData).filter( user => user.userName.toLowerCase().includes(name));

    setData(filteredData);

  };

  return (
    <div className="p-6">
      <div className="w-full max-w-xs m-auto">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => searchFunction(e)}
        />
      </div>
      <h2 className="text-2xl font-bold mb-4">Demo Table</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">User Name</th>
              <th className="px-4 py-2">Salary</th>
              <th className="px-4 py-2">Savings</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="border px-4 py-2">{row.userName}</td>
                <td className="border px-4 py-2">{row.salary}</td>
                <td className="border px-4 py-2">{row.savings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DemoTable;
