// import React, { useState, createContext } from "react";
// export const usersYearsContext = createContext();

// function YearlyReport() {
//   const [showPopUp, setShowPopUp] = useState(false);
//   const [years, setYears] = useState("");

//   function handleSubmit() {
//     const data = JSON.parse(localStorage.getItem("yearss") || "[]");
//     const AllYears = [
//       { year: 2023 },
//       { year: 2022 },
//       { year: 2021 },
//       { year: 2020 },
//       { year: 2019 },
//       { year: 2018 },
//       { year: 2017 },
//       { year: 2016 },
//       { year: 2015 },
//       { year: 2014 },
//     ];
//     data.push(AllYears);
//     localStorage.setItem("yearss", JSON.stringify(data));
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h1>Local storage</h1>
//       <select
//         type="text"
//         value={years}
//         onChange={(e) => {
//           setYears(e.target.value);
//         }}
//       >
//         <option value="2023">2023</option>
//         <option value="2022">2022</option>
//         <option value="2021">2021</option>
//         <option value="2020">2020</option>
//         <option value="2019">2019</option>
//         <option value="2018">2018</option>
//         <option value="2017">2017</option>
//         <option value="2016">2016</option>
//         <option value="2015">2015</option>
//         <option value="2014">2014</option>
//         <option value="2013">2013</option>
//         <option value="2012">2012</option>
//       </select>
//       <button onClick={handleSubmit}>Save</button>
//     </form>
//   );
// }

// export default YearlyReport;
