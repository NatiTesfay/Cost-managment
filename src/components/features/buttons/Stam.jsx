import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    selectOption: ''
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('myData');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  }

  function handleAdd() {
    const newEntry = { ...formData };
    setData(prevData => [...prevData, newEntry]);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      selectOption: ''
    });

    const updatedData = [...data, newEntry];
    localStorage.setItem('myData', JSON.stringify(updatedData));
  }

  return (
    <div>
      <label>
        First Name:
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
      </label>
      <label>
        Last Name:
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Phone:
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
      </label>
      <label>
        Address:
        <input type="text" name="address" value={formData.address} onChange={handleChange} />
      </label>
      <label>
        City:
        <input type="text" name="city" value={formData.city} onChange={handleChange} />
      </label>
      <label>
  
        <select name="selectOption" value={formData.selectOption} onChange={handleChange}>
          <option value="">c</option>
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
        </select>
      </label>
      <button onClick={handleAdd}>Add Data</button>
    </div>
  );
}
  itemName: "",
    price: "",
    category: [
      {
        fashion: "fashion",
      },
      {
        food: "food",
      },
      {
        sport: "sport",
      },
      {
        vacations: "vacations",
      },
    ],
    date: "",

    description: "",




    months: {
        January: "January",
        February: "February",
        March: "March",
        April: "April",
        May: "May",
        June: "June",
        July: "July",
        August: "August",
        October: "October ",
        November: "November",
        December: "December",
      },
      years: {
        year1: 2023,
        year2: 2022,
        year3: 2021,
        year4: 2020,
        year5: 2019,
        year6: 2018,
        year7: 2017,
        year8: 2016,
        year9: 2015,
        year10: 2014,
      },





      import React, { useState, useEffect } from "react";
import {
  MDBBtn,
  MDBRow,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
//import modules from "react-ui-kit/dist/modules";

function MonthlyReport() {
  const [showPopUp, setShowPopUp] = useState(false);

  const [formData, setFormData] = useState({
    months: {
      January: "",
      February: "",
      March: "",
      April: "",
      May: "",
      June: "",
      July: "",
      August: "",
      October: " ",
      November: "",
      December: "",
    },
    years: {
      year1: "",
      year2:"" ,
      year3:"" ,
      year4:"" ,
      year5:"" ,
      year6:"" ,
      year7:"" ,
      year8:"" ,
      year9: "",
      year10:"" ,
    },
    
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('myData');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);
  // localStorage.clear();

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  }

  function handleAdd() {
    const newEntry = { ...formData };
    setData(prevData => [...prevData, newEntry]);
    setFormData({
      itemName: "",
      price: "",
      category: "",
      date: "",
      description: "",
    });

    const updatedData = [...data, newEntry];
    localStorage.setItem('myData', JSON.stringify(updatedData));
  }


  //arrow function that checks when user press the btn if the state of showPopUp is true
  //if it is true, it will run the function and return popup
  const showPopup = () => setShowPopUp(!showPopUp);
