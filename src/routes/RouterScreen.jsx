import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/home/Home";
import NewItems from "../components/pages/newItems/NewItems";
import AllReports from "../components/pages/getReports/AllReports";


function RoutersScreen() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/NewItems" element={<NewItems />} />
      <Route path="/AllReports" element={<AllReports />} />
    </Routes>
  );
}

export default RoutersScreen;
