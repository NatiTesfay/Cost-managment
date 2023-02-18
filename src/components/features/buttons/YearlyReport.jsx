import React, { useState, useEffect } from "react";

//import modules from "react-ui-kit/dist/modules";

function YearlyReport() {
  const [yearlyReport, setYearlyReport] = useState({yearCategory: "",});
  const [data, setData] = useState([]);

  // get yearly report data after component render
  useEffect(() => {
    const storedData = localStorage.getItem("YearlyReport:");
    if (storedData) {
      // return updated data
      setData(JSON.parse(storedData));
    }
  }, []);
  // localStorage.clear();

  // target the year category by key name 
  // target the category with value 
  function handleChange(event) {
    const { name, value } = event.target;
    setYearlyReport((prevYearlyReport) => ({
      ...prevYearlyReport,
      [name]: value,
    }));
  }
// yearly report distraction to get existing yearly report data
  function handleAdd() {
    const newEntry = { ...yearlyReport };
    setData((prevData) => [...prevData, newEntry]);
    setYearlyReport({
      yearCategory: "",
    });

    //const updatedData hold the new yearly report data
    const updatedData = [...data, newEntry];
    localStorage.setItem("YearlyReport:", JSON.stringify(updatedData));
  }

  //arrow function that checks when user press the btn if the state of showPopUp is true
  //if it is true, it will run the function and return popup


  return (
    <form>
      <select
        id="form6Example1"
        label="yearCategory"
        name="yearCategory"
        value={yearlyReport.yearCategory}
        onChange={handleChange}
      >
        <option value="2023">Choose Year</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
        <option value="2014">2014</option>
        <option value="2013">2013</option>
        <option value="2012">2012</option>
      </select>
      <button onClick={handleAdd}>Add</button>
    </form>
  );
}

export default YearlyReport;
