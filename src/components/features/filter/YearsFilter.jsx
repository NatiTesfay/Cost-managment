// import { useState, useEffect, useCallback } from 'react';

// function YearsFilter(date, interval) {
//   const [filteredEvents, setFilteredEvents] = useState([]);

//   const filterEvents = useCallback((events) => {
//     const filteredEvents = filterEventsByDate(events, date, interval);
//     setFilteredEvents(filteredEvents);
//   }, [date, interval]);

//   useEffect(() => {
//     const events = JSON.parse(localStorage.getItem('events'));
//     filterEvents(events);
//   }, [filterEvents]);

//   return filteredEvents;
// }

// const ParentComponent = ()=>  {
//     const date = new Date('2022-12-31');
//     const interval = 1000 * 60 * 60 * 24 * 30 * 12; // one year in milliseconds
//     const filteredEvents = useFilteredEvents(date, interval);
  
//     return (
//       <div>
//         <ChildComponent events={filteredEvents} />
//       </div>
//     );
//   }
  
