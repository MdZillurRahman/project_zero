import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Button from "./Components/Button/Button";
import DataSheets from "./Components/DataSheets/DataSheets";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import AddNewCustomer from "./Components/Add_New_Customer/AddNewCustomer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Button />} />
        <Route path="/data_sheet" element={<DataSheets />} />
        <Route path="/add_new_customer" element={<AddNewCustomer />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
