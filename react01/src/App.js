import React, { useState } from "react";
import Customers from "./Components/Props/Customers";
import ParentCom from "./Components/Props/ParentCom";
import ConvertCurrency from "./Components/State/ConvertCurrency/ConvertCurrency";
import Counter from "./Components/State/Counter";
import Login from "./Components/State/Login";
import Tech2, { Company, Address } from "./Components/Tech2/Tech2";

export default function App() {
  return (
    <div>
      {/* <Tech2.Company />
      <Tech2.Address /> */}
      {/* <Company />
      <Address /> */}
      {/* <Customers>
        <h1>Tạ Hoàng An</h1>
        <h2>Hà Nội</h2>
      </Customers> */}
      {/* <Counter /> */}
      {/* <Login /> */}
      <ConvertCurrency />
    </div>
  );
}
