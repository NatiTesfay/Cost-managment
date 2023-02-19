// import { useContext, useState } from "react";


// function YearsFilter({ item }) {
//     const { data } = useContext(DataContext);
//     const [selectedDate, setSelectedDate] = useState(null);
  
//     const filteredData = data.filter((item) => {
//       const itemDate = new Date(item.date);
//       return (
//         selectedDate &&
//         itemDate.getFullYear() === selectedDate.getFullYear() &&
//         itemDate.getMonth() === selectedDate.getMonth() &&
//         itemDate.getDate() === selectedDate.getDate()
//       );
//     });
  
//     function handleDateChange(date) {
//       setSelectedDate(date);
//     }
  
//     return (
//       <div>
//         <DatePicker selected={selectedDate} onChange={handleDateChange} />
//         <h2>Report</h2>
//         {selectedDate && (
//           <p>Showing results for {selectedDate.toDateString()}</p>
//         )}
//         <ul>
//           {filteredData.map((item) => (
//             <li key={item.id}>{item.name}</li>
//           ))}
//         </ul>
//       </div>
//     );
//           }

// export default YearsFilter;
