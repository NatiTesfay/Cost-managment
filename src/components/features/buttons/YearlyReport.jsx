import React, { useState, useEffect } from "react";

//import modules from "react-ui-kit/dist/modules";

function YearlyReport() {

  const [showPopUp, setShowPopUp] = useState(false);

  const [yearlyReport, setYearlyReport] = useState({
    yearCategory: "",
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("YearlyReport:");


    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);
  // localStorage.clear();

  function handleChange(event) {
    const { name, value } = event.target;
    setYearlyReport((prevYearlyReport) => ({
      ...prevYearlyReport,
      [name]: value,
    }));
  }

  function handleAdd() {
    const newEntry = { ...yearlyReport };
    setData((prevData) => [...prevData, newEntry]);
    setYearlyReport({
      yearCategory: "",
    });

    const updatedData = [...data, newEntry];
    localStorage.setItem("YearlyReport:", JSON.stringify(updatedData));
  }

  //arrow function that checks when user press the btn if the state of showPopUp is true
  //if it is true, it will run the function and return popup

  const showPopup = () => setShowPopUp(!showPopUp);

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
      <button onClick={handleAdd}>Add
      </button>
    </form>
  );
}

export default YearlyReport;
