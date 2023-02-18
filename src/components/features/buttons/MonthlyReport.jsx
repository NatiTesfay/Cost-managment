import React, { useState, useEffect } from "react";

//import modules from "react-ui-kit/dist/modules";

function MonthlyReport(props) {

  // const [showPopUp, setShowPopUp] = useState(false);

  const [monthlyReport, setMonthlyReport] = useState({
    monthCategory : "",
    yearCategory : "",
  });
  const [data, setData] = useState([]);


  useEffect(() => {
    const storedData = localStorage.getItem('MonthlyReport:');



    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);
  // localStorage.clear();

  function handleChange(event) {
    const { name, value } = event.target;
    setMonthlyReport(prevmonthlyReport => ({ ...prevmonthlyReport, [name]: value }));
  }

  function handleAdd() {
    const newEntry = { ...monthlyReport };
    setData(prevData => [...prevData, newEntry]);
    setMonthlyReport({
      yearCategory : "",
      monthCategory:""
      ,
    });

    const updatedData = [...data, newEntry];
    localStorage.setItem('MonthlyReport:', JSON.stringify(updatedData));
  }

  useEffect(() => {
    localStorage.getItem("MonthlyReport:")

  })
  


  //arrow function that checks when user press the btn if the state of showPopUp is true
  //if it is true, it will run the function and return popup

  // const showPopup = () => setShowPopUp(!showPopUp);

  return (
    <form >
              <select
                id="form6Example1"
                label="yearCategory"
                name="yearCategory" value={monthlyReport.yearCategory} onChange={handleChange}

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
              <select
                id="form6Example1"
                label="monthCategory"
                name="monthCategory" value={monthlyReport.monthCategory} onChange={handleChange}

              >
                <option value="">Choose Month</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">June</option>
                <option value="8">August</option>
                <option value="9">August</option>
                <option value="10">August</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
              <button onClick={handleAdd} >Add</button>
    </form>
  );
}

export default MonthlyReport;
