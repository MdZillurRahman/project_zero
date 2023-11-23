import React from "react";
import { FcDataSheet } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();

  const redirectButton = () => {
    navigate("/data_sheet");
  };

  return (
    <section className="flex flex-col justify-center">
      <div
        onClick={() => redirectButton()}
        className="w-[200px] border-2 rounded border-purple-600 m-auto p-6 cursor-pointer"
      >
        <div className="flex justify-center items-center gap-6 text-xl">
          <FcDataSheet />
          Data Sheet
        </div>
      </div>
      <Link to="/add_new_customer" className="btn btn-primary p-4 mx-auto my-4">
        Add New Customer
      </Link>
    </section>
  );
};

export default Button;
